import sharp from 'sharp'

import type { GalleryImage } from '@/types/imageTypes'

const cache = new Map<GalleryImage, string>()

const getBase64ImageUrl = async (image: GalleryImage): Promise<string> => {
  try {
    // Kiểm tra cache
    let url = cache.get(image)

    if (url) {
      return url
    }

    // Fetch ảnh từ Cloudinary
    const response = await fetch(
      `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`
    )

    const buffer = await response.arrayBuffer()

    // Xử lý ảnh với sharp
    const optimizedBuffer = await sharp(Buffer.from(buffer))
      .jpeg({
        quality: 70,
        progressive: true,
        optimizeScans: true
      })
      .resize(8, 8, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .toBuffer()

    // Tạo base64 URL
    url = `data:image/jpeg;base64,${optimizedBuffer.toString('base64')}`

    // Lưu vào cache
    cache.set(image, url)

    return url
  } catch (error) {
    console.error('Error generating blur image:', error)

    // Trả về empty string hoặc placeholder image nếu có lỗi
    return ''
  }
}

export default getBase64ImageUrl
