import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

// SVG Imports
import ElementTwo from '@/assets/svg/front-pages/landing-page/ElementTwo'
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

const PredecessorsStatic = () => {
  // States

  return (
    <section id='predecessors' className={classnames('plb-[100px]')}>
      <div className={classnames('flex flex-col items-center justify-center', frontCommonStyles.layoutSpacing)}>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex is-full justify-center relative'>
            <ElementTwo className='absolute inline-start-0' />
            <div className='flex items-center justify-center mbe-6 gap-3 text-center'>
              {/* <Lines /> */}
              <PreIcon />

              <Typography color='text.primary' className='font-medium uppercase'>
                Tiền nhiệm
              </Typography>
            </div>
          </div>
          <div className='flex items-center flex-wrap justify-center gap-x-2 mbe-1'>
            <Typography variant='h5'>Những người đã dẫn dắt chúng tôi</Typography>
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

export default PredecessorsStatic
