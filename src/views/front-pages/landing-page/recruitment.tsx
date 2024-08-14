// React Imports
import { useState } from 'react'

import Link from 'next/link'

// MUI Imports

import Dialog from '@mui/material/Dialog'

const Recruitment = () => {
  // States

  const dashboardImage = '/landing-page/recruitment.png'

  const recruimentLink =
    'https://www.facebook.com/HUSTRedOwlsBaseballTeam/posts/pfbid02nYKu2gD9e1yL9YWv74FpKXFpzLs3SF4yaSNCvYXumcEgdUedF2qt8C8hqSRyGByZl'

  const [open, setOpen] = useState<boolean>(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
        <Link href={recruimentLink} target='_blank'>
          <img src={dashboardImage} alt='Bottom Image' className='max-w-full max-h-[570px] ' />
        </Link>
      </Dialog>
    </>
  )
}

export default Recruitment
