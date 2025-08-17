// React Imports
import { useState } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@/@core/types'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
import { getFont } from '@/utils/getFont'
import { useStatsData } from '@/hooks/useStatsData'


const ProductStat = ({ locale }: { locale: string }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const { stats } = useStatsData()
  
  const displayData = stats.length > 0 ? stats : null

  return (
    <section className='plb-[64px] relative'>
      {/* <img
        src='/landing-page/get-started-bg.png'
        alt='background-image'
        className='absolute is-full flex -z-1 pointer-events-none bs-full block-end-0'
      /> */}
      <div className={frontCommonStyles.layoutSpacing}>
        <Grid container spacing={6}>
          {displayData ? 
            displayData.map((stat, index) => {
              // Map locale to supported languages
              const currentLocale = (['en', 'vi', 'ja', 'ko'].includes(locale as any)) ? locale as 'en' | 'vi' | 'ja' | 'ko' : 'en'
              
              // Get title with fallback to English if current locale is empty
              const title = stat.title[currentLocale] || stat.title.en || ''
              
              // Skip if title is empty
              if (!title) return null
              
              return (
                <Grid item key={stat.id} xs={6} md={3}>
                  <div className='flex flex-col items-center justify-center gap-6'>
                    <CustomAvatar
                      onMouseEnter={() => {
                        setHoverIndex(index)
                      }}
                      onMouseLeave={() => {
                        setHoverIndex(null)
                      }}
                      skin={hoverIndex === index ? 'filled' : 'light'}
                      color={stat.color as ThemeColor}
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
                        {title}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              )
            }) : null
          }
        </Grid>
      </div>
    </section>
  )
}

export default ProductStat
