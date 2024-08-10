import { useEffect, useRef } from 'react'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { Typography } from '@mui/material'

import { useTranslations } from 'next-intl'

import { useIntersection } from '@/hooks/useIntersection'
import frontCommonStyles from '@views/front-pages/styles.module.css'
import PlayerIcon from '@/assets/svg/front-pages/landing-page/PlayerIcon'

const Players = () => {
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
    <section id='players' ref={ref} className={classnames('flex flex-col gap-0')}>
      <div className='relative pbs-[100px]'>
        <img
          src='/landing-page/get-started-bg.png'
          alt='background-image'
          className='absolute is-full flex -z-1 pointer-events-none bs-full block-end-0'
        />
        <div
          className={classnames('flex flex-col items-center justify-center mbe-10', frontCommonStyles.layoutSpacing)}
        >
          <div className='flex items-center justify-center mbe-6 gap-3'>
            <PlayerIcon />
            <Typography color='text.primary' className='font-medium uppercase'>
              Players
            </Typography>
          </div>
          <div className='flex items-center gap-2 mbe-1'>
            <Typography variant='h5'>{t('player')}</Typography>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Players
