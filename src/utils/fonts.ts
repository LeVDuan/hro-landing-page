import { Inter, Noto_Sans_JP, Noto_Sans_KR, Be_Vietnam_Pro } from 'next/font/google'

// English and default font
export const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter'
})

// Vietnamese font - optimized for Vietnamese characters
export const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-be-vietnam'
})

// Japanese font
export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-jp',
  preload: false // Reduce initial bundle size
})

// Korean font
export const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-kr',
  preload: false // Reduce initial bundle size
})

// Font mapping by locale
export const fontFamilies = {
  en: inter.style.fontFamily,
  vi: beVietnamPro.style.fontFamily,
  ja: notoSansJP.style.fontFamily,
  ko: notoSansKR.style.fontFamily
} as const

// Get font family by locale
export const getFontFamily = (locale: string): string => {
  return fontFamilies[locale as keyof typeof fontFamilies] || fontFamilies.en
}

// Get all font variables for CSS
export const getFontVariables = () => {
  return `${inter.variable} ${beVietnamPro.variable} ${notoSansJP.variable} ${notoSansKR.variable}`
}