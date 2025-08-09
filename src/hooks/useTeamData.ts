import { useState, useEffect } from 'react'

import { GoogleSheetsPublicService } from '@/services/googleSheetsPublic'
import { transformToMembersWithRoles } from '@/services/googleSheets'
import { adaptToLegacyFormat } from '@/services/dataAdapter'
import type { MemberWithRoles } from '@/types/member'

let cachedData: ReturnType<typeof adaptToLegacyFormat> | null = null
let cacheTimestamp: number = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export function useTeamData() {
  const [data, setData] = useState(cachedData)
  const [loading, setLoading] = useState(!cachedData)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      const now = Date.now()
      
      if (cachedData && now - cacheTimestamp < CACHE_DURATION) {
        setData(cachedData)
        setLoading(false)
        
return
      }

      try {
        setLoading(true)
        const service = new GoogleSheetsPublicService()
        const teamData = await service.fetchTeamData()
        const membersWithRoles = transformToMembersWithRoles(teamData)
        const legacyData = adaptToLegacyFormat(membersWithRoles)
        
        cachedData = legacyData
        cacheTimestamp = now
        setData(legacyData)
        setError(null)
      } catch (err) {
        console.error('Error fetching team data:', err)
        setError('Failed to load team data')
        
        // Fallback to existing data if available
        if (cachedData) {
          setData(cachedData)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

export function useTeamMembers(): {
  members: MemberWithRoles[]
  loading: boolean
  error: string | null
} {
  const [members, setMembers] = useState<MemberWithRoles[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const service = new GoogleSheetsPublicService()
        const teamData = await service.fetchTeamData()
        const membersWithRoles = transformToMembersWithRoles(teamData)
        
        setMembers(membersWithRoles)
        setError(null)
      } catch (err) {
        console.error('Error fetching team members:', err)
        setError('Failed to load team members')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { members, loading, error }
}