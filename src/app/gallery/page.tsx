import cloudinary from '@/utils/cloudinary'
import Gallery from '@views/gallery/index'
import type { GalleryImage } from '@/types/imageTypes'
import { getEventImageUrl, getUserLocaleFromCookies } from '@core/utils/serverHelpers'

const getImages = async (limit = 20): Promise<GalleryImage[]> => {
  try {
    const results = await cloudinary.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by('created_at', 'desc')
      .with_field('context')
      .max_results(limit)
      .execute()

    const reducedResults: GalleryImage[] = []

    for (const result of results.resources) {
      reducedResults.push({
        id: result.public_id, // Use public_id as unique identifier
        height: result.height,
        width: result.width,
        public_id: result.public_id,
        format: result.format,
        blurDataUrl: generateSimpleBlurDataUrl()
      })
    }

    return reducedResults
  } catch (error) {
    console.error('Error fetching images:', error)

    return []
  }
}

const generateSimpleBlurDataUrl = (): string => {
  // Light neutral blur that works well with photos
  return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDSBIhTyv/9k='
}

export default async function GalleryPage() {
  const images = await getImages()
  const locale = getUserLocaleFromCookies()
  const logoURL = getEventImageUrl()

  return (
    <Gallery images={images} locale={locale} logoURL={logoURL} showSnowfall={logoURL === '/logos/LogoXmas.png'} />
  )
}
