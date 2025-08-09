import { GoogleSheetsPublicService } from '@/services/googleSheetsPublic'
import { transformToMembersWithRoles } from '@/services/googleSheets'
import { adaptToLegacyFormat } from '@/services/dataAdapter'
import * as fallbackData from '@/fake-db/data'

let cache: any = null
let cacheTimestamp = 0
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour for server-side cache

export async function getTeamData() {
  const now = Date.now()
  
  if (cache && now - cacheTimestamp < CACHE_DURATION) {
    return cache
  }

  try {
    const service = new GoogleSheetsPublicService()
    const teamData = await service.fetchTeamData()
    
    if (!teamData.members.length) {
      console.log('No data from Google Sheets, using fallback')
      
return fallbackData
    }
    
    const membersWithRoles = transformToMembersWithRoles(teamData)
    const legacyData = adaptToLegacyFormat(membersWithRoles)
    
    cache = legacyData
    cacheTimestamp = now
    
    return legacyData
  } catch (error) {
    console.error('Error fetching team data, using fallback:', error)
    
return fallbackData
  }
}