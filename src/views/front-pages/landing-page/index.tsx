'use client'

// React Imports
import { useEffect } from 'react'

import dynamic from 'next/dynamic'

// Type Imports
import { Divider } from '@mui/material'

import type { Mode } from '@core/types'

// Component Imports
import HeroSection from './HeroSection'

import Leaders from './Leaders'

import ProductStat from './ProductStat'
import Faqs from './Faqs'

import ContactUs from './ContactUs'
import { useSettings } from '@core/hooks/useSettings'
import Activities from './Activities'
import AboutUs from './AboutUs'
import Managers from './Managers'
import Media from './Media'
import Players from './Players'
import Outfielders from './Outfielders'
import Infielders from './Infielders'
import Pitchers from './Pitchers'

import TimelineCenter from './Timeline'
import Gallery from './Gallery'
import type { GalleryImage } from '@/types/imageTypes'
import type { ProcessedFaq } from '@/types/faqTypes'

// import Recruitment from './RecruitmentDialog'

interface props {
  mode: Mode
  locale: string
  logoURL: string
  images: GalleryImage[]
  showSnowfall?: boolean
  teamData?: any
  faqData?: ProcessedFaq[]
}

const Snowfall = dynamic(() => import('./Snowfall'), { 
  ssr: false,
  loading: () => null
})

const LandingPageWrapper = ({ mode, locale, logoURL, images, showSnowfall, teamData, faqData }: props) => {
  // Hooks
  const { updatePageSettings } = useSettings()

  // For Page specific settings
  useEffect(() => {
    return updatePageSettings({
      skin: 'default'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {showSnowfall && <Snowfall />}
      {/* <Recruitment /> */}
      <HeroSection mode={mode} locale={locale} logoURL={logoURL} />
      <AboutUs locale={locale} />
      <TimelineCenter locale={locale} />
      <Divider />
      <ProductStat locale={locale} />
      <Leaders locale={locale} {...teamData} />
      <Managers locale={locale} {...teamData} />
      <Media locale={locale} {...teamData} />
      <Players locale={locale} {...teamData} />
      <Divider />
      <Pitchers locale={locale} {...teamData} />
      <Divider />
      <Infielders locale={locale} {...teamData} />
      <Divider />
      <Outfielders locale={locale} {...teamData} />
      <Activities locale={locale} />
      {/* <Divider /> */}
      <Gallery images={images} locale={locale} logoURL={logoURL} />
      <Faqs locale={locale} faqData={faqData} />
      <ContactUs locale={locale} />
    </>
  )
}

export default LandingPageWrapper
