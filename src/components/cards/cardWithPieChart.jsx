import { Box, Text } from '@chakra-ui/react'
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export function CardWithPieChart({ title, count, total }) {
  const data = [
  { title: 'One', value: count, color: '#194AB9' },
  { title: 'Two', value: total, color: '#D9D9D9' },
];

  return (
    <Box display='flex' shadow='md' h='70px' alignItems='center' bg='pale' p={2} borderRadius='10px' w='fit-content' >
      <Box>
        <Text fontWeight='bold'>{title}</Text>
        <Text fontWeight='bold'>{count}{' '}<span style={{color: '#BBBABB'}}>out of</span>{' '}{total}</Text>
      </Box>
      <Box w='50px' position='relative' >
        <PieChart 
          data={data} 
          lineWidth={50} 
          startAngle={270} 
          animate={true} 
          radius={25} 
          center={[32, 35]}
          viewBoxSize={[60, 70]} 
          />
      </Box>
    </Box>
  )
}
