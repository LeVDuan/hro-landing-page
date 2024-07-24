// React Imports
import { useState, useEffect } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Mode } from '@core/types'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

const HeroSection = ({ mode }: { mode: Mode }) => {
  // States
  const [dashboardPosition, setDashboardPosition] = useState({ x: 0, y: 0 })
  const [elementsPosition, setElementsPosition] = useState({ x: 0, y: 0 })

  // Vars
  const dashboardImageLight = '/images/front-pages/landing-page/hero.jpg'
  const dashboardImageDark = '/images/front-pages/landing-page/hero.jpg'
  const elementsImageLight = '/images/front-pages/landing-page/hero-elements-light.png'
  const elementsImageDark = '/images/front-pages/landing-page/hero-elements-light.png'
  const heroSectionBgLight = '/images/front-pages/landing-page/hero-bg-light.png'
  const heroSectionBgDark = '/images/front-pages/landing-page/hero-bg-dark.png'

  // Hooks
  const dashboardImage = useImageVariant(mode, dashboardImageLight, dashboardImageDark)
  const elementsImage = useImageVariant(mode, elementsImageLight, elementsImageDark)
  const heroSectionBg = useImageVariant(mode, heroSectionBgLight, heroSectionBgDark)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const speedDashboard = 2
      const speedElements = 2.5

      const updateMousePosition = (ev: MouseEvent) => {
        const x = ev.clientX
        const y = ev.clientY

        setDashboardPosition({
          x: (window.innerWidth - x * speedDashboard) / 100,
          y: Math.max((window.innerHeight - y * speedDashboard) / 100, -40)
        })

        setElementsPosition({
          x: (window.innerWidth - x * speedElements) / 100,
          y: Math.max((window.innerHeight - y * speedElements) / 100, -40)
        })
      }

      window.addEventListener('mousemove', updateMousePosition)

      return () => {
        window.removeEventListener('mousemove', updateMousePosition)
      }
    }
  }, [])

  return (
    <section id='home' className='relative overflow-hidden pbs-[70px] -mbs-[80px] bg-backgroundPaper z-[1]'>
      <img src={heroSectionBg} alt='hero-bg' className={styles.heroSectionBg} />
      <div className={classnames('pbs-16 overflow-hidden', frontCommonStyles.layoutSpacing)}>
        <div className='md:max-is-[550px] mlb-0 mli-auto text-center'>
          <Typography className='font-extrabold text-primary sm:text-[38px] text-3xl mbe-4 leading-[44px]'>
            HUST RED OWLS
          </Typography>
          <Typography className='font-bold text-primary sm:text-[28px] text-3xl mbe-4 leading-[34px]'>
            #WEAREHRO
          </Typography>
          <Typography className='font-medium' color='text.primary'>
            Bạn đam mê bóng chày?
          </Typography>
          <Typography className='font-medium' color='text.primary'>
            Bạn muốn rèn luyện sức khỏe và chơi bóng chày cùng những người bạn mới?
          </Typography>
          <Typography className='font-medium' color='text.primary'>
            Cùng nhau tập luyện, tham gia giải bóng chày tại Hà Nội hay toàn quốc?
          </Typography>
          <Typography className='font-medium' color='text.primary'>
            HRO chính là nơi dành cho bạn!
          </Typography>
          <div className='mbs-8'>
            <Button
              component={Link}
              href='https://www.facebook.com/HUSTRedOwlsBaseballTeam'
              target='_blank'
              variant='contained'
              color='primary'
              size='large'
              sx={{ mb: '2rem' }}
            >
              Theo dõi chúng tôi
            </Button>
          </div>
        </div>
      </div>
      <div
        className={classnames('relative text-center', frontCommonStyles.layoutSpacing)}
        style={{ transform: `translate(${dashboardPosition.x}px, ${dashboardPosition.y}px)` }}
      >
        <img
          src={dashboardImage}
          alt='dashboard-image'
          className={classnames('mli-auto w-3/4 rounded-xl', styles.heroSecDashboard)}
        />
        <div className={classnames('absolute', styles.heroSectionElements)}>
          <img
            src={elementsImage}
            alt='dashboard-elements'
            style={{ transform: `translate(${elementsPosition.x}px, ${elementsPosition.y}px)` }}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
