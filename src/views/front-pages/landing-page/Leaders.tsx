// React Imports
// import { useState } from 'react'

// Next Imports
// import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// import Slider from '@mui/material/Slider'
// import Chip from '@mui/material/Chip'
// import Button from '@mui/material/Button'
// import Divider from '@mui/material/Divider'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

// SVG Imports
// import Lines from '@assets/svg/front-pages/landing-page/Lines'
// import Curve from '@assets/svg/front-pages/landing-page/Curve'
// import Arrow from '@assets/svg/front-pages/landing-page/Arrow'
import ElementTwo from '@/assets/svg/front-pages/landing-page/ElementTwo'
import LeaderIcon from '@/assets/svg/front-pages/landing-page/LeaderIcon'
import type { ThemeColor } from '@/@core/types'

const LeadersInfo = [
  {
    name: 'Lê Tiến Dũng',
    position: 'Đội trưởng',
    image: '/images/front-pages/landing-page/captain.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    name: 'Nguyễn Thị Phương Thảo',
    position: 'Chủ nhiệm',
    image: '/images/front-pages/landing-page/chairman.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]

const SubLeadersInfo = [
  {
    name: 'Trần Tiến Đạt',
    position: 'Phó chủ nhiệm',
    image: '/images/front-pages/landing-page/dat.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    name: 'Đặng Hải Anh',
    position: 'Đội phó/ Phó chủ nhiệm',
    image: '/images/front-pages/landing-page/haiANh.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    name: 'Nguyễn Linh Chi',
    position: 'Trưởng Ban truyền thông',
    image: '/images/front-pages/landing-page/chi.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    name: 'Lê Hoàng Minh',
    position: 'Trưởng manager',
    image: '/images/front-pages/landing-page/minhLe.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]

const Leaders = () => {
  // States

  return (
    <section id='leaders' className={classnames('plb-[100px] bg-backgroundPaper')}>
      <div className={frontCommonStyles.layoutSpacing}>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex is-full justify-center relative'>
            <ElementTwo className='absolute inline-start-0' />
            <div className='flex items-center justify-center mbe-6 gap-3 text-center'>
              {/* <Lines /> */}
              <LeaderIcon />
              <Typography color='text.primary' className='font-medium uppercase'>
                Leaders
              </Typography>
            </div>
          </div>
          <div className='flex items-center flex-wrap justify-center gap-x-2 mbe-1'>
            <Typography variant='h4' className='font-bold'>
              Những người đứng đầu
            </Typography>
            <Typography variant='h5'>của HRO</Typography>
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
                      <Typography color='text.secondary'>{member.position}</Typography>
                    </div>
                  </div>
                </CardContent>
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
                    className='flex justify-center is-full mli-auto text-center bs-[189px] relative overflow-visible rounded-ss-md rounded-se-md'
                    style={{ backgroundColor: member.color }}
                  >
                    <img src={member.image} alt={member.name} className='bs-[240px] absolute block-start-[-50px]' />
                  </div>
                  <div className='flex flex-col gap-3 p-5 is-full'>
                    <div className='text-center'>
                      <Typography variant='h5'>{member.name}</Typography>
                      <Typography color='text.secondary'>{member.position}</Typography>
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

export default Leaders
