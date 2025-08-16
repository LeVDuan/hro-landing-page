import { GoogleSheetsSingleTableService, transformSingleTableToLegacy } from '@/services/googleSheetsSimple'
import { founders } from '@/fake-db/data'

let cache: any = null
let isInitialized = false

export async function getTeamData() {
  if (isInitialized && cache) {
    return cache
  }

  const service = new GoogleSheetsSingleTableService()
  const rawMembers = await service.fetchMembers()
  const processedMembers = service.processMemberData(rawMembers)
  const legacyData = transformSingleTableToLegacy(processedMembers)
  
  // Add founders from static data (they're not in the members table)
  legacyData.founders = founders
  
  cache = legacyData
  isInitialized = true
  
  return legacyData
}