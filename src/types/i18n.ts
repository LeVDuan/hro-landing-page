// Type definitions for translation keys
import { useTranslations as useNextIntlTranslations } from 'next-intl'

// Basic locale type
export type Locale = 'en' | 'vi' | 'ja' | 'ko'

// Re-export the original hook for now
export { useNextIntlTranslations as useTranslations }