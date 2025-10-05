// Raw data interface for Timeline from Google Sheets
export interface TimelineData {
  id: string
  time: string
  image: string
  totalMatches?: string
  winMatches?: string
  loseMatches?: string
  competitionResultsEn?: string
  competitionResultsVi?: string
  competitionResultsJa?: string
  competitionResultsKo?: string
  titleEn: string
  titleVi: string
  titleJa: string
  titleKo: string
  descriptionEn: string
  descriptionVi: string
  descriptionJa: string
  descriptionKo: string
  active?: string
}

// Processed Timeline interface with multi-language support
export interface ProcessedTimeline {
  id: string
  time: string
  image: string
  totalMatches?: number
  winMatches?: number
  loseMatches?: number
  competitionResults?: {
    en: string
    vi: string
    ja: string
    ko: string
  }
  title: {
    en: string
    vi: string
    ja: string
    ko: string
  }
  description: {
    en: string
    vi: string
    ja: string
    ko: string
  }
  active: boolean
}