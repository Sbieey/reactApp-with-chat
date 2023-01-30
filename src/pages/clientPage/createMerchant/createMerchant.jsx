import React, { useState } from 'react';
import { Box, Button, Center, Select, Text } from '@chakra-ui/react';
import IndividualForm from '../forms/individualClient';
import OrganizationForm from '../forms/organizationClient';

const INDIVIDUAL = 'INDIVIDUAL';
const ORGANIZATION = 'ORGANIZATION';

export function CreateClientPage() {

  const [formToDisplay, setFormToDisplay] = useState(INDIVIDUAL)

  return (
    <Box sx={{ width: 'calc(100vw - 220px)' }} pt={4} pl={6} h='100%'>
      <Text fontWeight='bold' paddingLeft={20} mx='auto' mb={3} fontSize='x-large'>Create Merchant</Text>
      <Box w='90%' bg='#e9e9e9' mx='auto' pt={6} pl='50px' borderRadius='md'>
        <Center><Text fontWeight='bold' fontSize='larger' >Merchant Details</Text></Center>
        {
          formToDisplay === INDIVIDUAL ? <IndividualForm /> : <OrganizationForm />
        }
      </Box>
    </Box>
  )
}
