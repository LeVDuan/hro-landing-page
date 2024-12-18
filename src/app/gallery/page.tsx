// app/gallery/page.tsx
import { v2 as cloudinary } from 'cloudinary'

import Gallery from '@views/gallery/index'
import type { GalleryImage } from '@/types/imageTypes'

const getImages = async (): Promise<GalleryImage[]> => {
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  })

  try {
    const result = await cloudinary.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by('created_at', 'desc')
      .with_field('context')
      .max_results(200)
      .execute()

    return result.resources.map((photo: any) => {
      const aspectRatio = photo.width / photo.height
      let size: 'small' | 'medium' | 'large' = 'medium'

      if (aspectRatio > 1.5) {
        size = 'large'
      } else if (aspectRatio < 0.8) {
        size = 'small'
      }

      return {
        id: photo.public_id,
        src: photo.secure_url,
        width: photo.width,
        height: photo.height,
        format: photo.format,
        size
      }
    })
  } catch (error) {
    console.error('Error fetching images:', error)

    return []
  }
}

export default async function GalleryPage() {
  const images = await getImages()

  return <Gallery images={images} />
}
