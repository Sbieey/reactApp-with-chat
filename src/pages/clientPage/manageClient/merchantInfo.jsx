import React from 'react';
import { Avatar, Box, Button, Center, HStack, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockdata } from '../clientPage.utils';
import { formatAmount } from 'utils/utils';

export function MerchantInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = mockdata.find(obj => obj.key === id);


  return (
    <Box sx={{ width: 'calc(100vw - 200px)' }} border='2px solid blue' h='100%'>
      <Center><Text fontSize='xl' my={5} fontWeight='semibold'>Client Information</Text></Center>
      <Box bg='pale' w='90%' borderRadius='md' mx='auto' display='flex' p={6} gap={4}>
        <Box id='box-1'>
          <Avatar size='2xl' src='https://i.pravatar.cc/300' name={user.name} />
        </Box>
        <Box id='box-2' mr='100px'>
          <Text mb={2} fontSize='3xl' fontWeight='semibold'>{user.name}</Text>
          <Text fontWeight='semibold'>Status:<span style={{ marginLeft: '10px', color: user.status === 'Active' ? 'green' : 'red' }}>{user.status}</span></Text>

          <Text my={4} fontWeight='semibold'>Phone: {user.phone}</Text>
          <Text my={4} fontWeight='semibold'>Contact email: <span style={{ marginLeft: '10px', color: 'blue' }}>{user.email}</span></Text>
          <Text my={4} fontWeight='semibold'>Address: {user.address}</Text>

        </Box>
        <Box id='box-3' position='relative'>
          <Text fontWeight="">Balance: <span style={{ fontSize: '28px' }}>{formatAmount(134432)}</span></Text>
          <Text my={4} fontWeight='semibold'>Card number: N/A</Text>
          <Text my={4} fontWeight='semibold'>Daily transaction limit: N/A</Text>
          <Text my={4} fontWeight='semibold'>Monthly transaction: N/A</Text>
          <Box id='edit-btn-container' position='absolute' left='12rem'>
            <Button
              color='uiBlue'
              variant='primaryOutline'
              px={16}
            >
              Edit
              </Button>
          </Box>
        </Box>
      </Box>
      <Box w='90%' mx='auto' display='flex' justifyContent='space-between' my={4}>
        <Text onClick={() => navigate('/user-transaction/123')} fontWeight='semibold' color='uiBlue' cursor='pointer'>See full transaction history</Text>
        <Text onClick={() => navigate('/funding-log/123')} fontWeight='semibold' color='uiBlue'cursor='pointer'>Funding log</Text>
      </Box>
      <Center>
        <HStack my={6} spacing='7rem'>
          <Button variant='primary'>Deactivate client</Button>
          <Button colorScheme='green'>Request card</Button>
          <Button colorScheme='blue'>Set transaction limit</Button>
        </HStack>
      </Center>

    </Box>
  )
}
