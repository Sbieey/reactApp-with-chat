import { Box, Center, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export function TotalClientsCard({ total }) {
  return (
    <Box bg='#2A0C68' color='whiteAlpha.900' w='100%' borderRadius='16px'>
      <Center>
        <Text fontWeight='semibold' my={4}>Number of clients</Text>
      </Center>

      <Center>
        <Heading mb={4}>{total ?? 0}</Heading>
      </Center>
    </Box>
  )
}
