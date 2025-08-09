import type { Member, MemberRole, TeamData } from '@/types/member'

const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || ''
const MEMBERS_GID = process.env.NEXT_PUBLIC_MEMBERS_GID || '0'
const ROLES_GID = process.env.NEXT_PUBLIC_ROLES_GID || '1'

export class GoogleSheetsPublicService {
  private getCsvUrl(gid: string): string {
    return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`
  }

  private async fetchCsv(url: string): Promise<string[][]> {
    try {
      const response = await fetch(url, {
        next: { revalidate: 3600 }
      })

      const text = await response.text()
      
      const rows = text.split('\n').map(row => {
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
      })
      
      return rows.filter(row => row.length > 1 || row[0])
    } catch (error) {
      console.error('Error fetching CSV:', error)
      
return []
    }
  }

  async fetchMembers(): Promise<Member[]> {
    const rows = await this.fetchCsv(this.getCsvUrl(MEMBERS_GID))

    if (rows.length === 0) return []

    const headers = rows[0].map(h => this.toCamelCase(h))

    
return rows.slice(1).map(row => {
      const member: any = {}

      headers.forEach((header, index) => {
        member[header] = row[index] || ''
      })
      
return member as Member
    })
  }

  async fetchRoles(): Promise<MemberRole[]> {
    const rows = await this.fetchCsv(this.getCsvUrl(ROLES_GID))

    if (rows.length === 0) return []

    const headers = rows[0].map(h => this.toCamelCase(h))

    
return rows.slice(1).map(row => {
      const role: any = {}

      headers.forEach((header, index) => {
        const value = row[index] || ''

        if (header === 'active') {
          role[header] = value.toLowerCase() === 'true'
        } else if (header === 'order') {
          role[header] = parseInt(value) || 0
        } else {
          role[header] = value
        }
      })
      
return role as MemberRole
    })
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
      .replace(/^(\w)/, (_, letter) => letter.toLowerCase())
  }
}