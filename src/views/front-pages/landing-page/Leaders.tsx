// React Imports
// import { useState } from 'react'

// Next Imports
// import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import MuiCard from '@mui/material/Card'
import { useKeenSlider } from 'keen-slider/react'
import CardContent from '@mui/material/CardContent'

// import Slider from '@mui/material/Slider'
// import Chip from '@mui/material/Chip'
// import Button from '@mui/material/Button'
// import Divider from '@mui/material/Divider'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import { useTranslations } from 'next-intl'

import { styled } from '@mui/material/styles'

import { Divider } from '@mui/material'

import frontCommonStyles from '@views/front-pages/styles.module.css'

// SVG Imports
// import Lines from '@assets/svg/front-pages/landing-page/Lines'
// import Curve from '@assets/svg/front-pages/landing-page/Curve'
import AppKeenSlider from '@/libs/styles/AppKeenSlider'
import CustomIconButton from '@core/components/mui/IconButton'
import { predecessors, LeadersInfo, SubLeadersInfo } from '@/fake-db/data'

// import Arrow from '@assets/svg/front-pages/landing-page/Arrow'
import ElementTwo from '@/assets/svg/front-pages/landing-page/ElementTwo'
import LeaderIcon from '@/assets/svg/front-pages/landing-page/LeaderIcon'
import type { ThemeColor } from '@/@core/types'
import { getFont } from '@/utils/getFont'
import styles from './styles.module.css'

