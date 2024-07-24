'use client'

// React Imports
import { useEffect } from 'react'

// Type Imports
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

import GetStarted from './GetStarted'
import ContactUs from './ContactUs'
import { useSettings } from '@core/hooks/useSettings'
import Activities from './Activities'
import AboutUs from './AboutUs'
import Managers from './Managers'
import Media from './Media'
import Players from './Players'
import Official from './Official'
import Catchers from './Catchers'
import Outfielders from './Outfielders'
import Infielders from './Infielders'
import Pitchers from './Pitchers'

// import Predecessors from './Predecessors-slide'
import Predecessors from './Predecessors-static'

const LandingPageWrapper = ({ mode }: { mode: Mode }) => {
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
      <HeroSection mode={mode} />
      <AboutUs />
      {/* <CustomerReviews /> */}
      <GetStarted />
      <Official />
      <ProductStat />
      <Leaders />
      <Predecessors />
      <Managers />
      <Media />
      <Players />
      <Pitchers />
      <Catchers />
      <Infielders />
      <Outfielders />
      {/* <DemoVideo mode={mode} />
      <OurTeam />
       */}
      <Activities />
      <Faqs />
      <ContactUs />
    </>
  )
}

export default LandingPageWrapper
