import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports

import frontCommonStyles from '@views/front-pages/styles.module.css'

// SVG Imports
// import ElementTwo from '@/assets/svg/front-pages/landing-page/ElementTwo'
import type { ThemeColor } from '@/@core/types'
import CatcherIcon from '@/assets/svg/front-pages/landing-page/CatcherIcon'

// Data
const data = [
  {
    image: '/images/front-pages/landing-page/C_duanLe.png',
    name: 'Lê Văn Duẩn',
    position: 'Gen 1',
    num: 'Số áo: #3',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/C_vuGiap.png',
    name: 'Vũ Trọng Giáp',
    position: 'Gen 4',
    num: 'Số áo: #88',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  },
  {
    image: '/images/front-pages/landing-page/vuNguyen.png',
    name: 'Vũ Anh Nguyên',
    position: 'Gen 4',
    num: 'Số áo: #35',
    des: 'Ném/Đánh: Phải/Phải',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]

const Catchers = () => {
  return (
    <div id='catchers' className={classnames('plb-[50px]')}>
      <div className={classnames('flex flex-col items-center justify-center', frontCommonStyles.layoutSpacing)}>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex is-full justify-center relative'>
            {/* <ElementTwo className='absolute inline-start-0' /> */}
            <div className='flex items-center justify-center mbe-6 gap-3 text-center'>
              <CatcherIcon />
              <Typography color='text.primary' className='font-medium uppercase'>
                Catcher
              </Typography>
            </div>
          </div>
        </div>
        <Grid container rowSpacing={16} columnSpacing={6} className='mbe-8 pbs-[70px] flex justify-center items-center'>
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
                      <Typography color='text.secondary'>{member.position}</Typography>
                      <Typography color='text.secondary'>{member.num}</Typography>
                      <Typography color='text.secondary'>{member.des}</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Catchers
