// Component Imports
import LandingPageWrapper from '@views/front-pages/landing-page'

// Server Action Imports
import { getServerMode, getUserLocaleFromCookies } from '@core/utils/serverHelpers'
import type { GalleryImage } from '@/types/imageTypes'
import cloudinary from '@/utils/cloudinary'
import getBase64ImageUrl from '@/utils/generateBlurPlaceholder'

const getImages = async (): Promise<GalleryImage[]> => {
  try {
    const results = await cloudinary.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by('created_at', 'desc')
      .with_field('context')
      .max_results(12)
      .execute()

    const reducedResults: GalleryImage[] = []

    let i: number = 0

    for (const result of results.resources) {
      reducedResults.push({
        id: i,
        height: result.height,
        width: result.width,
        public_id: result.public_id,
        format: result.format
      })
      i++
    }

    const blurImagePromises = results.resources.map((image: GalleryImage) => {
      return getBase64ImageUrl(image)
    })

    const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

    for (let i = 0; i < reducedResults.length; i++) {
      reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
    }

    return reducedResults
  } catch (error) {
    console.error('Error fetching images:', error)

    return []
  }
}

const LandingPage = async () => {
  // Vars
  const mode = getServerMode()
  const locale = getUserLocaleFromCookies()
  const images = await getImages()

  // console.log('locale', locale)

  return <LandingPageWrapper mode={mode} images={images} locale={locale} />
}

export default LandingPage
