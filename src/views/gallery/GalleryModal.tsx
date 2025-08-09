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

  const url = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_limit,w_1920,f_auto,q_auto:good/${currentImage.public_id}.${currentImage.format}`

  return (
    <div className='fixed inset-0 flex items-center justify-center z-[9999]'>
      {/* Background */}
      <button className='absolute inset-0 z-30 cursor-default bg-black/40 backdrop-blur-xl' onClick={onClose}>
        {currentImage.blurDataUrl && (
          <Image
            src={currentImage.blurDataUrl}
            className='pointer-events-none h-full w-full opacity-70'
            alt='blurred background'
            fill
            priority={true}
          />
        )}
      </button>

      {/* Content */}
      <div className='relative z-50 flex flex-col w-full h-full'>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-black/80 rounded-full transition-all duration-200 shadow-lg backdrop-blur-sm cursor-pointer'
        >
          <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>

        {/* Main Image Container */}
        <div className='flex-1 flex items-center justify-center p-4 md:p-8'>
          <div className='relative w-full h-full max-h-[75vh] flex items-center justify-center'>
            {/* Navigation Buttons */}
            {currentIndex > 0 && (
              <button
                onClick={e => {
                  e.stopPropagation()
                  onNavigate(currentIndex - 1)
                }}
                className='absolute left-2 md:left-4 z-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/60 hover:bg-black/80 rounded-full transition-all duration-200 shadow-lg backdrop-blur-sm cursor-pointer'
                aria-label='Previous image'
              >
                <svg className='w-6 h-6 md:w-7 md:h-7 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                </svg>
              </button>
            )}

            {/* Main Image */}
            <div className='relative w-full h-full flex items-center justify-center'>
              <Image
                src={url}
                alt=''
                className='object-contain rounded-lg max-h-full'
                fill
                priority
                placeholder='blur'
                blurDataURL={currentImage.blurDataUrl}
                sizes='(max-width: 768px) 100vw, 90vw'
              />
            </div>
            
            {/* Cache adjacent images for better performance */}
            <div className='hidden'>
              {/* Cache previous 2 images */}
              {currentIndex > 0 && (
                <Image
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_limit,w_1920,f_auto,q_auto:good/${images[currentIndex - 1].public_id}.${images[currentIndex - 1].format}`}
                  alt='cache prev'
                  width={1}
                  height={1}
                  priority={false}
                />
              )}
              {currentIndex > 1 && (
                <Image
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_limit,w_1920,f_auto,q_auto:good/${images[currentIndex - 2].public_id}.${images[currentIndex - 2].format}`}
                  alt='cache prev2'
                  width={1}
                  height={1}
                  priority={false}
                />
              )}
              {/* Cache next 2 images */}
              {currentIndex < images.length - 1 && (
                <Image
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_limit,w_1920,f_auto,q_auto:good/${images[currentIndex + 1].public_id}.${images[currentIndex + 1].format}`}
                  alt='cache next'
                  width={1}
                  height={1}
                  priority={false}
                />
              )}
              {currentIndex < images.length - 2 && (
                <Image
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_limit,w_1920,f_auto,q_auto:good/${images[currentIndex + 2].public_id}.${images[currentIndex + 2].format}`}
                  alt='cache next2'
                  width={1}
                  height={1}
                  priority={false}
                />
              )}
            </div>

            {currentIndex < images.length - 1 && (
              <button
                onClick={e => {
                  e.stopPropagation()
                  onNavigate(currentIndex + 1)
                }}
                className='absolute right-2 md:right-4 z-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/60 hover:bg-black/80 rounded-full transition-all duration-200 shadow-lg backdrop-blur-sm cursor-pointer'
                aria-label='Next image'
              >
                <svg className='w-6 h-6 md:w-7 md:h-7 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Preview Strip */}
        <div className='w-full px-4 pb-4 md:pb-6'>
          <div
            ref={previewStripRef}
            className='flex gap-2 justify-start overflow-x-auto py-2 px-4 max-w-[90vw] mx-auto scroll-smooth'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => {
              const previewUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_120,h_80,f_auto,q_auto/${image.public_id}.${image.format}`
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
                    relative w-20 h-12 md:w-24 md:h-16 flex-shrink-0 transition-all duration-200 
                    rounded-lg overflow-hidden
                    ${isSelected ? 'opacity-100 ring-2 ring-white scale-110 z-10' : 'opacity-40 hover:opacity-70'}
                  `}
                >
                  <Image src={previewUrl} alt='' fill className='object-cover' sizes='(max-width: 768px) 80px, 96px' />
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
