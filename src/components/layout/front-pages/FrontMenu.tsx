'use client'

// React Imports
import { useEffect } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

// MUI Imports
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Mode } from '@core/types'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'
import { getFont } from '@/utils/getFont'

// import DropdownMenu from './DropdownMenu'

// Component Imports
// import DropdownMenu from './DropdownMenu'

type Props = {
  mode: Mode
  locale: string
  isDrawerOpen: boolean
  setIsDrawerOpen: (open: boolean) => void
}

type WrapperProps = {
  children: React.ReactNode
  isBelowLgScreen: boolean
  className?: string
  isDrawerOpen: boolean
  setIsDrawerOpen: (open: boolean) => void
}

const Wrapper = (props: WrapperProps) => {
  // Props
  const { children, isBelowLgScreen, className, isDrawerOpen, setIsDrawerOpen } = props

  if (isBelowLgScreen) {
    return (
      <Drawer
        variant='temporary'
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ModalProps={{
          keepMounted: true
        }}
        sx={{ '& .MuiDrawer-paper': { width: ['100%', 300] } }}
        className={classnames('p-5', className)}
      >
        <div className='p-4 flex flex-col gap-x-3'>
          <IconButton onClick={() => setIsDrawerOpen(false)} className='absolute inline-end-4 block-start-2'>
            <i className='ri-close-line' />
          </IconButton>
          {children}
        </div>
      </Drawer>
    )
  }

  return <div className={classnames('flex items-center flex-wrap gap-x-4 gap-y-3', className)}>{children}</div>
}

const FrontMenu = (props: Props) => {
  // Props
  const { isDrawerOpen, setIsDrawerOpen, locale } = props

  // Hooks
  const pathname = usePathname()
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const { intersections } = useIntersection()
  const t = useTranslations('header')

  useEffect(() => {
    if (!isBelowLgScreen && isDrawerOpen) {
      setIsDrawerOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBelowLgScreen])

  return (
    <Wrapper isBelowLgScreen={isBelowLgScreen} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
      <Typography
        component={Link}
        href='/'
        className={classnames('font-medium plb-3 hover:text-primary', {
          'text-primary':
            !intersections['about-us'] &&
            !intersections.managers &&
            !intersections.media &&
            !intersections.players &&
            !intersections.activities &&
            !intersections.location &&
            !intersections.faq &&
            !intersections['contact-us'] &&
            pathname === '/',
          'pli-1': locale === 'vi',
          'pli-1.5': locale !== 'vi'
        })}
        color='text.primary'
        sx={{ fontFamily: `${getFont(locale)}` }}
      >
        {t('Home')}
      </Typography>
      <Typography
        component={Link}
        href='#about-us'
        className={classnames('font-medium plb-3 hover:text-primary', {
          'text-primary': intersections['about-us'],
          'pli-1': locale === 'vi',
          'pli-1.5': locale !== 'vi'
        })}
        color='text.primary'
        sx={{ fontFamily: `${getFont(locale)}` }}
      >
        {t('About us')}
      </Typography>
      {/* <DropdownMenu isBelowLgScreen={isBelowLgScreen} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} /> */}
      <Typography
        component={Link}
        href='#managers'
        className={classnames('font-medium plb-3 hover:text-primary', {
          'text-primary': intersections.managers,
          'pli-1': locale === 'vi',
          'pli-1.5': locale !== 'vi'
        })}
        color='text.primary'
        sx={{ fontFamily: `${getFont(locale)}` }}
      >
        {t('Managers')}
      </Typography>
      <Typography
        component={Link}
        href='#media'
        className={classnames('font-medium plb-3 hover:text-primary', {
          'text-primary': intersections.media,
          'pli-1': locale === 'vi',
          'pli-1.5': locale !== 'vi'
        })}
        sx={{ fontFamily: `${getFont(locale)}` }}
        color='text.primary'
      >
        {t('Media')}
      </Typography>
      <Typography
        component={Link}
        href='#players'
        className={classnames('font-medium plb-3 hover:text-primary', {
          'text-primary': intersections.players,
          'pli-1': locale === 'vi',
          'pli-1.5': locale !== 'vi'
        })}
        sx={{ fontFamily: `${getFont(locale)}` }}
        color='text.primary'
      >
        {t('Players')}
      </Typography>
      <Typography
        component={Link}
        href='#activities'
        className={classnames('font-medium plb-3 hover:text-primary', {
          'text-primary': intersections.activities,
          'pli-1': locale === 'vi',
          'pli-1.5': locale !== 'vi'
        })}
        sx={{ fontFamily: `${getFont(locale)}` }}
        color='text.primary'
      >
        {t('Activities')}
      </Typography>
      <Typography
        component={Link}
        href='#faq'
        className={classnames('font-medium plb-3 hover:text-primary', {
          'text-primary': intersections.faq,
          'pli-1': locale === 'vi',
          'pli-1.5': locale !== 'vi'
        })}
        sx={{ fontFamily: `${getFont(locale)}` }}
        color='text.primary'
      >
        {t('FAQ')}
      </Typography>
      <Typography
        component={Link}
        href='#contact-us'
        className={classnames('font-medium plb-3 hover:text-primary', {
          'text-primary': intersections['contact-us'],
          'pli-1': locale === 'vi',
          'pli-1.5': locale !== 'vi'
        })}
        sx={{ fontFamily: `${getFont(locale)}` }}
        color='text.primary'
      >
        {t('Contact us')}
      </Typography>
    </Wrapper>
  )
}

export default FrontMenu
