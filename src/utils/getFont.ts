import { Inter, Noto_Serif_JP } from 'next/font/google'

// Returns initials from string
const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900']
})

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const getFont = (locale: string) => {
  if (locale === 'ja') {
    return notoSerifJP.style.fontFamily
  } else {
    return inter.style.fontFamily
  }
}
