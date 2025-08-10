// React Imports
import { useEffect, useRef } from 'react'

// Next Imports
import Image from 'next/image'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'

// Type Imports

import { useTranslations } from 'next-intl'

import type { ThemeColor } from '@core/types'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

// SVG Imports
import ElementOne from '@/assets/svg/front-pages/landing-page/ElementOne'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
import AboutUsIcon from '@/assets/svg/front-pages/landing-page/AboutUsIcon'
import { getFont } from '@/utils/getFont'
import { founders } from '@/fake-db/data' // Keep fallback for AboutUs

const Card = styled(MuiCard)`
  transition: transform 0.3s ease;
  &:hover {
    border-color: ${(props: { color: ThemeColor }) => props.color};
    transform: translateY(-10px) scale(1.05);

    & i:nth-child(1) {
      color: rgb(59, 89, 152) !important;
    }
    & i:nth-child(2) {
      color: rgb(0, 172, 238) !important;
    }
    & i:nth-child(3) {
      color: rgb(0, 119, 181) !important;
    }
  }
`

const AboutUs = ({ locale }: { locale: string }) => {
  // Refs
  const skipIntersection = useRef(true)
  const ref = useRef<null | HTMLDivElement>(null)
  const t = useTranslations('aboutUs')

  // Hooks
  const { updateIntersections } = useIntersection()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (skipIntersection.current) {
          skipIntersection.current = false

          return
        }

        updateIntersections({ [entry.target.id]: entry.isIntersecting })
      },
      { threshold: 0.35 }
    )

    ref.current && observer.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id='about-us' className='plb-[100px] bg-backgroundPaper' ref={ref}>
      <div className={frontCommonStyles.layoutSpacing}>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex is-full justify-center relative'>
            <ElementOne className='absolute inline-end-0' />
            <div className='flex items-center justify-center mbe-6 gap-3'>
              <AboutUsIcon />
              <Typography
                color='text.primary'
                className='font-medium uppercase'
                sx={{ fontFamily: `${getFont(locale)}` }}
              >
                {t('About us')}
              </Typography>
            </div>
          </div>
          <div className='flex items-center justify-center flex-wrap gap-2 mbe-3 sm:mbe-1'>
            {locale === 'ja' || locale === 'ko' ? (
              <>
                <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                  {t('The beginning')}{' '}
                </Typography>
                <Typography variant='h4' className='font-bold' sx={{ fontFamily: `${getFont(locale)}` }}>
                  <span className='relative z-[1] font-extrabold'>
                    {t('of HRO')}
                    <img
                      src='/landing-page/bg-shape.png'
                      alt='bg-shape'
                      className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[13%] sm:inline-start-[-19%] block-start-[17px]'
                    />
                  </span>
                </Typography>
              </>
            ) : (
              <>
                <Typography variant='h4' className='font-bold' sx={{ fontFamily: `${getFont(locale)}` }}>
                  <span className='relative z-[1] font-extrabold'>
                    {t('The beginning')}
                    <img
                      src='/landing-page/bg-shape.png'
                      alt='bg-shape'
                      className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[13%] sm:inline-start-[-19%] block-start-[17px]'
                    />
                  </span>{' '}
                </Typography>
                <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                  {t('of HRO')}
                </Typography>
              </>
            )}
          </div>
          <Typography
            color='text.secondary'
            className='font-medium text-center'
            sx={{ fontFamily: `${getFont(locale)}` }}
          >
            {t('text1')}
          </Typography>
          <Typography
            color='text.secondary'
            className='font-medium text-center'
            sx={{ fontFamily: `${getFont(locale)}` }}
          >
            {t('text2')}
          </Typography>
          <Typography
            color='text.secondary'
            className='font-medium text-center'
            sx={{ fontFamily: `${getFont(locale)}` }}
          >
            {t('text3')}
          </Typography>
          <Typography
            color='text.secondary'
            className='font-medium text-center'
            sx={{ fontFamily: `${getFont(locale)}` }}
          >
            {t('text4')}
          </Typography>
          <Typography
            color='text.secondary'
            className='font-medium text-center'
            sx={{ fontFamily: `${getFont(locale)}` }}
          >
            {t('text5')}
          </Typography>
          <Typography
            color='text.secondary'
            className='font-medium text-center'
            sx={{ fontFamily: `${getFont(locale)}` }}
          >
            {t('text6')}
          </Typography>
          <Typography
            color='text.secondary'
            className='font-medium text-center'
            sx={{ fontFamily: `${getFont(locale)}` }}
          >
            {t('text7')}
          </Typography>
          <Typography
            color='text.secondary'
            className='font-medium text-center'
            sx={{ fontFamily: `${getFont(locale)}` }}
          >
            {t('text8')}
          </Typography>
        </div>
        <Grid
          container
          rowSpacing={16}
          columnSpacing={6}
          className='mbe-8 pbs-[100px] flex justify-center items-center gap-10'
        >
          {founders.map((member, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card className='shadow-none border overflow-visible' color={member.color as ThemeColor}>
                <CardContent className='flex flex-col items-center justify-center p-0'>
                  <div
                    className='flex justify-center border is-full mli-auto text-center bs-[250px] relative overflow-visible rounded-ss-md rounded-se-md'
                    style={{ backgroundColor: member.color }}
                  >
                    <img src={member.image} alt={member.name} className='bs-[300px] absolute block-start-[-51px]' />
                  </div>
                  <div className='flex flex-col gap-3 p-5 is-full'>
                    <div className='text-center'>
                      <Typography variant='h5'>{member.name}</Typography>
                      <Typography color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                        {t(member.position)}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default AboutUs
