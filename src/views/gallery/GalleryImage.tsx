// components/Gallery/GalleryImage.tsx
import Image from 'next/image'

import type { GalleryImage } from '@/types/imageTypes'

interface Props {
  image: GalleryImage
  onClick: () => void
}

const GalleryForImage = ({ image, onClick }: Props) => {
  const aspectRatio = image.width / image.height
  const url = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${image.id}.${image.format}`

  return (
    <div
      onClick={onClick}
      className='relative w-full h-full cursor-pointer group overflow-hidden'
      style={{ aspectRatio: `${aspectRatio}` }}
    >
      <Image
        src={url}
        alt=''
        fill
        className='object-cover transition-transform duration-300 group-hover:scale-110'
        sizes={image.size === 'large' ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
      />
      {/* <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
        <div className='p-4 text-white'>
          <h3 className='text-lg font-semibold'>{image.title}</h3>
          {image.description && <p className='text-sm mt-1'>{image.description}</p>}
        </div>
      </div> */}
    </div>
  )
}

export default GalleryForImage
