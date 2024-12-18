// components/Gallery/GalleryImage.tsx
import Image from 'next/image'

import type { GalleryImage } from '@/types/imageTypes'

interface Props {
  image: GalleryImage
  onClick: () => void
}

const GalleryForImage = ({ image, onClick }: Props) => {
  const aspectRatio = image.width / image.height
  const url = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_${image.width}/${image.id}.${image.format}`

  return (
    <div
      onClick={onClick}
      className='relative after:content block w-full h-full cursor-pointer group overflow-hidden'
      style={{ aspectRatio: `${aspectRatio}` }}
    >
      <Image
        src={url}
        alt=''
        fill
        style={{ transform: 'translate3d(0, 0, 0)' }}
        className='rounded-lg brightness-90 transition transform will-change-auto group-hover:brightness-110'
        sizes={image.size === 'large' ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
      />
    </div>
  )
}

export default GalleryForImage
