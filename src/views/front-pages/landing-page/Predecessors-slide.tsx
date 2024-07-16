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
import AppKeenSlider from '@/libs/styles/AppKeenSlider'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
import type { ThemeColor } from '@/@core/types'
import PreIcon from '@/assets/svg/front-pages/landing-page/PreIcon'

// Data
const data = [
  {
    image: '/images/front-pages/landing-page/minhHa.png',
    name: 'Nguyễn Thị Minh Hà',
    position: 'Đội trưởng/Chủ nhiệm Gen 1',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/duanLe.png',
    name: 'Lê Văn Duẩn',
    position: 'Đội trưởng/Chủ nhiệm Gen 2,3',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/qTuan.png',
    name: 'Đinh Quốc Tuấn',
    position: 'Đội phó Gen 1',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/thaiBao.png',
    name: 'Nguyễn Thái Bảo',
    position: 'Đội phó Gen 2, 3',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]

const Card = styled(MuiCard)`
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

const Predecessors = () => {
  // States
  const [loaded, setLoaded] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [details, setDetails] = useState<TrackDetails>()

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
    <section id='predecessors' className='flex flex-col gap-0 plb-[100px]'>
      <div className={classnames('flex flex-col items-center justify-center', frontCommonStyles.layoutSpacing)}>
        <div className='flex items-center justify-center mbe-6 gap-3'>
          {/* <Lines /> */}
          <PreIcon />
          <Typography color='text.primary' className='font-medium uppercase'>
            Tiền nhiệm
          </Typography>
        </div>
        <div className='flex items-center gap-2 mbe-1'>
          <Typography variant='h4' className='font-bold'>
            Success stories
          </Typography>
          <Typography variant='h5'>from us</Typography>
        </div>
        <Typography color='text.secondary' className='font-medium text-center'>
          See what we suggest to enhance your own experience.
        </Typography>
      </div>
      <AppKeenSlider>
        <>
          <div ref={sliderRef} className='keen-slider mbe-6'>
            {data.map((member, index) => (
              <div key={index} className='keen-slider__slide p-6 sm:p-4'>
                <Grid style={scaleStyle(index)} className='p-6 sm:p-4' item xs={12} md={6} lg={3} key={index}>
                  <div className='pt-20'>
                    <Card
                      elevation={8}
                      className='shadow-none border overflow-visible'
                      color={member.color as ThemeColor}
                    >
                      <CardContent className='flex flex-col items-center justify-center p-0'>
                        <div
                          className='flex justify-center is-full mli-auto text-center bs-[189px] relative overflow-visible rounded-ss-md rounded-se-md'
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
                            <Typography color='text.secondary'>{member.position}</Typography>
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
    </section>
  )
}

export default Predecessors
