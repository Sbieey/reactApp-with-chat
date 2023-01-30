import React from 'react'
import { Box, Center, Icon, Text } from '@chakra-ui/react';
import { HiLocationMarker } from 'react-icons/hi';
import ShortUniqueId from 'short-unique-id';

export function TerminalsCard({ data }) {
  const uid = new ShortUniqueId({ length: 3 });
  return (
    <Box
    borderRadius='10px'
    bg='pale'
    p={2}
    >
      <Center><Text fontSize='1.2rem' fontWeight='semibold'>Terminals</Text></Center><br></br>
      {data.length && data.map( terminal => (<TerminalChip key={uid()} tName={terminal} />))}
    </Box>
  )
}

const TerminalChip = ({ tName }) => {
  return (
    <Box display='flex' gap={2} mb={1}>
      <Icon as={HiLocationMarker} />
      <Text fontSize='.8rem' casing='capitalize' fontWeight='semibold'>{tName}</Text>
    </Box>
  )
}
