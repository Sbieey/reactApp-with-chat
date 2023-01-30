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
} from '@chakra-ui/react'
import { BsArrowDownLeftCircleFill, BsArrowDownRightCircleFill } from 'react-icons/bs';
import { IoMdAttach } from 'react-icons/io'
import { formatAmount } from 'utils/utils';

const mockdata = [
  {
    name: 'Abdul Musa',
    uniqueId: 23458387515854,
    amount: 123321,
    type: 'credit',
    status: 'successful'
  },
  {
    name: 'Isa Ismail',
    uniqueId: 23458387515854,
    amount: 123987,
    type: 'debit',
    status: 'successful'
  },
  {
    name: 'Angel White',
    uniqueId: 23458387515854,
    amount: 456789,
    type: 'credit',
    status: 'failed'
  },
  {
    name: 'Justine Kelly',
    uniqueId: 23458387515854,
    amount: 987123,
    type: 'credit',
    status: 'successful'
  },
]

export default function TransactionHistoryTable({ caption, size, isDashboard = false, transactionData = mockdata }) {


  const RenderIcon = ({ status }) => status === 'credit' ? <Icon as={BsArrowDownLeftCircleFill
  } color='green.300' w={5} h={5} mr={1} /> : <Icon as={BsArrowDownRightCircleFill} mr={1} color='red.300' w={5} h={5} />

  return (
    <Box w='full'>
      <TableContainer size={size} mt='50px'>
        <Table variant='unstyled'>
        <Text pl={8} pb={5} fontWeight='bold' color='gray'>Today</Text>
          <TableCaption placement='top'>{caption}</TableCaption>
          <Tbody >
            {
              transactionData.length && mockdata.map(data => (
                <Tr>
                  <Td><RenderIcon status={data.type} />{data.name}</Td> 
                  <Td><Text fontSize='xs'>{data.uniqueId}</Text></Td>
                  {/* TODO: Display receipt */}
                  <Td fontWeight='bold' display='flex' flexDirection='row' justifyContent='center'><IoMdAttach color='gray' size='20px' status={data.amount} />{formatAmount(data.amount)}</Td>
                  {!isDashboard && <Td color={data.status === 'successful' ? 'uiGreen' : 'uiRed'}>{data.status}</Td>}
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}