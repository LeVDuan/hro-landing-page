// React Imports
// import { ReactNode } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import MuiTimeline from '@mui/lab/Timeline'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { TimelineProps } from '@mui/lab/Timeline'
import Grid from '@mui/material/Grid'
import classnames from 'classnames'

import { useTranslations } from 'next-intl'

import frontCommonStyles from '@views/front-pages/styles.module.css'
import ElementOne from '@/assets/svg/front-pages/landing-page/ElementOne'
import MileStonesIcon from '@/assets/svg/front-pages/landing-page/MileStonesIcon'
import { getFont } from '@/utils/getFont'

// Type Imports
interface DataObj {
  [key: number]: {
    image: string
    time: string
    title: string
    description: string
    totalMatches?: number
    winMatches?: number
    loseMatches?: number
    competitionResults?: string
  }
}

const dataObj: DataObj = {
  1: {
    image: '/landing-page/early-stage.jpg',
    time: '21/10/2020',
    title: 'Early stage',
    description: 'Early stage description'
  },
  2: {
    image: '/landing-page/team-image.jpg',
    time: '3/2021',
    title: 'Official',
    description: 'Official description'
  },
  3: {
    image: '/landing-page/nationalCup2023.png',
    time: '7/2023',
    title: 'Cup2023',
    description: 'Cup2023 description',
    totalMatches: 5,
    winMatches: 3,
    loseMatches: 2,
    competitionResults: 'Cup2023-3rd'
  },
  4: {
    image: '/landing-page/HBMS2023.png',
    time: '10/2023',
    title: 'HBMS2023',
    description: 'HBMS2023 description',
    totalMatches: 3,
    winMatches: 1,
    loseMatches: 2,
    competitionResults: 'HBMS2023-3rd'
  },
  5: {
    image: '/landing-page/nationalCup2024.png',
    time: '7/2024',
    title: 'Cup2024',
    description: 'Cup2024 description',
    totalMatches: 4,
    winMatches: 1,
    loseMatches: 3,
    competitionResults: 'Group stage'
  }
}

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root:nth-of-type(even) .MuiTimelineContent-root': {
    textAlign: 'left'
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiTimelineItem-root': {
      width: '100%',
      '&:before': {
        display: 'none'
      }
    }
  }
}))

