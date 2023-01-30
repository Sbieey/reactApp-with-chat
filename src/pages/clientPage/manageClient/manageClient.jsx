import { Box } from '@chakra-ui/react'
import React from 'react'
import ClientListPage from './merchantListPage'

export function ManageClientPage() {
  return (
    <Box sx={{ width: 'calc(100vw - 200px)' }} h='100%'>
      <ClientListPage />
    </Box>
  )
}
