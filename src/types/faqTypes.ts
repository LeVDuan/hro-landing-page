export interface FaqsDataTypes {
  id: string
  question: string
  active?: boolean
  answer: string
}

// For multi-language FAQ from Google Sheets
export interface FaqData {
  id: string
  questionEn: string
  questionVi: string
  questionJa: string
  questionKo: string
  answerEn: string
  answerVi: string
  answerJa: string
  answerKo: string
  active?: string
}

export interface ProcessedFaq {
  id: string
  question: {
    en: string
    vi: string
    ja: string
    ko: string
  }
  answer: {
    en: string
    vi: string
    ja: string
    ko: string
  }
  active: boolean
}