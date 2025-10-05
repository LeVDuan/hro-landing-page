import { useState, useEffect } from 'react'

import { GoogleSheetsSingleTableService, transformSingleTableToLegacy } from '@/services/googleSheetsSimple'
import type { ProcessedMember } from '@/types/memberSimple'

let cachedData: ReturnType<typeof transformSingleTableToLegacy> | null = null
let isInitialized = false

export function useTeamData() {
  const [data, setData] = useState(cachedData)
  const [loading, setLoading] = useState(!cachedData)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      // Only fetch once per client session - fresh on page reload
      if (isInitialized && cachedData) {
        setData(cachedData)
        setLoading(false)
        
        return
      }

      try {
        setLoading(true)
        const service = new GoogleSheetsSingleTableService()
        const rawMembers = await service.fetchMembers()
        const processedMembers = service.processMemberData(rawMembers)
        const legacyData = transformSingleTableToLegacy(processedMembers)
        
        cachedData = legacyData
        isInitialized = true
        setData(legacyData)
        setError(null)
      } catch (err) {
        console.error('Error fetching team data:', err)
        setError('Failed to load team data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

export function useTeamMembers(): {
  members: ProcessedMember[]
  loading: boolean
  error: string | null
} {
  const [members, setMembers] = useState<ProcessedMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const service = new GoogleSheetsSingleTableService()
        const rawMembers = await service.fetchMembers()
        const processedMembers = service.processMemberData(rawMembers)
        
        setMembers(processedMembers)
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