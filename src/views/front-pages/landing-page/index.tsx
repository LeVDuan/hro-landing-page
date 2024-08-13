'use client'

// React Imports
import { useEffect } from 'react'

// Type Imports
import { Divider } from '@mui/material'

import type { Mode } from '@core/types'

// Component Imports
import HeroSection from './HeroSection'

// import UsefulFeature from './UsefulFeature'
// import CustomerReviews from './CustomerReviews'
// import DemoVideo from './DemoVideo'
// import OurTeam from './OurTeam'
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
import Catchers from './Catchers'
import Outfielders from './Outfielders'
import Infielders from './Infielders'
import Pitchers from './Pitchers'

// import Predecessors from './Predecessors-slide'
import Predecessors from './Predecessors-static'
import TimelineCenter from './Timeline'

interface props {
  mode: Mode
  locale: string
}

const LandingPageWrapper = ({ mode, locale }: props) => {
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
      {/* <DialogsCustomized /> */}
      <HeroSection mode={mode} locale={locale} />
      <AboutUs locale={locale} />
      {/* <CustomerReviews /> */}
      {/* <GetStarted />
      <Official />
      <NationalCup2023 />
      <HBMS2023 />
      <NationalCup2024 /> */}
      <TimelineCenter locale={locale} />
      <Divider />
      <ProductStat locale={locale} />
      <Leaders locale={locale} />
      <Predecessors locale={locale} />
      <Managers locale={locale} />
      <Media locale={locale} />
      <Players locale={locale} />
      <Divider />
      <Pitchers locale={locale} />
      <Catchers locale={locale} />
      <Infielders locale={locale} />
      <Outfielders locale={locale} />
      {/* <DemoVideo mode={mode} />
      <OurTeam />
       */}
      <Activities locale={locale} />
      <Faqs locale={locale} />
      <ContactUs locale={locale} />
    </>
  )
}

export default LandingPageWrapper
