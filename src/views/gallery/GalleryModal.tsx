// components/Gallery/Modal.tsx
'use client'

import { useCallback, useEffect, useRef } from 'react'

import Image from 'next/image'

import type { GalleryImage } from '@/types/imageTypes'

interface ModalProps {
  images: GalleryImage[]
  currentImage: GalleryImage
  onClose: () => void
  onNavigate: (index: number) => void
  currentIndex: number
}

const Modal = ({ images, currentImage, onClose, onNavigate, currentIndex }: ModalProps) => {
  const previewStripRef = useRef<HTMLDivElement>(null)
  const selectedPreviewRef = useRef<HTMLButtonElement>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1)
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) onNavigate(currentIndex + 1)
    },
    [onClose, onNavigate, currentIndex, images.length]
  )

  // Scroll selected preview into view
  useEffect(() => {
    if (selectedPreviewRef.current && previewStripRef.current) {
      const strip = previewStripRef.current
      const selected = selectedPreviewRef.current
      const stripWidth = strip.offsetWidth
      const selectedWidth = selected.offsetWidth
      const scrollPosition = selected.offsetLeft - stripWidth / 2 + selectedWidth / 2

      // Đảm bảo scroll vào giữa ngay cả với ảnh đầu tiên
      requestAnimationFrame(() => {
        strip.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        })
      })
    }
  }, [currentIndex])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [handleKeyDown])

  const url = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2048/${currentImage.id}.${currentImage.format}`
  const blurUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2048,e_blur:1000/${currentImage.id}.${currentImage.format}`

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center' onClick={onClose}>
      {/* Blurred background */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat blur-xl opacity-70'
        style={{ backgroundImage: `url(${blurUrl})` }}
      />
      <div className='absolute inset-0 bg-black/50' />

      {/* Content */}
      <div
        className='relative w-full h-full flex flex-col justify-center items-center p-4'
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-10 p-2 text-white hover:bg-white/10 rounded-full transition-colors'
        >
          <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>

        {/* Main Image Container */}
        <div className='relative w-full h-[85vh] flex items-center justify-center'>
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={e => {
                e.stopPropagation()
                onNavigate(currentIndex - 1)
              }}
              className='absolute left-4 z-10 p-4 text-white hover:bg-white/10 rounded-full transition-colors'
            >
              <svg className='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
            </button>
          )}

          {/* Main Image */}
          <div className='relative w-auto h-full max-w-[90vw] rounded-lg overflow-hidden'>
            <Image src={url} alt='' fill className='object-contain rounded-lg' priority sizes='90vw' />
          </div>

          {currentIndex < images.length - 1 && (
            <button
              onClick={e => {
                e.stopPropagation()
                onNavigate(currentIndex + 1)
              }}
              className='absolute right-4 z-10 p-4 text-white hover:bg-white/10 rounded-full transition-colors'
            >
              <svg className='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </button>
          )}
        </div>

        {/* Preview Strip */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4'>
          <div
            ref={previewStripRef}
            className='flex gap-3 justify-start overflow-x-auto py-2 px-4 max-w-full scroll-smooth'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => {
              const previewUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_400/${image.id}.${image.format}`
              const isSelected = index === currentIndex

              return (
                <button
                  key={image.id}
                  ref={isSelected ? selectedPreviewRef : null}
                  onClick={e => {
                    e.stopPropagation()
                    onNavigate(index)
                  }}
                  className={`
                    relative w-32 h-20 flex-shrink-0 transition-all duration-200 rounded-lg overflow-hidden
                    ${isSelected ? 'opacity-100 ring-4 ring-white scale-110 z-10' : 'opacity-40 hover:opacity-70'}
                  `}
                >
                  <Image src={previewUrl} alt='' fill className='object-cover' sizes='128px' />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
