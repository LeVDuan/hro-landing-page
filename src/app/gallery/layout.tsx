// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

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

  return (
    <html id='__next' lang='vi' dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
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
        </Providers>
      </body>
    </html>
  )
}

export default Layout
