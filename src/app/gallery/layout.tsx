// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
import Link from 'next/link'

import { getLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

import IconButton from '@mui/material/IconButton'

// Type Imports
import { Fab } from '@mui/material'

import type { ChildrenType } from '@core/types'

// Context Imports

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'
import ScrollToTop from '@/@core/components/scroll-to-top'

// import JoinNowButton from '@/components/john-now-button'

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
              {children}
              {/* <JoinNowButton locale={locale} /> */}
              <ScrollToTop className='mui-fixed'>
                <Fab color='primary' size='small' aria-label='scroll back to top'>
                  <i className='ri-arrow-up-line' />
                </Fab>
              </ScrollToTop>
            </BlankLayout>
            <footer className='text-center text-white/80'>
              <div className='bg-[#211B2C]'>
                <div className={'px-6 flex flex-wrap items-center justify-center sm:justify-between gap-4 plb-[15px]'}>
                  <p className='text-white text-[13px] opacity-[0.92]'>
                    <span>{`© ${new Date().getFullYear()}, Made with `}</span>
                    <span>{`❤️`}</span>
                    <span>{` by `}</span>
                    <Link href='https://github.com/LeVDuan' target='_blank' className='font-medium text-white'>
                      DuanLV
                    </Link>
                  </p>
                  <div className='flex gap-6 items-center opacity-[0.78]'>
                    <IconButton component={Link} size='small' href='https://github.com/LeVDuan' target='_blank'>
                      <i className='ri-github-fill text-white text-lg' />
                    </IconButton>
                    <IconButton
                      component={Link}
                      size='small'
                      href='https://www.facebook.com/LeVDuan0308/'
                      target='_blank'
                    >
                      <i className='ri-facebook-fill text-white text-lg' />
                    </IconButton>
                  </div>
                </div>
              </div>
            </footer>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default Layout
