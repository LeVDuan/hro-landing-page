// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

// Type Imports
import FrontLayout from '@components/layout/front-pages'

import type { ChildrenType } from '@core/types'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'HRO - HUST Red owls baseball team',
  description:
    'HRO - CLB bóng chày Đoàn Đại học Bách khoa Hà Nội - Trực thuộc Ban Văn nghệ thể thao Đoàn Đại học Bách khoa Hà Nội'
}

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'
  const systemMode = getSystemMode()
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html id='__next' lang={locale} dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <NextIntlClientProvider messages={messages}>
          <Providers direction='ltr'>
            <BlankLayout systemMode={systemMode}>
              <IntersectionProvider>
                <FrontLayout>{children}</FrontLayout>
              </IntersectionProvider>
            </BlankLayout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default Layout
