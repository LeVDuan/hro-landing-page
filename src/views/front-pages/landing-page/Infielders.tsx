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
import IFICon from '@/assets/svg/front-pages/landing-page/IFIcon'

// Data
const infielders = [
  {
    image: '/images/front-pages/landing-page/dinhDuc.png',
    name: 'Trần Đình Đức',
    gen: 'Gen 1',
    position: 'Vị trí: B1/Pitcher',
    num: 'Số áo: #99',
    des: 'Ném/Đánh: Trái/Trái',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/xuanViet.png',
    name: 'Phạm Xuân Việt',
    gen: 'Gen 2',
    position: 'Vị trí: B1',
    num: 'Số áo: #12',
    des: 'Ném/Đánh: Trái/Trái',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/minhHieu.png',
    name: 'Nguyễn Trịnh Minh Hiếu',
    gen: 'Gen 4',
    position: 'Vị trí: B1/B2',
    num: 'Số áo: #6',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/maiHuong.png',
    name: 'Vũ Mai Hương',
    gen: 'Gen 2',
    position: 'Vị trí: B1/Catcher',
    num: 'Số áo: #00',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/thaoMana.png',
    name: 'Nguyễn Thị Phương Thảo',
    gen: 'Gen 2',
    position: 'Vị trí: B1/SS',
    num: 'Số áo: #89',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/doanHoang.png',
    name: 'Đoàn Phùng Việt Hoàng',
    gen: 'Gen 2',
    position: 'Vị trí: B2/SS',
    num: 'Số áo: #52',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/namKhanh.png',
    name: 'Nguyễn Nam Khánh',
    gen: 'Gen 4',
    position: 'Vị trí: B2/Pitcher',
    num: 'Số áo: #??',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/quocQuy.png',
    name: 'Trần Quốc Quý',
    gen: 'Gen 2',
    position: 'Vị trí: B3/OF',
    num: 'Số áo: #4',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/duongQuan.png',
    name: 'Dương Anh Quân',
    gen: 'Gen 2',
    position: 'Vị trí: B3/OF',
    num: 'Số áo: #5',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/haiAnhB3.png',
    name: 'Đặng Hải Anh',
    gen: 'Gen 2',
    position: 'Vị trí: B3/OF',
    num: 'Số áo: #11',
    des: 'Ném/Đánh: Phải/Trái',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/theKien.png',
    name: 'Nguyễn Thế Kiên',
    gen: 'Gen 1',
    position: 'Vị trí: B3/Catcher',
    num: 'Số áo: #27',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/quyMinh.png',
    name: 'Phan Qúy Minh',
    gen: 'Gen 4',
    position: 'Vị trí: B3/Pitcher',
    num: 'Số áo: #23',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/tienDung.png',
    name: 'Lê Tiến Dũng',
    gen: 'Gen 2',
    position: 'Vị trí: SS/OF',
    num: 'Số áo: #22',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/trinhHieu.png',
    name: 'Trịnh Minh Hiếu',
    gen: 'Gen 2',
    position: 'Vị trí: SS/B2',
    num: 'Số áo: #36',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/thanhVinh.png',
    name: 'Nguyễn Thành Vinh',
    gen: 'Gen 2',
    position: 'Vị trí: SS/B2',
    num: 'Số áo: #96',
    des: 'Ném/Đánh: Phải/Phải',
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

const Infielders = () => {
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
    <div id='infielder' className='plb-[50px] bg-backgroundPaper'>
      <div className={classnames('flex flex-col items-center justify-center', frontCommonStyles.layoutSpacing)}>
        <div className='flex items-center justify-center mbe-6 gap-3'>
          <IFICon />
          <Typography color='text.primary' className='font-medium uppercase'>
            infielder
          </Typography>
        </div>
      </div>
      <AppKeenSlider>
        <>
          <div ref={sliderRef} className='keen-slider mbe-6'>
            {infielders.map((member, index) => (
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
                            <Typography color='text.secondary'>{member.gen}</Typography>
                            <Typography color='text.secondary'>{member.num}</Typography>
                            <Typography color='text.secondary'>{member.position}</Typography>
                            <Typography color='text.secondary'>{member.des}</Typography>
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

export default Infielders
