'use client'

// React Imports
import { useEffect } from 'react'

import dynamic from 'next/dynamic'

import InfiniteGallery from './InfiniteGallery'
import type { GalleryImage } from '@/types/imageTypes'

// import './styles.module.css'

// Component Imports
import { useSettings } from '@core/hooks/useSettings'

interface GalleryWrapperProps {
  images: GalleryImage[]
  locale: string
  logoURL: string
  showSnowfall?: boolean
}

const Snowfall = dynamic(() => import('@views/front-pages/landing-page/Snowfall'), { 
  ssr: false,
  loading: () => null
})

const GalleryWrapper = ({ images, locale, logoURL, showSnowfall }: GalleryWrapperProps) => {
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
      <div className='container mx-auto px-4 py-8'>
        <InfiniteGallery initialImages={images} locale={locale} logoURL={logoURL} />
      </div>
    </>
  )
}

export default GalleryWrapper
