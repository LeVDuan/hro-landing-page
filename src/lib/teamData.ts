import { GoogleSheetsSingleTableService, transformSingleTableToLegacy } from '@/services/googleSheetsSimple'
import * as fallbackData from '@/fake-db/data'

let cache: any = null
let isInitialized = false

export async function getTeamData() {
  if (isInitialized && cache) {
    return cache
  }

  try {
    const service = new GoogleSheetsSingleTableService()
    const rawMembers = await service.fetchMembers()
    
    if (!rawMembers.length) {
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