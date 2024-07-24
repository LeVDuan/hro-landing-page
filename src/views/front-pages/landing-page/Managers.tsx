import { useEffect, useRef } from 'react'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

import frontCommonStyles from '@views/front-pages/styles.module.css'

// SVG Imports
import ElementTwo from '@/assets/svg/front-pages/landing-page/ElementTwo'
import type { ThemeColor } from '@/@core/types'
import ManaIcon from '@/assets/svg/front-pages/landing-page/ManagerIcon'

// Data
const data = [
  {
    image: '/images/front-pages/landing-page/datMana.png',
    name: 'Trần Tiến Đạt',
    gen: 'Gen 2 - K66 HUST',
    num: 'Số áo: #18',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/thaoMana.png',
    name: 'Nguyễn Thị Phương Thảo',
    gen: 'Gen 2 - K66 HUST',
    num: 'Số áo: #89',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/minhLeMana.png',
    name: 'Lê Hoàng Minh',
    gen: 'Trưởng manager - K65 HUST',
    num: 'Số áo: #22',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/yenAnh.png',
    name: 'Lê Nguyễn Yến Anh',
    gen: 'Gen 2 - NEU',
    num: 'Số áo: #15',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]

const Managers = () => {
  // Refs
  const skipIntersection = useRef(true)
  const ref = useRef<null | HTMLDivElement>(null)

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
    <section id='managers' className={classnames('plb-[100px] bg-backgroundPaper')} ref={ref}>
      <div className={frontCommonStyles.layoutSpacing}>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex is-full justify-center relative'>
            <ElementTwo className='absolute inline-start-0' />
            <div className='flex items-center justify-center mbe-6 gap-3 text-center'>
              {/* <Lines /> */}
              <ManaIcon />

              <Typography color='text.primary' className='font-medium uppercase'>
                Managers
              </Typography>
            </div>
          </div>
          <div className='flex items-center flex-wrap justify-center gap-x-2 mbe-1'>
            <Typography variant='h5'>Những người quản lý tận tụy của HRO</Typography>
          </div>
        </div>
        <Grid
          container
          rowSpacing={16}
          columnSpacing={6}
          className='mbe-8 pbs-[100px] flex justify-center items-center'
        >
          {data.map((member, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card className='shadow-none border overflow-visible' color={member.color as ThemeColor}>
                <CardContent className='flex flex-col items-center justify-center p-0'>
                  <div
                    className='flex justify-center is-full mli-auto text-center bs-[189px] relative overflow-visible rounded-ss-md rounded-se-md'
                    style={{ backgroundColor: member.color }}
                  >
                    <img src={member.image} alt={member.name} className='bs-[240px] absolute block-start-[-50px]' />
                  </div>
                  <div className='flex flex-col gap-3 p-5 is-full'>
                    <div className='text-center'>
                      <Typography variant='h5'>{member.name}</Typography>
                      <Typography color='text.secondary'>{member.num}</Typography>
                      <Typography color='text.secondary'>{member.gen}</Typography>
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

export default Managers
