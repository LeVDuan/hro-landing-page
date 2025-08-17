import { useState, useEffect } from 'react'

import { GoogleSheetsSingleTableService } from '@/services/googleSheetsSimple'
import type { ProcessedStats } from '@/types/statsTypes'

let cachedStatsData: ProcessedStats[] | null = null
let isStatsInitialized = false

export function useStatsData(): {
  stats: ProcessedStats[]
  loading: boolean
  error: string | null
} {
  const [stats, setStats] = useState<ProcessedStats[]>(cachedStatsData || [])
  const [loading, setLoading] = useState(!cachedStatsData)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      if (isStatsInitialized && cachedStatsData) {
        setStats(cachedStatsData)
        setLoading(false)

        return
      }

      try {
        setLoading(true)
        const service = new GoogleSheetsSingleTableService()
        const rawStats = await service.fetchStats()
        const processedStats = service.processStatsData(rawStats)
        
        cachedStatsData = processedStats
        isStatsInitialized = true
        setStats(processedStats)
        setError(null)
      } catch (err) {
        console.error('Error fetching stats data:', err)
        setError('Failed to load stats data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { stats, loading, error }
}