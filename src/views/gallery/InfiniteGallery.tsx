'use client'

import { useState, useEffect, useCallback } from 'react'

import type { GalleryImage } from '@/types/imageTypes'
import GalleryImageComponent from './GalleryImage'
import Modal from './GalleryModal'
import GalleryIntro from './GalleryIntro'

interface Props {
  initialImages: GalleryImage[]
  locale: string
  logoURL: string
}

const InfiniteGallery = ({ initialImages, locale, logoURL }: Props) => {
  const [images, setImages] = useState<GalleryImage[]>(initialImages)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [nextCursor, setNextCursor] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const loadMoreImages = useCallback(async () => {
    if (loading || !hasMore) return

    setLoading(true)
    
    try {
      const url = nextCursor 
        ? `/api/gallery?limit=20&cursor=${nextCursor}`
        : '/api/gallery?limit=20&page=2'
      
      const response = await fetch(url)
      const data = await response.json()
      
      if (Array.isArray(data)) {
        // Old format fallback
        if (data.length === 0) {
          setHasMore(false)
        } else {
          setImages(prev => [...prev, ...data])
        }
      } else {
        // New format with cursor
        if (data.images.length === 0) {
          setHasMore(false)
        } else {
          setImages(prev => [...prev, ...data.images])
          setNextCursor(data.nextCursor)
          setHasMore(data.hasMore)
        }
      }
    } catch (error) {
      console.error('Error loading more images:', error)
      setHasMore(false)
    } finally {
      setLoading(false)
    }
  }, [nextCursor, loading, hasMore])

  const handleImageClick = useCallback((index: number) => {
    setSelectedIndex(index)

    // Hide body scroll and FAB when modal opens
    document.body.style.overflow = 'hidden'
  }, [])

  const handleModalClose = useCallback(() => {
    setSelectedIndex(null)

    // Restore body scroll when modal closes
    document.body.style.overflow = 'unset'
  }, [])

  const handleNavigate = useCallback(async (newIndex: number) => {
    // If we're near the end and there are more images, load them
    if (newIndex >= images.length - 5 && hasMore && !loading) {
      await loadMoreImages()
    }

    setSelectedIndex(newIndex)
  }, [images.length, hasMore, loading, loadMoreImages])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const handleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
          loadMoreImages()
        }
      }, 100) // Debounce 100ms
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [loadMoreImages])

  return (
    <>
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <div className='sm:row-span-2 sm:col-span-1'>
            <GalleryIntro locale={locale} logoURL={logoURL} />
          </div>
          {images.map((image, index) => (
            <div key={image.public_id} className='aspect-[3/2] w-full overflow-hidden rounded-lg'>
              <GalleryImageComponent 
                image={image} 
                onClick={() => handleImageClick(index)} 
                logoURL={logoURL}
                priority={index < 8}
              />
            </div>
          ))}
        </div>
        
        {loading && (
          <div className='flex justify-center mt-8'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary'></div>
          </div>
        )}
        
      </div>

      {selectedIndex !== null && (
        <Modal
          images={images}
          currentImage={images[selectedIndex]}
          currentIndex={selectedIndex}
          onClose={handleModalClose}
          onNavigate={handleNavigate}
        />
      )}
    </>
  )
}

export default InfiniteGallery