import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import { useTranslations } from 'next-intl'

import MuiCard from '@mui/material/Card'

import frontCommonStyles from '@views/front-pages/styles.module.css'

// SVG Imports
import ElementTwo from '@/assets/svg/front-pages/landing-page/ElementTwo'
import type { ThemeColor } from '@/@core/types'
import PreIcon from '@/assets/svg/front-pages/landing-page/PreIcon'

// Data
import { predecessors } from '@/fake-db/data'

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

const PredecessorsStatic = () => {
  // States
  const t = useTranslations('structure')

  return (
    <section id='predecessors' className={classnames('plb-[100px]')}>
      <div className={classnames('flex flex-col items-center justify-center', frontCommonStyles.layoutSpacing)}>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex is-full justify-center relative'>
            <ElementTwo className='absolute inline-end-80' />
            <div className='flex items-center justify-center mbe-6 gap-3 text-center'>
              {/* <Lines /> */}
              <PreIcon />

              <Typography color='text.primary' className='font-medium uppercase'>
                {t('predecessors')}
              </Typography>
            </div>
          </div>
          <div className='flex items-center flex-wrap justify-center gap-x-2 mbe-1'>
            <Typography variant='h5'>{t('past')}</Typography>
          </div>
        </div>
        <Grid
          container
          rowSpacing={16}
          columnSpacing={6}
          className='mbe-8 pbs-[100px] flex justify-center items-center'
        >
          {predecessors.map((member, index) => (
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
                      <Typography color='text.secondary'>
                        {t('Jersey numbers')}
                        {member.num}
                      </Typography>
                      <Typography color='text.secondary'>{member.gen}</Typography>
                      <Typography color='text.secondary'>{t(member.position)}</Typography>
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
