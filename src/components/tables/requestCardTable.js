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
} from '@chakra-ui/react'
import { BsArrowDownLeftCircleFill, BsArrowDownRightCircleFill } from 'react-icons/bs';
import {GrAdd} from 'react-icons/gr';
import { formatAmount } from 'utils/utils';

const mockdata = [
  {
    no:'1',
    name: 'Abdulrahman Aliyu',
    date: '22/03/2022',
    merchant: 'AARano',
    add: 'Add'
  },
  {
    no:'2',
    name: 'Nuhu Kasim',
    date: '22/03/2022',
    merchant: 'Total',
    add: 'Add'
  },
  // {
  //   name: 'Angel White',
  //   cardNumber: 23458387515854,
  //   date: '22/03/2022',
  //   status: 'ready'
  // },
  // {
  //   name: 'Justine Kelly',
  //   cardNumber: 'N/A',
  //   date: '22/03/2022',
  //   status: 'pending'
  // },
]

export default function RequestCardTable({ caption, size, isDashboard = false, transactionData = mockdata }) {

  return (
    <Box w='full'>
      <TableContainer size={size}>
        <Table size='sm' variant='striped'>
          <TableCaption placement='top'>{caption}</TableCaption>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Name</Th>
              <Th>Date requested</Th>
              <Th>Merchant</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              transactionData.length && mockdata.map(data => (
                <Tr>
                  <Td>{data.no}</Td>
                  <Td><Avatar src='https://i.pravatar.cc/300' size='md' />{data.name}</Td>
                  <Td><Text casing='capitalize'>{data.date}</Text></Td>
                  <Td fontWeight='normal'>{data.merchant}</Td>
                  <Td  flexDirection='row' justifyContents='center' alignItems='center' color='uiBlue' > <GrAdd size='30' color='uiBlue'status={data.add} /></Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box >
  )
}