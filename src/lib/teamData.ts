import { GoogleSheetsSingleTableService, transformSingleTableToLegacy } from '@/services/googleSheetsSimple'
import * as fallbackData from '@/fake-db/data'

let cache: any = null
let isInitialized = false

export async function getTeamData() {
  // Only fetch once per server runtime - fresh on each deploy/restart
  if (isInitialized && cache) {
    return cache
  }

  try {
    const service = new GoogleSheetsSingleTableService()
    const rawMembers = await service.fetchMembers()
    
    if (!rawMembers.length) {
      console.log('No data from Google Sheets, using fallback')
      
      return fallbackData
    }
    
    const processedMembers = service.processMemberData(rawMembers)
    const legacyData = transformSingleTableToLegacy(processedMembers)
    
    // Add founders from fallback data (they're not in the members table)
    legacyData.founders = fallbackData.founders
    
    cache = legacyData
    isInitialized = true
    
    return legacyData
  } catch (error) {
    console.error('Error fetching team data, using fallback:', error)
    
return fallbackData
  }
}