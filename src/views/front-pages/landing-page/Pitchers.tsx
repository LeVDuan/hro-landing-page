// React Imports
import { useState } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import MuiCard from '@mui/material/Card'

import CardContent from '@mui/material/CardContent'
import Badge from '@mui/material/Badge'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'

// Third-party Imports
import type { TrackDetails } from 'keen-slider/react'
import { useKeenSlider } from 'keen-slider/react'
import classnames from 'classnames'

// Styled Component Imports
import { useTranslations } from 'next-intl'

import AppKeenSlider from '@/libs/styles/AppKeenSlider'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
import type { ThemeColor } from '@/@core/types'
import PitcherIcon from '@/assets/svg/front-pages/landing-page/PitcherIcon'

// Data
import { pitchers } from '@/fake-db/data'
import { getFont } from '@/utils/getFont'

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

const Pitchers = ({ locale }: { locale: string }) => {
  // States
  const [loaded, setLoaded] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [details, setDetails] = useState<TrackDetails>()
  const t = useTranslations('structure')

  // Hooks
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slideChanged: slider => setCurrentSlide(slider.track.details.rel),
      created: () => setLoaded(true),
      detailsChanged: s => setDetails(s.track.details),
      slides: {
        perView: 4,
        origin: 'center'
      },
      breakpoints: {
        '(max-width: 1200px)': {
          slides: {
            perView: 3,
            spacing: 26,
            origin: 'center'
          }
        },
        '(max-width: 900px)': {
          slides: {
            perView: 2,
            spacing: 26,
            origin: 'center'
          }
        },
        '(max-width: 600px)': {
          slides: {
            perView: 1,
            spacing: 26,
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

  const scaleStyle = (idx: number) => {
    if (!details) return {}
    const activeSlideIndex = details.rel

    return {
      transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',
      ...(activeSlideIndex === idx ? { transform: 'scale(1)', opacity: 1 } : { transform: 'scale(0.9)', opacity: 0.5 })
    }
  }

  return (
    <div id='pitchers' className='flex flex-col gap-0 plb-[100px]'>
      <div className={classnames('flex flex-col items-center justify-center', frontCommonStyles.layoutSpacing)}>
        <div className='flex items-center justify-center mbe-6 gap-3'>
          <PitcherIcon />
          <Typography color='text.primary' className='font-medium' sx={{ fontFamily: `${getFont(locale)}` }}>
            {t('Pitcher')}
          </Typography>
        </div>
      </div>
      <AppKeenSlider>
        <>
          <div ref={sliderRef} className='keen-slider mbe-6'>
            {pitchers.map((member, index) => (
              <div key={index} className='keen-slider__slide p-6 sm:p-4'>
                <Grid style={scaleStyle(index)} item xs={12} md={6} lg={3}>
                  <div className='pt-20'>
                    <Card
                      elevation={8}
                      className='shadow-none border overflow-visible'
                      color={member.color as ThemeColor}
                    >
                      <CardContent className='flex flex-col items-center justify-center p-0'>
                        <div
                          className='flex justify-center is-full mli-auto text-center bs-[190px] relative overflow-visible rounded-ss-md rounded-se-md'
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
                              {member.position}
                            </Typography>
                            <Typography color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                              {t('Jersey numbers')}
                              {member.num}
                            </Typography>
                            <Typography color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                              {t(member.des)}
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
          {loaded && instanceRef.current && (
            <div className='swiper-dots'>
              {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
                return (
                  <Badge
                    key={idx}
                    variant='dot'
                    component='div'
                    className={classnames({ active: currentSlide === idx })}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                  />
                )
              })}
            </div>
          )}
        </>
      </AppKeenSlider>
    </div>
  )
}

export default Pitchers