const TimelineCenter = ({ locale }: { locale: string }) => {
  // Hooks
  const theme = useTheme()
  const isBelowMdScreen = useMediaQuery(theme.breakpoints.down('md'))
  const t = useTranslations('timeline')

  return (
    <section className='flex flex-col gap-16 plb-[100px]'>
      <div className={classnames('flex flex-col items-center justify-center', frontCommonStyles.layoutSpacing)}>
        <div className='flex is-full justify-center relative mbe-8'>
          <ElementOne className='absolute inline-end-0' />
          <div className='flex items-center justify-center flex-wrap gap-2 mbe-3 sm:mbe-1'>
            <MileStonesIcon />
            {locale === 'ja' ? (
              <>
                <Typography variant='h4' className='font-bold' sx={{ fontFamily: `${getFont(locale)}` }}>
                  <span className='relative z-[1] font-extrabold'>
                    {t('Club')}
                    <img
                      src='/landing-page/bg-shape.png'
                      alt='bg-shape'
                      className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[13%] sm:inline-start-[-19%] block-start-[17px]'
                    />
                  </span>{' '}
                </Typography>
                <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                  {t('milestones')}
                </Typography>
              </>
            ) : (
              <>
                <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                  {t('Club')}{' '}
                </Typography>

                <Typography variant='h4' className='font-bold' sx={{ fontFamily: `${getFont(locale)}` }}>
                  <span className='relative z-[1] font-extrabold'>
                    {t('milestones')}
                    <img
                      src='/landing-page/bg-shape.png'
                      alt='bg-shape'
                      className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[13%] sm:inline-start-[-19%] block-start-[17px]'
                    />
                  </span>
                </Typography>
              </>
            )}
          </div>
        </div>
        <Timeline position={isBelowMdScreen ? 'right' : 'alternate'}>
          <TimelineItem>
            {/* We have used the following code twice because we want to show the data on the opposite side of the timeline on
        large screens and on the right side of the timeline on small screens. You may create components for this and use
        them instead.
        <Typography variant='caption' component='div' className='mbs-3'>
          2 months ago
        </Typography> */}
            {!isBelowMdScreen && (
              <TimelineOppositeContent color='text.disabled'>
                <div className='flex flex-col items-end gap-4 mbe-10'>
                  <Typography variant='h5' component='div'>
                    {dataObj[1].time}
                  </Typography>
                  <img src={dataObj[1].image} alt='early-stage-image' className='max-is-[400px] is-full rounded-xl' />
                </div>
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineDot color='error' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {isBelowMdScreen && (
                <>
                  <Typography variant='h5' component='div'>
                    {dataObj[1].time}
                  </Typography>
                  <div className='flex pbs-2 pbe-5 lg:pbs-[60px] md:pie-4 z-[1]'>
                    <img src={dataObj[1].image} alt='early-stage-image' className='max-is-[550px] is-full rounded-xl' />
                  </div>
                </>
              )}
              <Card>
                <CardContent>
                  <Typography variant='h5' className='mbe-4' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t(dataObj[1].title)}
                  </Typography>
                  <Typography className='mbe-3' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t(dataObj[1].description)}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            {!isBelowMdScreen && (
              <TimelineOppositeContent color='text.disabled'>
                <div className='flex flex-col items-start gap-4 mbe-10'>
                  <Typography variant='h5' component='div'>
                    {dataObj[2].time}
                  </Typography>
                  <img src={dataObj[2].image} alt='early-stage-image' className='max-is-[400px] is-full rounded-xl' />
                </div>
              </TimelineOppositeContent>
            )}

            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {isBelowMdScreen && (
                <>
                  <Typography variant='h5' component='div'>
                    {dataObj[2].time}
                  </Typography>
                  <div className='flex pbs-2 pbe-5 lg:pbs-[60px] md:pie-4 z-[1]'>
                    <img src={dataObj[2].image} alt='early-stage-image' className='max-is-[550px] is-full rounded-xl' />
                  </div>
                </>
              )}
              <Card>
                <CardContent>
                  <Typography variant='h5' className='mbe-4' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t(dataObj[2].title)}
                  </Typography>
                  <Typography className='mbe-3' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t(dataObj[2].description)}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            {!isBelowMdScreen && (
              <TimelineOppositeContent color='text.disabled'>
                <div className='flex flex-col items-end gap-4 mbe-10'>
                  <Typography variant='h5' component='div'>
                    {dataObj[3].time}
                  </Typography>
                  <img src={dataObj[3].image} alt='early-stage-image' className='max-is-[400px] is-full rounded-xl' />
                </div>
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {isBelowMdScreen && (
                <>
                  <Typography variant='h5' component='div'>
                    {dataObj[3].time}
                  </Typography>
                  <div className='flex pbs-2 pbe-5 lg:pbs-[60px] md:pie-4 z-[1]'>
                    <img src={dataObj[3].image} alt='early-stage-image' className='max-is-[550px] is-full rounded-xl' />
                  </div>
                </>
              )}
              <Card>
                <CardContent>
                  <Typography variant='h5' className='mbe-4' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t(dataObj[3].title)}
                  </Typography>
                  <Typography className='mbe-3' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t(dataObj[3].description)}
                  </Typography>
                  <Typography className='mbe-3' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t('Achievements')}: {t(dataObj[3].competitionResults)}
                  </Typography>

                  <Grid container rowSpacing={5} columnSpacing={5}>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography sx={{ fontFamily: `${getFont(locale)}` }}>{t('Matches')}</Typography>
                        <Typography>{dataObj[3].totalMatches}</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography sx={{ fontFamily: `${getFont(locale)}` }}>{t('Win')}</Typography>
                        <Typography>{dataObj[3].winMatches}</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography sx={{ fontFamily: `${getFont(locale)}` }}>{t('Lose')}</Typography>
                        <Typography>{dataObj[3].loseMatches}</Typography>
                      </div>
                    </Grid>
                  </Grid>
                  {/* <div className='items-end'>
                <i className='ri-arrow-right-double-line' />
              </div> */}
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            {!isBelowMdScreen && (
              <TimelineOppositeContent color='text.disabled'>
                <div className='flex flex-col items-start gap-4 mbe-10'>
                  <Typography variant='h5' component='div'>
                    {dataObj[4].time}
                  </Typography>
                  <img src={dataObj[4].image} alt='early-stage-image' className='max-is-[400px] is-full rounded-xl' />
                </div>
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineDot color='warning' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {isBelowMdScreen && (
                <>
                  <Typography variant='h5' component='div'>
                    {dataObj[4].time}
                  </Typography>
                  <div className='flex pbs-2 pbe-5 lg:pbs-[60px] md:pie-4 z-[1]'>
                    <img src={dataObj[4].image} alt='early-stage-image' className='max-is-[550px] is-full rounded-xl' />
                  </div>
                </>
              )}
              <Card>
                <CardContent>
                  <Typography variant='h5' className='mbe-4' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t(dataObj[4].title)}
                  </Typography>
                  <Typography className='mbe-3' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t(dataObj[4].description)}
                  </Typography>
                  <Typography className='mbe-3' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t('Achievements')}: {t(dataObj[4].competitionResults)}
                  </Typography>

                  <Grid container rowSpacing={5} columnSpacing={5}>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography sx={{ fontFamily: `${getFont(locale)}` }}>{t('Matches')}</Typography>
                        <Typography>{dataObj[4].totalMatches}</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography sx={{ fontFamily: `${getFont(locale)}` }}>{t('Win')}</Typography>
                        <Typography>{dataObj[4].winMatches}</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography sx={{ fontFamily: `${getFont(locale)}` }}>{t('Lose')}</Typography>
                        <Typography>{dataObj[4].loseMatches}</Typography>
                      </div>
                    </Grid>
                  </Grid>
                  {/* <div className='items-end'>
                <i className='ri-arrow-right-double-line' />
              </div> */}
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            {!isBelowMdScreen && (
              <TimelineOppositeContent color='text.disabled'>
                <div className='flex flex-col items-end gap-4 mbe-10'>
                  <Typography variant='h5' component='div'>
                    {dataObj[5].time}
                  </Typography>
                  <img src={dataObj[5].image} alt='early-stage-image' className='max-is-[400px] is-full rounded-xl' />
                </div>
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineDot color='info' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {isBelowMdScreen && (
                <>
                  <Typography variant='h5' component='div'>
                    {dataObj[5].time}
                  </Typography>
                  <div className='flex pbs-2 pbe-5 lg:pbs-[60px] md:pie-4 z-[1]'>
                    <img src={dataObj[5].image} alt='early-stage-image' className='max-is-[550px] is-full rounded-xl' />
                  </div>
                </>
              )}
              <Card>
                <CardContent>
                  <Typography variant='h5' className='mbe-4' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t(dataObj[5].title)}
                  </Typography>
                  <Typography className='mbe-3' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t(dataObj[5].description)}
                  </Typography>
                  <Typography className='mbe-3' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t('Achievements')}: {t(dataObj[5].competitionResults)}
                  </Typography>

                  <Grid container rowSpacing={5} columnSpacing={5}>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography sx={{ fontFamily: `${getFont(locale)}` }}>{t('Matches')}</Typography>
                        <Typography>{dataObj[5].totalMatches}</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography sx={{ fontFamily: `${getFont(locale)}` }}>{t('Win')}</Typography>
                        <Typography>{dataObj[5].winMatches}</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography sx={{ fontFamily: `${getFont(locale)}` }}>{t('Lose')}</Typography>
                        <Typography>{dataObj[5].loseMatches}</Typography>
                      </div>
                    </Grid>
                  </Grid>
                  {/* <div className='flex flex-col items-end'>
                    <Typography className='items-baseline'>
                      <>Xem thêm</>
                      <i className='ri-arrow-right-line' />
                    </Typography>
                  </div> */}
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            {!isBelowMdScreen && (
              <TimelineOppositeContent color='text.disabled'>
                <div className='flex flex-col items-start gap-4 mbe-10'>
                  <Typography variant='h5' component='div' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t('Now')}
                  </Typography>
                </div>
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineDot color='success' />
              {/* <TimelineConnector /> */}
            </TimelineSeparator>
            <TimelineContent>
              {isBelowMdScreen && (
                <>
                  <Typography variant='h5' component='div' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t('Now')}
                  </Typography>
                </>
              )}
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  )
}

export default TimelineCenter
