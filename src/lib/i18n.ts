import { notFound } from 'next/navigation'

import { getRequestConfig } from 'next-intl/server'

import type { Locale } from '@/configs/localeConfig'
import { locales } from '@/configs/localeConfig'

// Date and number formatting configurations per locale
export const formatters = {
  en: {
    currency: 'USD',
    dateFormat: 'MM/dd/yyyy',
    numberFormat: '1,234.56'
  },
  vi: {
    currency: 'VND',
    dateFormat: 'dd/MM/yyyy',
    numberFormat: '1.234,56'
  },
  ja: {
    currency: 'JPY',
    dateFormat: 'yyyy年MM月dd日',
    numberFormat: '1,234.56'
  },
  ko: {
    currency: 'KRW',
    dateFormat: 'yyyy년 MM월 dd일',
    numberFormat: '1,234.56'
  }
} as const

// Locale display names
export const localeNames: Record<Locale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
  ja: '日本語',
  ko: '한국어'
}

// Locale flags/icons (using country codes)
export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  vi: '🇻🇳',
  ja: '🇯🇵',
  ko: '🇰🇷'
}

// Helper to validate locale
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

// Get locale configuration
export function getLocaleConfig(locale: Locale) {
  return {
    locale,
    name: localeNames[locale],
    flag: localeFlags[locale],
    formatters: formatters[locale]
  }
}

// Enhanced request config
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is valid
  if (!isValidLocale(locale)) {
    notFound()
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
    timeZone: 'Asia/Ho_Chi_Minh',
    now: new Date()
  }
})