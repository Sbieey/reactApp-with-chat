import {
  Box,
  Icon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Avatar,
  HStack,
  Center,
  Tag,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { BsArrowDownLeftCircleFill, BsArrowDownRightCircleFill } from 'react-icons/bs';
import { formatAmount } from 'utils/utils';
import TransactionHistoryTable from 'components/tables/transactionHistory';
import { CalendarIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export function UserTransactionHistory({ caption, size, isDashboard = false }) {

  const mockdata = [
    {
      name: 'Abdul Musa',
      uniqueId: 23458387515854,
      amount: 123321,
      type: 'credit',
      status: 'successful'
    },
    {
      name: 'Abdul Musa',
      uniqueId: 23458387515854,
      amount: 123987,
      type: 'debit',
      status: 'successful'
    },
    {
      name: 'Abdul Musa',
      uniqueId: 23458387515854,
      amount: 456789,
      type: 'credit',
      status: 'failed'
    },
    {
      name: 'Abdul Musa',
      uniqueId: 23458387515854,
      amount: 987123,
      type: 'credit',
      status: 'successful'
    },
  ]

  return (
    <Box sx={{ width: 'calc(100vw - 200px)' }} p={6} h='100%'>
      <HStack>
        <Avatar src='https://i.pravatar.cc/300' size='2xl' />
        <Text ml={4} fontSize='2xl' fontWeight='bold'>Abdulrahman Aliyu</Text>
        <Center><Text ml='6.25rem'>Transactin History</Text></Center>
      </HStack>

      <Box w='full' display='flex' my={2} justifyContent='center'><Tag><CalendarIcon mr={4} /> February</Tag></Box>
      <Box w='full' px={6} display='flex' justifyContent='space-between' alignItems='center'>
        <Box>
          <Text fontWeight='bold'>
            <span style={{ color: 'gray' }}>Showing</span> 1-20 {' '}
            <span style={{ color: 'gray' }}>of</span> 100
          </Text>
        </Box>
        <Box w='14rem' justifyContent='space-between' display='flex'>
          <Text cursor='pointer'><ChevronLeftIcon />Previous</Text>
          <Text>1</Text>
          <Text cursor='pointer'>Next <ChevronRightIcon /></Text>
        </Box>
        <Box>
          <Menu size='xs'>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
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

      <TransactionHistoryTable transactionData={mockdata} />
    </Box>
  )
}