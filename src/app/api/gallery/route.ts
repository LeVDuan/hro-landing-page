import type { NextRequest } from 'next/server'

import cloudinary from '@/utils/cloudinary'
import type { GalleryImage } from '@/types/imageTypes'

const generateSimpleBlurDataUrl = (): string => {
  // Light gray blur placeholder that matches typical photo backgrounds
  return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDSBIhTyv/9k='
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '20')
    const cursor = searchParams.get('cursor')
    
    const searchQuery = cloudinary.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by('created_at', 'desc')
      .with_field('context')
      .max_results(limit)

    if (cursor) {
      searchQuery.next_cursor(cursor)
    }
    
    const results = await searchQuery.execute()

    // If no resources, return empty array
    if (!results.resources || results.resources.length === 0) {
      return Response.json([])
    }

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

    return Response.json({
      images: reducedResults,
      nextCursor: results.next_cursor || null,
      hasMore: !!results.next_cursor
    })
  } catch (error) {
    console.error('Error fetching images:', error)

    return Response.json({ images: [], nextCursor: null, hasMore: false })
  }
}