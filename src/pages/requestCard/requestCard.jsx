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
import RequestCardTable from 'components/tables/requestCardTable';

export default function RequestCardPage({ caption, size, isDashboard = false }) {

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
  ]

  return (
    <Box sx={{ width: 'calc(100vw - 200px)' }} p={6} h='100%'>
        {/* <Avatar src='https://i.pravatar.cc/300' size='lg' />
        <Text ml={4} fontSize='lg' fontWeight='bold'>Abdulrahman Aliyu</Text> */}
        <Text fontSize={20} color='uiBlue' fontWeight='bold' display='flex' flexDirection='coloumn'
         textAlign='center' justifyContent='center'>Card Requests</Text>
      <RequestCardTable transactionData={mockdata} />
    </Box>
  )
}