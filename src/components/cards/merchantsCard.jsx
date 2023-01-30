import { Avatar, Box, Center, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export function MerchantsListCard() {
  return (
    <Box
    //border='2px solid blue'
    borderRadius='10px'
    p={4}
    bg='pale'
    display='flex'
    flexDirection='column'
    gap={2}
    >
      <Center><Text fontSize='1.2rem' fontWeight='semibold'>Merchants</Text></Center>
      <ClientInfo 
      image='https://bit.ly/code-beast' 
    
      fullName='steve jobs' />
      <ClientInfo 
      image='https://i.pravatar.cc/300' 
      fullName='melinda gates'/>
      <ClientInfo 
      image='https://bit.ly/prosper-baba' 
      fullName='prosper otemuyiwa' />


    {/* <Box display='flex' justifyContent='flex-end'>
      <Text color='uiBlue' justifySelf='flex-end' cursor='pointer'>See all</Text>
    </Box> */}
    </Box>
  )
}

const ClientInfo = ({ image, fullName, uniqueId }) => {
 return (
   <Box display='flex' gap={3}>
      <Avatar size='sm' src={image}  cursor='pointer'/>
      <Box display='flex' flexDir='column'>
        <Text fontWeight='bold' fontSize='sm'  cursor='pointer' _hover={{ textDecoration: 'underline' }} casing='capitalize'>{fullName}</Text>
        <Text fontSize='xs'>{uniqueId}</Text>
      </Box>
   </Box>
 )
}
