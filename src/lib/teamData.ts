import { GoogleSheetsSingleTableService, transformSingleTableToLegacy } from '@/services/googleSheetsSimple'
import { founders } from '@/fake-db/data'
import type { ProcessedFaq } from '@/types/faqTypes'

let cache: any = null
let isInitialized = false
let faqCache: ProcessedFaq[] | null = null
let faqInitialized = false

export async function getTeamData() {
  if (isInitialized && cache) {
    return cache
  }

  const service = new GoogleSheetsSingleTableService()
  const rawMembers = await service.fetchMembers()
  const processedMembers = service.processMemberData(rawMembers)
  const legacyData = transformSingleTableToLegacy(processedMembers)
  
  // Add static founders data
  legacyData.founders = founders
  
  cache = legacyData
  isInitialized = true
  
  return legacyData
}

export async function getFaqData(): Promise<ProcessedFaq[]> {
  if (faqInitialized && faqCache) {
    return faqCache
  }

  const service = new GoogleSheetsSingleTableService()
  const rawFaqs = await service.fetchFaqs()
  const processedFaqs = service.processFaqData(rawFaqs)
  
  faqCache = processedFaqs
  faqInitialized = true
  
  return processedFaqs
}