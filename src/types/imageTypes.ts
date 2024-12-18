export interface GalleryImage {
  id: string
  src: string
  width: number
  height: number
  format: string
  size?: 'small' | 'medium' | 'large'
}
