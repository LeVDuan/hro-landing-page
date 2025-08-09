import type { MemberWithRoles } from '@/types/member'

export interface LegacyMember {
  name: string
  position?: string
  gen?: string
  num: string
  image: string
  color: string
  des?: string
}

export function adaptToLegacyFormat(members: MemberWithRoles[]): {
  LeadersInfo: LegacyMember[]
  SubLeadersInfo: LegacyMember[]
  predecessors: LegacyMember[]
  managers: LegacyMember[]
  newManagers: LegacyMember[]
  mediaTeam: LegacyMember[]
  pitchers: LegacyMember[]
  catchers: LegacyMember[]
  infielders: LegacyMember[]
  outfielders: LegacyMember[]
} {
  const result = {
    LeadersInfo: [] as LegacyMember[],
    SubLeadersInfo: [] as LegacyMember[],
    predecessors: [] as LegacyMember[],
    managers: [] as LegacyMember[],
    newManagers: [] as LegacyMember[],
    mediaTeam: [] as LegacyMember[],
    pitchers: [] as LegacyMember[],
    catchers: [] as LegacyMember[],
    infielders: [] as LegacyMember[],
    outfielders: [] as LegacyMember[]
  }

  members.forEach(member => {
    const baseMember: LegacyMember = {
      name: member.name,
      gen: member.generation,
      num: `#${member.jerseyNumber}`,
      image: member.image,
      color: member.color || 'var(--mui-palette-primary-mainOpacity)'
    }

    if (member.roles.leadership) {
      const leadershipRoles = member.roles.leadership
      
      if (leadershipRoles.includes('Captain') || leadershipRoles.includes('President')) {
        result.LeadersInfo.push({
          ...baseMember,
          position: leadershipRoles.find(r => r === 'Captain' || r === 'President') || ''
        })
      } else if (leadershipRoles.some(r => r.includes('Vice'))) {
        result.SubLeadersInfo.push({
          ...baseMember,
          position: leadershipRoles.find(r => r.includes('Vice')) || ''
        })
      }
    }

    if (member.roles.predecessor) {
      result.predecessors.push({
        ...baseMember,
        position: member.roles.predecessor.role
      })
    }

    if (member.roles.management) {
      const isNewManager = member.generation?.includes('Gen 3') || member.generation?.includes('Gen 4')

      if (isNewManager) {
        result.newManagers.push(baseMember)
      } else {
        result.managers.push(baseMember)
      }
    }

    if (member.roles.media) {
      const mediaRole = member.roles.leadership?.find(r => r.includes('Media')) || 'Media Team'

      result.mediaTeam.push({
        ...baseMember,
        gen: mediaRole === 'Head of Media' ? `Head of Media - ${member.generation}` : member.generation || ''
      })
    }

    if (member.roles.player) {
      const playerMember = {
        ...baseMember,
        position: member.roles.player.positions.join('/'),
        des: member.roles.player.battingThrowing ? `B/T: ${member.roles.player.battingThrowing}` : ''
      }

      member.roles.player.positions.forEach(pos => {
        if (pos === 'Pitcher') {
          result.pitchers.push(playerMember)
        } else if (pos === 'Catcher') {
          result.catchers.push(playerMember)
        } else if (['B1', 'B2', 'B3', 'SS'].includes(pos)) {
          if (!result.infielders.find(m => m.name === member.name)) {
            result.infielders.push(playerMember)
          }
        } else if (pos === 'OF') {
          result.outfielders.push(playerMember)
        }
      })
    }
  })

  return result
}