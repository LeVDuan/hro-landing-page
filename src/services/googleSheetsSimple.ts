import type { MemberData, ProcessedMember } from '@/types/memberSimple'

const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || ''
const SHEET_GID = process.env.NEXT_PUBLIC_SHEET_GID || '0'

export class GoogleSheetsSingleTableService {
  private getSheetUrl(): string {
    return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${SHEET_GID}`
  }

  private parseCsvRow(row: string): string[] {
    const values: string[] = []
    let current = ''
    let inQuotes = false
    
    for (let i = 0; i < row.length; i++) {
      const char = row[i]
      
      if (char === '"') {
        if (inQuotes && row[i + 1] === '"') {
          current += '"'
          i++
        } else {
          inQuotes = !inQuotes
        }
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim())
        current = ''
      } else {
        current += char
      }
    }
    
    if (current) values.push(current.trim())
    
    return values
  }

  private toCamelCase(str: string): string {
    return str
      .toLowerCase()
      .replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
      .replace(/\s+/g, '')
      .replace(/^(\w)/, (_, letter) => letter.toLowerCase())
  }

  async fetchMembers(): Promise<MemberData[]> {
    try {
      const response = await fetch(this.getSheetUrl(), {
        // No auto-revalidation - fresh on each deploy/restart only
        cache: 'force-cache'
      })
      
      const text = await response.text()
      const rows = text.split('\n').filter(row => row.trim())
      
      if (rows.length < 2) return []
      
      const headers = this.parseCsvRow(rows[0]).map(h => this.toCamelCase(h))
      
      return rows.slice(1).map(row => {
        const values = this.parseCsvRow(row)
        const member: any = {}
        
        headers.forEach((header, index) => {
          const value = values[index]?.trim() || ''

          member[header] = value
        })
        
        return member as MemberData
      })
    } catch (error) {
      console.error('Error fetching members from Google Sheets:', error)
      
return []
    }
  }

  processMemberData(members: MemberData[]): ProcessedMember[] {
    return members
      .filter(m => m.id && m.name) // Filter out empty rows
      .map(member => {
        const processed: ProcessedMember = {
          id: member.id,
          name: member.name,
          jerseyNumber: member.jersey || '',
          generation: member.generation || '',
          image: member.image || '/avatars/default.png',
          color: member.color || 'var(--mui-palette-primary-mainOpacity)',
          roles: {
            leadership: [],
            management: false,
            media: false,
            mediaHead: false,
            player: {
              positions: [],
              positionDetail: member.positionDetail,
              battingThrowing: member.battingThrowing
            }
          },
          active: member.active?.toLowerCase() === 'true' || member.active === '1'
        }

        // Process leadership roles
        if (this.isTrue(member.captain)) processed.roles.leadership.push('Captain')
        if (this.isTrue(member.president)) processed.roles.leadership.push('President')
        if (this.isTrue(member.vicePresident)) processed.roles.leadership.push('Vice president')
        if (this.isTrue(member.viceCaption)) processed.roles.leadership.push('Vice captain')

        // Process management
        if (this.isTrue(member.manager)) processed.roles.management = true

        // Process media
        if (this.isTrue(member.media)) processed.roles.media = true

        if (this.isTrue(member.mediaHead)) {
          processed.roles.media = true
          processed.roles.mediaHead = true
          processed.roles.leadership.push('Head of Media')
        }

        // Process playing positions
        if (this.isTrue(member.pitcher)) processed.roles.player.positions.push('Pitcher')
        if (this.isTrue(member.catcher)) processed.roles.player.positions.push('Catcher')

        if (this.isTrue(member.infielder)) {
          // Add specific infield positions from positionDetail
          if (member.positionDetail) {
            const positions = member.positionDetail.split('/').map(p => p.trim())

            positions.forEach(pos => {
              if (['B1', 'B2', 'B3', 'SS'].includes(pos)) {
                processed.roles.player.positions.push(pos)
              }
            })
          } else {
            processed.roles.player.positions.push('Infielder')
          }
        }

        if (this.isTrue(member.outfielder)) {
          processed.roles.player.positions.push('OF')
        }

        // Process former leaders
        if (this.isTrue(member.formerLeader) && member.formerRole) {
          processed.roles.predecessor = {
            role: member.formerRole
          }
        }

        return processed
      })
  }

  private isTrue(value?: string): boolean {
    if (!value) return false
    const v = value.toLowerCase().trim()

    
return v === 'true' || v === '1' || v === 'yes' || v === 'x'
  }
}

// Helper function to transform to legacy format
export function transformSingleTableToLegacy(members: ProcessedMember[]) {
  const result = {
    LeadersInfo: [] as any[],
    SubLeadersInfo: [] as any[],
    predecessors: [] as any[],
    managers: [] as any[],
    newManagers: [] as any[],
    mediaTeam: [] as any[],
    pitchers: [] as any[],
    catchers: [] as any[],
    infielders: [] as any[],
    outfielders: [] as any[],
    founders: [] as any[]
  }

  members.forEach(member => {
    if (!member.active) return // Skip inactive members
    
    const baseMember = {
      name: member.name,
      gen: member.generation,
      num: `#${member.jerseyNumber}`,
      image: member.image,
      color: `var(--mui-palette-${member.color}-mainOpacity)`
    }

    // Leaders
    if (member.roles.leadership.length > 0) {
      const mainLeader = member.roles.leadership.find(r => 
        r === 'Captain' || r === 'President'
      )

      const viceLeader = member.roles.leadership.find(r => 
        r.includes('Vice')
      )

      if (mainLeader) {
        result.LeadersInfo.push({
          ...baseMember,
          position: mainLeader
        })
      } else if (viceLeader) {
        result.SubLeadersInfo.push({
          ...baseMember,
          position: viceLeader
        })
      }
    }

    // Predecessors
    if (member.roles.predecessor) {
      result.predecessors.push({
        ...baseMember,
        position: member.roles.predecessor.role
      })
    }

    // Managers
    if (member.roles.management) {
      const isNew = member.generation?.includes('Gen 3') || 
                    member.generation?.includes('Gen 4')
      
      if (isNew) {
        result.newManagers.push(baseMember)
      } else {
        result.managers.push(baseMember)
      }
    }

    // Media Team
    if (member.roles.media) {
      const mediaBase = { ...baseMember }

      if (member.roles.mediaHead) {
        mediaBase.gen = `Head of Media - ${member.generation}`
      }

      result.mediaTeam.push(mediaBase)
    }

    // Players by position
    if (member.roles.player.positions.length > 0) {
      const playerBase = {
        ...baseMember,
        position: member.roles.player.positionDetail || 
                  member.roles.player.positions.join('/'),
        des: member.roles.player.battingThrowing ? 
             `B/T: ${member.roles.player.battingThrowing}` : ''
      }

      if (member.roles.player.positions.includes('Pitcher')) {
        result.pitchers.push(playerBase)
      }

      if (member.roles.player.positions.includes('Catcher')) {
        result.catchers.push(playerBase)
      }

      if (member.roles.player.positions.some(p => 
        ['B1', 'B2', 'B3', 'SS', 'Infielder'].includes(p))) {
        result.infielders.push(playerBase)
      }

      if (member.roles.player.positions.includes('OF')) {
        result.outfielders.push(playerBase)
      }
    }
  })

  return result
}