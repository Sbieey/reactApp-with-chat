import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { formatAmount } from 'utils/utils'

export function MoneyInCard({ title, type, amount }) {

  const color = {
    company: 'uiGreen',
    commision: 'uiBlue',
    transaction: 'uiOrange'
  }

  return (
    <Box 
    bg={color[type]} borderRadius='15px' color='whiteAlpha.900' w='100%' display='flex' p={4} flexDirection='column' minH='4rem' alignItems='center' justifyContent='space-between'>
        <Text padding={2} fontWeight='semibold' fontSize='sm' mb='-10px' casing='capitalize'>{title}</Text>
        <Text fontWeight='bold' fontSize='lg'>{formatAmount(amount)}</Text>
    </Box>
  )
}
