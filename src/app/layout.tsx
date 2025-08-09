// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// Type Imports
import type { ChildrenType } from '@core/types'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'HRO - HUST Red owls baseball team',
  description:
    'HRO - CLB bóng chày Đoàn Đại học Bách khoa Hà Nội - Trực thuộc Ban Văn nghệ thể thao Đoàn Đại học Bách khoa Hà Nội'
}

const RootLayout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html id='__next' lang={locale} dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
