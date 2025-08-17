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

import styles from './styles.module.css'

import frontCommonStyles from '@views/front-pages/styles.module.css'
import ElementOne from '@/assets/svg/front-pages/landing-page/ElementOne'
import MileStonesIcon from '@/assets/svg/front-pages/landing-page/MileStonesIcon'
import { getFont } from '@/utils/getFont'
import { useTimelineData } from '@/hooks/useTimelineData'


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
  const theme = useTheme()
  const isBelowMdScreen = useMediaQuery(theme.breakpoints.down('md'))
  const t = useTranslations('timeline')
  const { timeline } = useTimelineData()
  
  const displayData = timeline.length > 0 ? timeline : null

  return (
    <section className='flex flex-col gap-16 plb-[100px]'>
      <div className={classnames('flex flex-col items-center justify-center', frontCommonStyles.layoutSpacing)}>
        <div className='flex is-full justify-center relative mbe-8'>
          <ElementOne className='absolute inline-end-0' />
          <div className='flex items-center justify-center flex-wrap gap-2 mbe-3 sm:mbe-1'>
            <MileStonesIcon />
            {locale === 'ja' || locale === 'ko' ? (
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
                      className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[13%] sm:inline-start-[-19%] block-start-[17px] '
                    />
                  </span>
                </Typography>
              </>
            )}
          </div>
        </div>
        <Timeline position={isBelowMdScreen ? 'right' : 'alternate'}>
          {displayData ? 
            displayData.map((item, index) => {
              // Map locale to supported languages
              const currentLocale = (['en', 'vi', 'ja', 'ko'].includes(locale as any)) ? locale as 'en' | 'vi' | 'ja' | 'ko' : 'en'
              
              // Get title and description with fallback to English if current locale is empty
              const title = item.title[currentLocale] || item.title.en || ''
              const description = item.description[currentLocale] || item.description.en || ''
              
              // Skip if both title and description are empty
              if (!title && !description) return null
              
              // Auto-assign colors based on index
              const colors = ['error', 'success', 'primary', 'warning', 'info'] as const
              const dotColor = colors[index % colors.length]
              
              return (
                <TimelineItem key={item.id}>
                  {!isBelowMdScreen && (
                    <TimelineOppositeContent color='text.disabled'>
                      <div className={`flex flex-col ${index % 2 === 0 ? 'items-end' : 'items-start'} gap-4 mbe-10`}>
                        <Typography variant='h5' component='div'>
                          {item.time}
                        </Typography>
                        <img src={item.image} alt={`${title}-image`} className={classnames(styles.timelineImg)} />
                      </div>
                    </TimelineOppositeContent>
                  )}
                  <TimelineSeparator>
                    <TimelineDot color={dotColor} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    {isBelowMdScreen && (
                      <>
                        <Typography variant='h5' component='div'>
                          {item.time}
                        </Typography>
                        <div className='flex pbs-2 pbe-5 lg:pbs-[60px] md:pie-4 z-[1]'>
                          <img src={item.image} alt={`${title}-image`} className={classnames(styles.timelineImg)} />
                        </div>
                      </>
                    )}
                    <Card>
                      <CardContent>
                        <Typography variant='h5' className='mbe-4' sx={{ fontFamily: `${getFont(locale)}` }}>
                          {title}
                        </Typography>
                        <Typography className='mbe-3' sx={{ fontFamily: `${getFont(locale)}` }}>
                          {description}
                        </Typography>
                        {item.competitionResults && (item.competitionResults[currentLocale] || item.competitionResults.en) && (
                          <Typography className='mbe-3' sx={{ fontFamily: `${getFont(locale)}` }}>
                            {t('Achievements')}: {item.competitionResults[currentLocale] || item.competitionResults.en}
                          </Typography>
                        )}
                        
                        {(item.totalMatches || item.winMatches || item.loseMatches) && (
                          <Grid container rowSpacing={5} columnSpacing={5}>
                            {item.totalMatches && (
                              <Grid item xs={12} lg={4}>
                                <div className='flex flex-col items-start gap-0'>
                                  <Typography sx={{ fontFamily: `${getFont(locale)}` }}>{t('Matches')}</Typography>
                                  <Typography>{item.totalMatches}</Typography>
                                </div>
                              </Grid>
                            )}
                            {item.winMatches && (
                              <Grid item xs={12} lg={4}>
                                <div className='flex flex-col items-start gap-0'>
                                  <Typography sx={{ fontFamily: `${getFont(locale)}` }}>{t('Win')}</Typography>
                                  <Typography>{item.winMatches}</Typography>
                                </div>
                              </Grid>
                            )}
                            {item.loseMatches && (
                              <Grid item xs={12} lg={4}>
                                <div className='flex flex-col items-start gap-0'>
                                  <Typography sx={{ fontFamily: `${getFont(locale)}` }}>{t('Lose')}</Typography>
                                  <Typography>{item.loseMatches}</Typography>
                                </div>
                              </Grid>
                            )}
                          </Grid>
                        )}
                      </CardContent>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              )
            }) : null
          }

          {/* Now timeline item */}
          <TimelineItem>
            {!isBelowMdScreen && (
              <TimelineOppositeContent color='text.disabled'>
                <div className={`flex flex-col ${displayData && displayData.length % 2 === 0 ? 'items-end' : 'items-start'} gap-4 mbe-10`}>
                  <Typography variant='h5' component='div' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t('Now')}
                  </Typography>
                </div>
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineDot color='success' />
            </TimelineSeparator>
            <TimelineContent>
              {isBelowMdScreen && (
                <Typography variant='h5' component='div' sx={{ fontFamily: `${getFont(locale)}` }}>
                  {t('Now')}
                </Typography>
              )}
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  )
}

export default TimelineCenter
