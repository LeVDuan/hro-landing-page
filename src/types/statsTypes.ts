// Raw data interface for Stats from Google Sheets
export interface StatsData {
  id: string
  icon: string
  color: string
  value: string
  titleEn: string
  titleVi: string
  titleJa: string
  titleKo: string
  active?: string
}

// Processed Stats interface with multi-language support
export interface ProcessedStats {
  id: string
  icon: string
  color: string
  value: number
  title: {
    en: string
    vi: string
    ja: string
    ko: string
  }
  active: boolean
}