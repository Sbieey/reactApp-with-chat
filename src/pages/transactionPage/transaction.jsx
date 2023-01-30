import React from 'react';
import { Box, Button, Center, Menu, MenuButton, MenuItem, MenuList, Tag, Text } from '@chakra-ui/react';
import TransactionHistoryTable from 'components/tables/transactionHistory';
import { CalendarIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export default function TransactionPage() {
  return (
    <Box sx={{ width: 'calc(90vw - 40px)' }} h='100%'>
      <Center><Text fontSize={20} fontWeight='bold' mt={5} >Transaction History</Text></Center>
        <Box w='full' display='flex' my={4} justifyContent='center'><Tag padding={3}><CalendarIcon mr={4}/> February</Tag></Box>
      <Box w='full' px={6} display='flex' justifyContent='space-between' alignItems='center'>
        <Box>
          <Text fontWeight='bold'>
            <span style={{color: 'gray'}}>Showing</span> 1-20 {' '}
            <span style={{color: 'gray'}}>of</span> 100
          </Text>
        </Box>
        <Box w='14rem' justifyContent='space-between' display='flex'>
          <Text cursor='pointer'><ChevronLeftIcon />Previous</Text>
          <Text>1</Text>
          <Text cursor='pointer'>Next <ChevronRightIcon /></Text>
        </Box>
        <Box>
          <Menu size='xs'>
            <MenuButton as={Button} pr="20px" rightIcon={<ChevronDownIcon />}>
              Sort by
            </MenuButton>
            <MenuList>
              <MenuItem>Date</MenuItem>
              <MenuItem>Type</MenuItem>
              <MenuItem>Status</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      
      <TransactionHistoryTable size='md' />
    </Box>
  )
}
