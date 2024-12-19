// components/Gallery/GalleryIntro.tsx với nhiều tùy chỉnh hơn
import Image from 'next/image'

const GalleryIntro = () => {
  return (
    <div className='aspect-[3/4] w-full h-full rounded-lg overflow-hidden relative'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-red-800 to-red-950' />

      {/* Optional: Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <Image
          src='/logos/logo.png' // Thêm pattern nếu có
          alt=''
          fill
          className='object-cover'
        />
      </div>

      {/* Content */}
      <div className='relative h-full p-6 flex flex-col justify-between'>
        <div>
          {/* Logo */}
          <div className='w-16 h-16 mb-6'>
            <Image src='/logos/logo.png' alt='Red Owls Logo' width={64} height={64} className='object-contain' />
          </div>

          {/* Text Content */}
          <h2 className='text-3xl font-bold text-white mb-4'>Our Gallery</h2>
          <p className='text-white/90 text-lg leading-relaxed'>
            Những khoảnh khắc đáng nhớ của CLB Red Owls qua từng sự kiện và hoạt động
          </p>
        </div>

        {/* Footer */}
        <div className='mt-auto'>
          <div className='flex items-center gap-2 text-white/80'>
            <span className='w-8 h-1 bg-white/30 rounded-full' />
            <p className='text-sm font-medium'>© 2023 Red Owls Club</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryIntro
