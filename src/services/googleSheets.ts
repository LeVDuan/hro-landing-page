import { google } from 'googleapis'

import type { Member, MemberRole, MemberWithRoles, TeamData } from '@/types/member'

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || ''
const MEMBERS_RANGE = 'Members!A:F'
const ROLES_RANGE = 'Roles!A:G'

export class GoogleSheetsService {
  private sheets: any

  constructor() {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
    })

    this.sheets = google.sheets({ version: 'v4', auth })
  }

  async fetchMembers(): Promise<Member[]> {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: MEMBERS_RANGE
      })

      const rows = response.data.values

      if (!rows || rows.length === 0) return []

      const headers = rows[0]

      const members = rows.slice(1).map((row: any[]) => {
        const member: any = {}

        headers.forEach((header: string, index: number) => {
          const key = this.toCamelCase(header)

          member[key] = row[index] || ''
        })
        
return member as Member
      })

      return members
    } catch (error) {
      console.error('Error fetching members:', error)
      
return []
    }
  }

  async fetchRoles(): Promise<MemberRole[]> {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: ROLES_RANGE
      })

      const rows = response.data.values

      if (!rows || rows.length === 0) return []

      const headers = rows[0]

      const roles = rows.slice(1).map((row: any[]) => {
        const role: any = {}

        headers.forEach((header: string, index: number) => {
          const key = this.toCamelCase(header)

          if (key === 'active') {
            role[key] = row[index]?.toLowerCase() === 'true'
          } else if (key === 'order') {
            role[key] = parseInt(row[index]) || 0
          } else {
            role[key] = row[index] || ''
          }
        })
        
return role as MemberRole
      })

      return roles
    } catch (error) {
      console.error('Error fetching roles:', error)
      
return []
    }
  }

  async fetchTeamData(): Promise<TeamData> {
    const [members, roles] = await Promise.all([
      this.fetchMembers(),
      this.fetchRoles()
    ])

    return { members, roles }
  }

  private toCamelCase(str: string): string {
    return str
      .toLowerCase()
      .replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
      .replace(/\s+/g, '')
  }
}

export function transformToMembersWithRoles(data: TeamData): MemberWithRoles[] {
  const { members, roles } = data

  return members.map(member => {
    const memberRoles = roles.filter(role => role.memberId === member.id)
    
    const transformed: MemberWithRoles = {
      ...member,
      roles: {}
    }

    memberRoles.forEach(role => {
      switch (role.roleType) {
        case 'leadership':
          if (!transformed.roles.leadership) transformed.roles.leadership = []
          if (role.role) transformed.roles.leadership.push(role.role)
          break
        case 'management':
          transformed.roles.management = true
          break
        case 'player':
          if (!transformed.roles.player) {
            transformed.roles.player = { positions: [], battingThrowing: '' }
          }

          if (role.position) transformed.roles.player.positions.push(role.position)
          if (role.battingThrowing) transformed.roles.player.battingThrowing = role.battingThrowing
          break
        case 'media':
          transformed.roles.media = true
          break
        case 'predecessor':
          if (role.role) {
            transformed.roles.predecessor = { role: role.role }
          }

          break
      }
    })

    return transformed
  })
}

export function getMembersByRole(
  members: MemberWithRoles[], 
  roleType: 'leadership' | 'management' | 'player' | 'media' | 'predecessor'
): MemberWithRoles[] {
  return members.filter(member => {
    switch (roleType) {
      case 'leadership':
        return member.roles.leadership && member.roles.leadership.length > 0
      case 'management':
        return member.roles.management
      case 'player':
        return member.roles.player && member.roles.player.positions.length > 0
      case 'media':
        return member.roles.media
      case 'predecessor':
        return member.roles.predecessor
      default:
        return false
    }
  })
}

export function getMembersByPosition(members: MemberWithRoles[], position: string): MemberWithRoles[] {
  return members.filter(member => 
    member.roles.player?.positions.includes(position)
  )
}