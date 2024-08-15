import { useEffect, useRef } from 'react'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { Typography } from '@mui/material'

import { useTranslations } from 'next-intl'

import { useIntersection } from '@/hooks/useIntersection'
import frontCommonStyles from '@views/front-pages/styles.module.css'
import PlayerIcon from '@/assets/svg/front-pages/landing-page/PlayerIcon'
import { getFont } from '@/utils/getFont'
import ElementOne from '@/assets/svg/front-pages/landing-page/ElementOne'

const Players = ({ locale }: { locale: string }) => {
  // Refs
  const skipIntersection = useRef(true)
  const ref = useRef<null | HTMLDivElement>(null)
  const t = useTranslations('structure')

  // Hooks
  const { updateIntersections } = useIntersection()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (skipIntersection.current) {
          skipIntersection.current = false

          return
        }

        updateIntersections({ [entry.target.id]: entry.isIntersecting })
      },
      { threshold: 0.35 }
    )

    ref.current && observer.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id='players' ref={ref} className='flex flex-col gap-0 relative pbs-[100px]'>
      <div className={classnames('flex flex-col items-center justify-center mbe-10', frontCommonStyles.layoutSpacing)}>
        <ElementOne className='absolute inline-start-56' />

        <div className='flex items-center justify-center mbe-6 gap-3'>
          <PlayerIcon />
          <Typography color='text.primary' className='font-medium' sx={{ fontFamily: `${getFont(locale)}` }}>
            {t('Players')}
          </Typography>
        </div>
        <div className='flex items-center gap-2 mbe-1'>
          {locale === 'vi' ? (
            <>
              <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                {t('player1')}{' '}
              </Typography>
              <Typography variant='h4' className='font-bold' sx={{ fontFamily: `${getFont(locale)}` }}>
                <span className='relative z-[1] font-extrabold'>
                  {t('player2')}
                  <img
                    src='/landing-page/bg-shape.png'
                    alt='bg-shape'
                    className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[13%] sm:inline-start-[-19%] block-start-[17px]'
                  />
                </span>
              </Typography>
            </>
          ) : (
            <>
              <Typography variant='h4' className='font-bold' sx={{ fontFamily: `${getFont(locale)}` }}>
                <span className='relative z-[1] font-extrabold'>
                  {t('player1')}
                  <img
                    src='/landing-page/bg-shape.png'
                    alt='bg-shape'
                    className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[13%] sm:inline-start-[-19%] block-start-[17px]'
                  />
                </span>{' '}
              </Typography>
              <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                {t('player2')}
              </Typography>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Players
