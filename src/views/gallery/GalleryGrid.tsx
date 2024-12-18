// components/Gallery/GalleryGrid.tsx
import { useState } from 'react'

import './styles.module.css'
import type { GalleryImage } from '@/types/imageTypes'
import GalleryImageComponent from './GalleryImage'

interface Props {
  images: GalleryImage[]
}

const GalleryGrid = ({ images }: Props) => {
  const [, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <div className='grid grid-cols-12 gap-4'>
      {images.map(image => {
        // Tính toán số cột dựa vào tỷ lệ width/height của ảnh
        const aspectRatio = image.width / image.height
        let colSpan = 4 // Default size
        let rowSpan = 1

        // Xác định kích thước dựa vào aspect ratio
        if (aspectRatio > 1.5) {
          colSpan = 8 // Ảnh ngang
        } else if (aspectRatio < 0.8) {
          colSpan = 4 // Ảnh dọc
          rowSpan = 2
        }

        // Hoặc dựa vào thuộc tính size
        if (image.size === 'large') {
          colSpan = 8
        } else if (image.size === 'small') {
          colSpan = 4
        }

        return (
          <div
            key={image.id}
            className={`col-span-${colSpan} row-span-${rowSpan}`}
            style={{
              gridColumn: `span ${colSpan}`,
              gridRow: `span ${rowSpan}`
            }}
          >
            <GalleryImageComponent image={image} onClick={() => setSelectedImage(image)} />
          </div>
        )
      })}
    </div>
  )
}

export default GalleryGrid
