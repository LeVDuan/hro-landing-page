// React Imports
import { useState } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'

const DialogsCustomized = () => {
  // States
  const [open, setOpen] = useState<boolean>(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
        <img
          src='/images/front-pages/landing-page/nationalCup2023.png'
          alt='early-stage-image'
          className='max-is-[550px] is-full rounded-xl'
        />
      </Dialog>
    </>
  )
}

export default DialogsCustomized
