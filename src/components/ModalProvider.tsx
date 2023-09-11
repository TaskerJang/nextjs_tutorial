'use client'

import { Box, Modal, Typography } from '@mui/material'
import { createContext, useContext, useState } from 'react'

export const ModalContext = createContext(null)

interface Modal {
  open: boolean
}

export const ExampleModal = ({ open, onClose }) => {
  // const { modal, open, close } = useContext(ModalContext)
  return (
    <Modal
      open={open}
      onClose={() => {
        onClose()
      }}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          pt: 2,
          px: 4,
          pb: 3,
        }}
      >
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Text in a modal
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  )
}

export default function ModalProvider({ children }) {
  const [modal, setModal] = useState<Modal>({ open: false })

  return (
    <ModalContext.Provider
      value={{
        modal,
        open: () => {
          setModal({ open: true })
        },
        close: () => {
          setModal({ open: false })
        },
      }}
    >
      {children}
      <ExampleModal
        open={modal.open}
        onClose={() => {
          setModal({ open: false })
        }}
      />
    </ModalContext.Provider>
  )
}
