import {
  Box,
  Icon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Center,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Avatar,
  Heading,
} from '@chakra-ui/react'
import { BsArrowDownLeftCircleFill, BsArrowDownRightCircleFill } from 'react-icons/bs';
import { formatAmount } from 'utils/utils';
import { FiEdit } from 'react-icons/fi';
import { Link } from "react-router-dom";

const mockdata = [
  {
    No: '1.',
    name: 'AARano',
    commision: '1%',
    date: '22/03/2022',
    commision: '1%',
    clients:'178',
  },
]

export default function CommisionsTable({ caption, size, isDashboard = false, transactionData = mockdata }) {


  const RenderDot = ({ status }) => (<Box h='10px' display='inline-block' mx={1} w='10px' bg={status === 'ready' ? 'uiGreen' : 'uiRed'} borderRadius='full'></Box>);

  return (
    <Box w='full'>
      <TableContainer size={size}>
      <Text pt={10} fontSize={20} fontWeight='bold' display='flex' flexDirection='coloumn' textAlign='center' justifyContent='center'>Merchants List</Text>
        <Table size='sm' variant='striped'>
          <TableCaption placement='top'>{caption}</TableCaption>
          <Thead>
            <Tr fontWeight={30}>
              {/* <Th></Th> */}
              <Th>No.</Th>
              <Th fontWeight='bold'>Organisation Name</Th>
              <Th>Commision</Th>
              <Th>No of clients</Th>
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
                  <Td><Text casing='capitalize' fontWeight='bold'>{data.commision}</Text></Td>
                  <Td fontWeight='normal'>{data.clients}</Td>

                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box >
  )
}