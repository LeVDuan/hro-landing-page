// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useTranslations } from 'next-intl'

import { useIntersection } from '@/hooks/useIntersection'

// SVG Imports
import ElementOne from '@/assets/svg/front-pages/landing-page/ElementOne'

// import Lines from '@assets/svg/front-pages/landing-page/Lines'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
import FaqIcon from '@/assets/svg/front-pages/landing-page/FaqIcon'
import { FaqsData } from '@/fake-db/data'

const Faqs = () => {
  // Refs
  const skipIntersection = useRef(true)
  const ref = useRef<null | HTMLDivElement>(null)
  const t = useTranslations('faq')

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
    <section
      id='faq'
      ref={ref}
      className={classnames('flex flex-col gap-16 plb-[100px]', frontCommonStyles.layoutSpacing)}
    >
      <div className='flex flex-col items-center justify-center'>
        <div className='flex is-full justify-center items-center relative'>
          <ElementOne className='absolute inline-end-0' />
          <div className='flex items-center justify-center mbe-6 gap-3'>
            <FaqIcon />
            <Typography color='text.primary' className='font-medium uppercase'>
              {t('FAQ')}
            </Typography>
          </div>
        </div>
        <div className='flex items-center flex-wrap justify-center gap-x-2 mbe-1'>
          <Typography variant='h4' className='font-bold'>
            {t('Frequently asked')}
          </Typography>
          <Typography variant='h5'>{t('questions')}</Typography>
        </div>
        <Typography color='text.secondary' className='font-medium text-center'>
          {t('description')}
        </Typography>
      </div>
      <div>
        <Grid container>
          <Grid item xs={12} lg={5} className='text-center'>
            <img
              src='/images/front-pages/landing-page/sitting-girl-with-laptop.png'
              alt='HRO Hoo with baseball'
              className='is-[80%] max-is-[320px]'
            />
          </Grid>
          <Grid item xs={12} lg={7}>
            <div>
              {FaqsData.map((data, index) => {
                return (
                  <Accordion key={index} defaultExpanded={data.active}>
                    <AccordionSummary aria-controls={data.id + '-content'} id={data.id + '-header'}>
                      {t(data.question)}
                    </AccordionSummary>
                    <AccordionDetails>{t(data.answer)}</AccordionDetails>
                  </Accordion>
                )
              })}
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default Faqs
