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

import frontCommonStyles from '@views/front-pages/styles.module.css'
import ElementOne from '@/assets/svg/front-pages/landing-page/ElementOne'
import Lines from '@/assets/svg/front-pages/landing-page/Lines'

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
    image: '/images/front-pages/landing-page/early-stage.jpg',
    time: '21/10/2020',
    title: 'Early stage',
    description:
      'Từ những ngày còn là thành viên của CLB Hanoi Amsterdam Phoenix (HAP), Minh Hà và Minh Châu đã ấp ủ giấc mơ mang bóng chày đến gần hơn với mọi người. Và rồi, sau nhiều năm miệt mài rèn luyện và học hỏi, hai bạn đã quyết định biến giấc mơ thành hiện thực bằng cách thành lập HRO vào 21/10/2020. Nhận thấy vùng đất Bách Khoa màu mỡ nhiều tiềm năng, tràn đầy những bạn trẻ đam mê thể thao, các chị đã bắt đầu đi khai phá và gieo những hạt giống bóng chày tại đây. Ngọn lửa đam mê bóng chày đã thắp sáng những ngày đầu thành lập HRO, nơi tụ họp của những trái tim yêu bóng chày, chủ yếu là các bạn sinh viên Bách Khoa.'
  },
  2: {
    image: '/images/front-pages/landing-page/team-image.jpg',
    time: '3/2021',
    title: 'Offical',
    description:
      'Tháng 3/2021, một trang mới đã được mở ra trong lịch sử của HRO khi chúng mình chính thức trở thành CLB của Đoàn Đại học Bách khoa Hà Nội, trực thuộc Ban văn nghệ thể thao. Đây là một bước tiến lớn đánh dấu sự trưởng thành của CLB.'
  },
  3: {
    image: '/images/front-pages/landing-page/nationalCup2023.png',
    time: '7/2023',
    title: 'Cup2023',
    description:
      'Là một đội chưa có nhiều kinh nghiệm nhưng nhờ những ngày nỗ lực tập luyện chăm chỉ dưới cái nắng gắt của Hà Nội, những buổi lẻ trong tuần đã giúp HRO có một giải đấu thành công.',
    totalMatches: 5,
    winMatches: 3,
    loseMatches: 2,
    competitionResults: '3rd'
  },
  4: {
    image: '/images/front-pages/landing-page/HBMS2023.png',
    time: '10/2023',
    title: 'HBMS2023',
    description:
      'Tiếp nối tinh thần sau giải toàn quốc tháng 7, HRO tiếp tục tham gia “Giải vô địch bóng chày Hà Nội 2023".',
    totalMatches: 3,
    winMatches: 1,
    loseMatches: 2,
    competitionResults: '3rd'
  },
  5: {
    image: '/images/front-pages/landing-page/nationalCup2024.png',
    time: '7/2024',
    title: 'Cup2024',
    totalMatches: 4,
    winMatches: 1,
    loseMatches: 3,
    competitionResults: 'Group stage',
    description:
      'Là một đội chưa có nhiều kinh nghiệm, nhưng nhờ những ngày nỗ lực tập luyện chăm chỉ dưới cái nắng gắt của Hà Nội, những buổi lẻ trong tuần đã giúp HRO đạt được thành công trong giải đấu. '
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

const TimelineCenter = () => {
  // Hooks
  const theme = useTheme()
  const isBelowMdScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <section className='flex flex-col gap-16 plb-[100px]'>
      <div className={classnames('flex flex-col items-center justify-center', frontCommonStyles.layoutSpacing)}>
        <div className='flex is-full justify-center relative mbe-8'>
          <ElementOne className='absolute inline-end-0' />
          <div className='flex items-center justify-center mbe-6 gap-3'>
            <Lines />
            <Typography color='text.primary' className='font-medium uppercase'>
              Club Milestones
            </Typography>
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
                  <Typography variant='h5' className='mbe-4'>
                    {dataObj[1].title}
                  </Typography>
                  <Typography className='mbe-3'>{dataObj[1].description}</Typography>
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
                  <Typography variant='h5' className='mbe-4'>
                    {dataObj[2].title}
                  </Typography>
                  <Typography className='mbe-3'>{dataObj[2].description}</Typography>
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
                  <Typography variant='h5' className='mbe-4'>
                    {dataObj[3].title}
                  </Typography>
                  <Typography className='mbe-3'>{dataObj[3].description}</Typography>
                  <Typography className='mbe-3'>Thành tích: {dataObj[3].competitionResults}</Typography>

                  <Grid container rowSpacing={5} columnSpacing={5}>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography>Matches</Typography>
                        <Typography>{dataObj[3].totalMatches}</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography>Win</Typography>
                        <Typography>{dataObj[3].winMatches}</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography>Lose</Typography>
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
                  <Typography variant='h5' className='mbe-4'>
                    {dataObj[4].title}
                  </Typography>
                  <Typography className='mbe-3'>{dataObj[4].description}</Typography>
                  <Typography className='mbe-3'>Thành tích: {dataObj[4].competitionResults}</Typography>

                  <Grid container rowSpacing={5} columnSpacing={5}>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography>Matches</Typography>
                        <Typography>{dataObj[4].totalMatches}</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography>Win</Typography>
                        <Typography>{dataObj[4].winMatches}</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography>Lose</Typography>
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
                  <Typography variant='h5' className='mbe-4'>
                    {dataObj[5].title}
                  </Typography>
                  <Typography className='mbe-3'>{dataObj[5].description}</Typography>
                  <Typography className='mbe-3'>Thành tích: {dataObj[5].competitionResults}</Typography>

                  <Grid container rowSpacing={5} columnSpacing={5}>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography>Matches</Typography>
                        <Typography>{dataObj[4].totalMatches}</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography>Win</Typography>
                        <Typography>{dataObj[5].winMatches}</Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className='flex flex-col items-start gap-0'>
                        <Typography>Lose</Typography>
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
                  <Typography variant='h5' component='div'>
                    Now
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
                  <Typography variant='h5' component='div'>
                    Now
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
