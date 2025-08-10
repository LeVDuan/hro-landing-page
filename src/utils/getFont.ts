// Re-export from fonts.ts for backward compatibility
export { getFontFamily as getFont } from './fonts'

// Keep old implementation as fallback
import { Inter, Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900']
})

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800', '900'] 
})

export const getLegacyFont = (locale: string) => {
  if (locale === 'ja' || locale === 'ko') {
    return roboto.style.fontFamily
  }

  
return inter.style.fontFamily
}