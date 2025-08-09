export interface MemberData {
  id: string
  name: string
  jersey: string
  generation: string
  image: string
  color?: string
  
  // Leadership roles (TRUE/FALSE or empty)
  captain?: string
  president?: string
  vicePresident?: string
  viceCaption?: string
  
  // Management roles
  manager?: string
  
  // Media roles
  media?: string
  mediaHead?: string
  
  // Playing positions
  pitcher?: string
  catcher?: string
  infielder?: string
  outfielder?: string
  positionDetail?: string // B1, B2, B3, SS, OF details
  battingThrowing?: string // L/L, R/R, etc.
  
  // Former leaders
  formerLeader?: string
  formerRole?: string // Captain Gen 1, President Gen 2, etc.
  
  // Status
  active?: string
}

export interface ProcessedMember {
  id: string
  name: string
  jerseyNumber: string
  generation: string
  image: string
  color: string
  roles: {
    leadership: string[]
    management: boolean
    media: boolean
    mediaHead: boolean
    player: {
      positions: string[]
      positionDetail?: string
      battingThrowing?: string
    }
    predecessor?: {
      role: string
    }
  }
  active: boolean
}