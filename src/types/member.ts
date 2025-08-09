export interface Member {
  id: string
  name: string
  jerseyNumber: string
  generation: string
  image: string
  color?: string
}

export interface MemberRole {
  memberId: string
  roleType: 'leadership' | 'management' | 'player' | 'media' | 'predecessor'
  role?: string
  position?: string
  battingThrowing?: string
  order?: number
  active: boolean
}

export interface MemberWithRoles extends Member {
  roles: {
    leadership?: string[]
    management?: boolean
    player?: {
      positions: string[]
      battingThrowing?: string
    }
    media?: boolean
    predecessor?: {
      role: string
    }
  }
}

export interface TeamData {
  members: Member[]
  roles: MemberRole[]
}