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
import { getFont } from '@/utils/getFont'
import type { ProcessedFaq } from '@/types/faqTypes'

interface FaqsProps {
  locale: string
  faqData?: ProcessedFaq[]
}

const Faqs = ({ locale, faqData }: FaqsProps) => {
  // Refs
  const skipIntersection = useRef(true)
  const ref = useRef<null | HTMLDivElement>(null)
  const t = useTranslations('faq')
  
  // Use data from Google Sheets only
  const displayData = faqData
  

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
          {locale === 'vi' ? (
            <>
              <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                {t('Frequently asked')}{' '}
              </Typography>
              <Typography variant='h4' className='font-bold' sx={{ fontFamily: `${getFont(locale)}` }}>
                <span className='relative z-[1] font-extrabold'>
                  {t('questions')}
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
                  {t('Frequently asked')}
                  <img
                    src='/landing-page/bg-shape.png'
                    alt='bg-shape'
                    className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[13%] sm:inline-start-[-19%] block-start-[17px]'
                  />
                </span>{' '}
              </Typography>
              <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                {t('questions')}
              </Typography>
            </>
          )}
        </div>
        <Typography
          color='text.secondary'
          className='font-medium text-center'
          sx={{ fontFamily: `${getFont(locale)}` }}
        >
          {t('description')}
        </Typography>
      </div>
      <div>
        <Grid container>
          <Grid item xs={12} lg={5} className='text-center'>
            <img src='/landing-page/Hoo-faqs.png' alt='HRO Hoo with baseball' className='is-[80%] max-is-[320px]' />
          </Grid>
          <Grid item xs={12} lg={7}>
            <div>
              {displayData && displayData.map((data) => {
                // Map locale to supported languages
                const currentLocale = (['en', 'vi', 'ja', 'ko'].includes(locale as any)) ? locale as 'en' | 'vi' | 'ja' | 'ko' : 'en'
                
                // Get question and answer with fallback to English if current locale is empty
                const question = data.question[currentLocale] || data.question.en || ''
                const answer = data.answer[currentLocale] || data.answer.en || ''
                
                // Skip if both question and answer are empty
                if (!question && !answer) return null

                return (
                  <Accordion key={data.id} defaultExpanded={data.active}>
                    <AccordionSummary
                      aria-controls={data.id + '-content'}
                      id={data.id + '-header'}
                      sx={{ fontFamily: `${getFont(locale)}` }}
                    >
                      {question}
                    </AccordionSummary>
                    <AccordionDetails sx={{ fontFamily: `${getFont(locale)}` }}>
                      {answer}
                    </AccordionDetails>
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