const Card = styled(MuiCard)`
  border-start-start-radius: 90px;
  border-start-end-radius: 20px;
  border-end-start-radius: 6px;
  border-end-end-radius: 6px;
  &:hover {
    border-color: ${(props: { color: ThemeColor }) => props.color};

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

const Leaders = ({ locale }: { locale: string }) => {
  // States
  const t = useTranslations('structure')

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 3,
        origin: 'auto'
      },
      breakpoints: {
        '(max-width: 1200px)': {
          slides: {
            perView: 2,
            spacing: 10,
            origin: 'auto'
          }
        },
        '(max-width: 900px)': {
          slides: {
            perView: 2,
            spacing: 10
          }
        },
        '(max-width: 600px)': {
          slides: {
            perView: 1,
            spacing: 10,
            origin: 'center'
          }
        }
      }
    },
    [
      slider => {
        let timeout: ReturnType<typeof setTimeout>
        const mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }

        slider.on('created', nextTimeout)
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <section id='leaders' className={classnames('plb-[100px] bg-backgroundPaper')}>
      <div className={frontCommonStyles.layoutSpacing}>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex is-full justify-center relative'>
            <ElementTwo className='absolute inline-start-0' />
            <div className='flex items-center justify-center mbe-6 gap-3 text-center'>
              <LeaderIcon />
              <Typography
                color='text.primary'
                className='font-medium uppercase'
                sx={{ fontFamily: `${getFont(locale)}` }}
              >
                {t('Leaders')}
              </Typography>
            </div>
          </div>
          <div className='flex items-center flex-wrap justify-center gap-x-2 mbe-1'>
            {locale === 'ja' || locale === 'ko' ? (
              <>
                <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                  {t('leader')}{' '}
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
                    {t('leader')}
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
        </div>
        <Grid
          container
          rowSpacing={16}
          columnSpacing={6}
          className='mbe-8 pbs-[100px] flex justify-center items-center'
        >
          {LeadersInfo.map((member, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card className='shadow-none border overflow-visible' color={member.color as ThemeColor}>
                <div className={classnames('flex flex-col items-center justify-center p-0')}>
                  <div
                    className={classnames(
                      'flex justify-center is-full mli-auto text-center bs-[190px] relative overflow-visible',

                      styles.teamCard,
                      styles.gradientBg
                    )}

                    // style={{ backgroundColor: member.color }}
                  >
                    <img src={member.image} alt={member.name} className='bs-[240px] absolute block-start-[-50px]' />
                  </div>
                  <div className='flex flex-col gap-3 p-5 is-full'>
                    <div className='text-center'>
                      <Typography variant='h5'>{member.name}</Typography>
                      <Typography color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                        {t('Jersey numbers')}
                        {member.num}
                      </Typography>
                      <Typography color='text.secondary'>{member.gen}</Typography>
                      <Typography color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                        {t(member.position)}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          rowSpacing={16}
          columnSpacing={6}
          className='mbe-8 pbs-[100px] flex justify-center items-center'
        >
          {SubLeadersInfo.map((member, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card className='shadow-none border overflow-visible' color={member.color as ThemeColor}>
                <CardContent className='flex flex-col items-center justify-center p-0'>
                  <div
                    className={classnames(
                      'flex justify-center is-full mli-auto text-center bs-[190px] relative overflow-visible',

                      styles.teamCard,
                      styles.gradientBg2
                    )}
                  >
                    <img src={member.image} alt={member.name} className='bs-[240px] absolute block-start-[-50px]' />
                  </div>
                  <div className='flex flex-col gap-3 p-5 is-full'>
                    <div className='text-center'>
                      <Typography variant='h5'>{member.name}</Typography>
                      <Typography color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                        {t('Jersey numbers')}
                        {member.num}
                      </Typography>
                      <Typography color='text.secondary'>{member.gen}</Typography>
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
      <Divider className='mbs-[100px] mbe-8' />

      <div
        className={classnames('flex max-md:flex-col max-sm:flex-wrap is-full gap-6', frontCommonStyles.layoutSpacing)}
      >
        <div className='flex flex-col items-center lg:items-start justify-center bs-full is-full md:is-[23%] mlb-auto'>
          <div className='flex items-center flex-wrap justify-center gap-x-2 mbe-1'>
            {locale === 'vi' || locale === 'ko' ? (
              <>
                <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                  {t('our past')}{' '}
                </Typography>
                <Typography variant='h4' className='font-bold' sx={{ fontFamily: `${getFont(locale)}` }}>
                  <span className='relative z-[1] font-extrabold'>
                    {t('leader past')}
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
                    {t('our past')}
                    <img
                      src='/landing-page/bg-shape.png'
                      alt='bg-shape'
                      className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[13%] sm:inline-start-[-19%] block-start-[17px]'
                    />
                  </span>{' '}
                </Typography>
                <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                  {t('leader past')}
                </Typography>
              </>
            )}
          </div>
          <div className='flex gap-4 mbs-12'>
            <CustomIconButton color='primary' variant='outlined' onClick={() => instanceRef.current?.prev()}>
              <i className='ri-arrow-left-s-line' />
            </CustomIconButton>
            <CustomIconButton color='primary' variant='outlined' onClick={() => instanceRef.current?.next()}>
              <i className='ri-arrow-right-s-line' />
            </CustomIconButton>
          </div>
        </div>
        <div className='is-full md:is-[77%]'>
          <AppKeenSlider>
            <>
              <div ref={sliderRef} className='keen-slider mbe-6'>
                {predecessors.map((member, index) => (
                  <div key={index} className='keen-slider__slide p-6 sm:p-4'>
                    <Grid item xs={12} md={6} lg={3}>
                      <div className='pt-20'>
                        <Card
                          elevation={8}
                          className='shadow-none border overflow-visible'
                          color={member.color as ThemeColor}
                        >
                          <CardContent className='flex flex-col items-center justify-center p-0'>
                            <div
                              className={classnames(
                                'flex justify-center is-full mli-auto text-center bs-[189px] relative overflow-visible',
                                styles.teamCard

                                // styles.gradientBg2
                              )}
                              style={{ backgroundColor: member.color }}
                            >
                              <img
                                src={member.image}
                                alt={member.name}
                                className='bs-[240px] absolute block-start-[-50px]'
                              />
                            </div>
                            <div className='flex flex-col gap-3 p-5 is-full'>
                              <div className='text-center'>
                                <Typography variant='h5'>{member.name}</Typography>
                                <Typography color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                                  {t('Jersey numbers')}
                                  {member.num}
                                </Typography>
                                <Typography color='text.secondary'>{member.gen}</Typography>
                                <Typography color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                                  {t(member.position)}
                                </Typography>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </Grid>
                  </div>
                ))}
              </div>
            </>
          </AppKeenSlider>
        </div>
      </div>
    </section>
  )
}

export default Leaders
