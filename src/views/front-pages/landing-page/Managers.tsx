import { useEffect, useRef } from 'react'

// Next Imports
import Image from 'next/image'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useTranslations } from 'next-intl'

import { styled } from '@mui/material/styles'

import MuiCard from '@mui/material/Card'

import { useIntersection } from '@/hooks/useIntersection'

import frontCommonStyles from '@views/front-pages/styles.module.css'

// SVG Imports
import ElementTwo from '@/assets/svg/front-pages/landing-page/ElementTwo'
import type { ThemeColor } from '@/@core/types'
import ManaIcon from '@/assets/svg/front-pages/landing-page/ManagerIcon'

import { getFont } from '@/utils/getFont'

const Card = styled(MuiCard)`
  transition: transform 0.3s ease;
  &:hover {
    border-color: ${(props: { color: ThemeColor }) => props.color};
    transform: translateY(-10px) scale(1.05);
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

interface ManagersProps {
  locale: string
  managers?: any[]
  newManagers?: any[]
}

const Managers = ({ locale, managers = [], newManagers = [] }: ManagersProps) => {
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
    <section id='managers' className={classnames('plb-[100px]')} ref={ref}>
      <div className={frontCommonStyles.layoutSpacing}>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex is-full justify-center relative'>
            <ElementTwo className='absolute inline-start-0' />
            <div className='flex items-center justify-center mbe-6 gap-3 text-center'>
              {/* <Lines /> */}
              <ManaIcon />

              <Typography color='text.primary' className='font-medium' sx={{ fontFamily: `${getFont(locale)}` }}>
                {t('Managers')}
              </Typography>
            </div>
          </div>
          <div className='flex items-center flex-wrap justify-center gap-x-2 mbe-1'>
            {locale === 'vi' ? (
              <>
                <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                  {t('manager1')}{' '}
                </Typography>
                <Typography variant='h4' className='font-bold' sx={{ fontFamily: `${getFont(locale)}` }}>
                  <span className='relative z-[1] font-extrabold'>
                    {t('manager2')}
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
                    {t('manager1')}
                    <img
                      src='/landing-page/bg-shape.png'
                      alt='bg-shape'
                      className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[13%] sm:inline-start-[-19%] block-start-[17px]'
                    />
                  </span>{' '}
                </Typography>
                <Typography variant='h5' sx={{ fontFamily: `${getFont(locale)}` }}>
                  {t('manager2')}
                </Typography>
              </>
            )}
          </div>
        </div>
        <Grid
          container
          rowSpacing={16}
          columnSpacing={6}
          className='mbe-8 pbs-[100px] flex justify-center items-center'
        >
          {managers.map((member, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card className='shadow-none border overflow-visible' color={member.color as ThemeColor}>
                <CardContent className='flex flex-col items-center justify-center p-0'>
                  <div
                    className='flex justify-center is-full mli-auto text-center bs-[190px] relative overflow-visible rounded-ss-md rounded-se-md'
                    style={{ backgroundColor: member.color }}
                  >
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={240}
                      height={240}
                      className='bs-[240px] absolute block-start-[-50px]' 
                      loading='eager'
                      sizes='(max-width: 768px) 120px, 240px'
                    />
                  </div>
                  <div className='flex flex-col gap-3 p-5 is-full'>
                    <div className='text-center'>
                      <Typography variant='h5'>{member.name}</Typography>
                      <Typography color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                        {t(member.gen)}
                      </Typography>
                      <Typography color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                        {t('Jersey number')}
                        {member.num}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          rowSpacing={16}
          columnSpacing={6}
          className='mbe-8 pbs-[100px] flex justify-center items-center'
        >
          {newManagers.map((member, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card className='shadow-none border overflow-visible' color={member.color as ThemeColor}>
                <CardContent className='flex flex-col items-center justify-center p-0'>
                  <div
                    className='flex justify-center is-full mli-auto text-center bs-[190px] relative overflow-visible rounded-ss-md rounded-se-md'
                    style={{ backgroundColor: member.color }}
                  >
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={240}
                      height={240}
                      className='bs-[240px] absolute block-start-[-50px]' 
                      loading='eager'
                      sizes='(max-width: 768px) 120px, 240px'
                    />
                  </div>
                  <div className='flex flex-col gap-3 p-5 is-full'>
                    <div className='text-center'>
                      <Typography variant='h5'>{member.name}</Typography>
                      <Typography color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                        {t(member.gen)}
                      </Typography>
                      <Typography color='text.secondary' sx={{ fontFamily: `${getFont(locale)}` }}>
                        {t('Jersey number')}
                        {member.num}
                      </Typography>
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

export default Managers
