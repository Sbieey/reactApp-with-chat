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
import { formatAmount } from 'utils/utils';
import { FiEdit } from 'react-icons/fi';

const mockdata = [
  {
    No: '1.',
    name: 'AARano',
    commision: '1%',
    date: '22/03/2022',
    status: '1%',
    edit:'Edit',
  },
]

export default function CommisionsTable({ caption, size, isDashboard = false, transactionData = mockdata }) {


  const RenderDot = ({ status }) => (<Box h='10px' display='inline-block' mx={1} w='10px' bg={status === 'ready' ? 'uiGreen' : 'uiRed'} borderRadius='full'></Box>);

  return (
    <Box w='full'>
      <TableContainer size={size}>
        <Table size='sm' variant='striped'>
          <TableCaption placement='top'>{caption}</TableCaption>
          <Thead>
            <Tr>
              {/* <Th></Th> */}
              <Th>No.</Th>
              <Th>Organisation Name</Th>
              <Th>Commision</Th>
              <Th>Last Modified</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              transactionData.length && mockdata.map(data => (
                <Tr>
                  {/* <Td></Td> */}
                  <Td>1.</Td>
                  <Td  display='flex' flexDirection='row' alignItems='center' justifyContent='left'><Avatar src='https://i.pravatar.cc/300'
                   size='md' ml={5} /><Text ml={4} fontWeight='bold'>{data.name}</Text> </Td>
                  <Td><Text casing='capitalize' fontWeight='bold'>{data.status}</Text></Td>
                  <Td fontWeight='normal'>{data.date}</Td>
                  <Td color='uiBlue'><FiEdit size='30px' /></Td>

                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box >
  )
}