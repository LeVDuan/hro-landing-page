import { useState, useEffect } from 'react'

import { GoogleSheetsSingleTableService } from '@/services/googleSheetsSimple'
import type { ProcessedTimeline } from '@/types/timelineTypes'

let cachedTimelineData: ProcessedTimeline[] | null = null
let isTimelineInitialized = false

export function useTimelineData(): {
  timeline: ProcessedTimeline[]
  loading: boolean
  error: string | null
} {
  const [timeline, setTimeline] = useState<ProcessedTimeline[]>(cachedTimelineData || [])
  const [loading, setLoading] = useState(!cachedTimelineData)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      if (isTimelineInitialized && cachedTimelineData) {
        setTimeline(cachedTimelineData)
        setLoading(false)

        return
      }

      try {
        setLoading(true)
        const service = new GoogleSheetsSingleTableService()
        const rawTimeline = await service.fetchTimeline()
        const processedTimeline = service.processTimelineData(rawTimeline)
        
        cachedTimelineData = processedTimeline
        isTimelineInitialized = true
        setTimeline(processedTimeline)
        setError(null)
      } catch (err) {
        console.error('Error fetching timeline data:', err)
        setError('Failed to load timeline data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { timeline, loading, error }
}