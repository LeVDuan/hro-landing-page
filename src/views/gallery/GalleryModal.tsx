// components/Gallery/GalleryModal.tsx
import { useCallback, useEffect } from 'react'

import Image from 'next/image'

import type { GalleryImage } from './types'

interface Props {
  image: GalleryImage
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
  hasPrev?: boolean
  hasNext?: boolean
}

const GalleryModal = ({ image, onClose, onPrev, onNext, hasPrev, hasNext }: Props) => {
  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev && onPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext && onNext) onNext()
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [handleKeyDown])

  return (
    <div className='fixed inset-0 z-50'>
      {/* Blurred background using the same image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${image.src})`,
          filter: 'blur(20px)',
          transform: 'scale(1.1)', // Prevent blur edges
          opacity: '0.7'
        }}
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/30' />

      {/* Content */}
      <div className='relative h-full flex flex-col'>
        {/* Header */}
        <div className='p-4 flex justify-end'>
          <button onClick={onClose} className='text-white hover:bg-white/10 p-2 rounded-full transition-colors'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>

        {/* Main Image */}
        <div className='flex-1 flex items-center justify-center px-4'>
          <div className='relative max-h-[80vh] max-w-[90vw]'>
            <Image
              src={image.src}
              alt={image.title || ''}
              width={image.width}
              height={image.height}
              className='object-contain max-h-[80vh] w-auto h-auto'
              priority
            />
          </div>

          {/* Navigation buttons */}
          {hasPrev && (
            <button
              onClick={onPrev}
              className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-2 rounded-full transition-colors'
            >
              <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
            </button>
          )}

          {hasNext && (
            <button
              onClick={onNext}
              className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-2 rounded-full transition-colors'
            >
              <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </button>
          )}
        </div>

        {/* Footer with image info */}
        {(image.title || image.description) && (
          <div className='p-4 text-white text-center'>
            {image.title && <h3 className='text-xl font-semibold'>{image.title}</h3>}
            {image.description && <p className='text-sm mt-2 text-white/80'>{image.description}</p>}
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryModal
