import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports

import MuiCard from '@mui/material/Card'

import { styled } from '@mui/material/styles'

import { useTranslations } from 'next-intl'

import frontCommonStyles from '@views/front-pages/styles.module.css'

// SVG Imports
// import ElementTwo from '@/assets/svg/front-pages/landing-page/ElementTwo'
import type { ThemeColor } from '@/@core/types'
import CatcherIcon from '@/assets/svg/front-pages/landing-page/CatcherIcon'
import { catchers } from '@/fake-db/data'
import { getFont } from '@/utils/getFont'

// Data

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

const Catchers = ({ locale }: { locale: string }) => {
  const t = useTranslations('structure')

  return (
    <div id='catchers' className={classnames('plb-[50px]')}>
      <div className={classnames('flex flex-col items-center justify-center', frontCommonStyles.layoutSpacing)}>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex is-full justify-center relative'>
            {/* <ElementTwo className='absolute inline-start-0' /> */}
            <div className='flex items-center justify-center mbe-6 gap-3 text-center'>
              <CatcherIcon />
              <Typography color='text.primary' className='font-medium' sx={{ fontFamily: `${getFont(locale)}` }}>
                {t('Catcher')}
              </Typography>
            </div>
          </div>
        </div>
        <Grid container rowSpacing={16} columnSpacing={6} className='mbe-8 pbs-[70px] flex justify-center items-center'>
          {catchers.map((member, index) => (
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
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Catchers
