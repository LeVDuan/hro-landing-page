export type Locale = (typeof locales)[number]

export const locales = ['en', 'vi', 'ja'] as const
export const defaultLocale: Locale = 'vi'
