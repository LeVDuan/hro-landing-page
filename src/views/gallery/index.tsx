'use client'

// React Imports
import { useEffect } from 'react'

import GalleryGrid from './GalleryGrid'
import type { GalleryImage } from '@/types/imageTypes'

// Component Imports
import { useSettings } from '@core/hooks/useSettings'

interface GalleryWrapperProps {
  images: GalleryImage[]
}

const GalleryWrapper = ({ images }: GalleryWrapperProps) => {
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
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Gallery</h1>
      <GalleryGrid images={images} />
    </div>
  )
}

export default GalleryWrapper
