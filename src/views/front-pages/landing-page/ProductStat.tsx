// React Imports
import { useState } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import { useTranslations } from 'next-intl'

import type { ThemeColor } from '@/@core/types'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
import { getFont } from '@/utils/getFont'

// Type
type StatData = {
  title: string
  value: number
  icon: string
  color: ThemeColor
  isHover: boolean
}

// Data
const statData: StatData[] = [
  {
    title: 'Years Active',
    value: 4,
    icon: 'ri-time-line',
    color: 'primary',
    isHover: false
  },
  {
    title: 'Members',
    value: 40,
    icon: 'ri-user-line',
    color: 'warning',
    isHover: false
  },
  {
    title: 'Tournaments Participated',
    value: 3,
    icon: 'ri-award-line',
    color: 'success',
    isHover: false
  },

  {
    title: 'Events',
    value: 10,
    icon: ' ri-calendar-event-line',
    color: 'info',
    isHover: false
  }
]

const ProductStat = ({ locale }: { locale: string }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const t = useTranslations('stats')

  return (
    <section className='plb-[64px] relative'>
      {/* <img
        src='/landing-page/get-started-bg.png'
        alt='background-image'
        className='absolute is-full flex -z-1 pointer-events-none bs-full block-end-0'
      /> */}
      <div className={frontCommonStyles.layoutSpacing}>
        <Grid container spacing={6}>
          {statData.map((stat, index) => (
            <Grid item key={index} xs={6} md={3}>
              <div className='flex flex-col items-center justify-center gap-6'>
                <CustomAvatar
                  onMouseEnter={() => {
                    setHoverIndex(index)
                  }}
                  onMouseLeave={() => {
                    setHoverIndex(null)
                  }}
                  skin={hoverIndex === index ? 'filled' : 'light'}
                  color={stat.color}
                  size={82}
                  className='cursor-pointer'
                >
                  <i className={classnames(stat.icon, 'text-[2.625rem]')} />
                </CustomAvatar>
                <div className='text-center'>
                  <Typography color='text.primary' className='font-bold text-[34px]'>
                    {stat.value}+
                  </Typography>
                  <Typography className='font-medium' color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                    {t(stat.title)}
                  </Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default ProductStat
