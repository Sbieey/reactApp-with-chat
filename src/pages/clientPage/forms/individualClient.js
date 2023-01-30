import { Box, Button, Center, Checkbox, FormControl, FormLabel, HStack, Icon, Input, Select, Text, useToast } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { FaCamera } from 'react-icons/fa';

export default function OrganizationForm() {
  const [checkedItems, setCheckedItems] = useState([false, false, false, false])
  const toast = useToast();
  const imagePicker = useRef();

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const handleChangeProfile = (e) => {
    console.log(e.target.value);
  }

  const handleCreateAccount = (e) => {
    e.preventDefault();

    toast({
      position: "top",
      title: "Account created successfully",
      status: "success",
      isClosable: true,
    })
  }
  return (
    <Box mt={4} w='full'>
      <form onSubmit={handleCreateAccount}>
        <Box w='full' display='flex' justifyContent='space-around'>
          {/* Column 1 */}
          <Box id='column-1' w='40%'>
          <Text fontWeight='bold' paddingBottom={10} fontSize='larger'>Upload company logo</Text>

            <Box display='flex' cursor='pointer' onClick={() => imagePicker.current.click()} alignItems='center' justifyContent='center' w='70px' h='70px' borderRadius='full' mb={3} bg='whiteAlpha.900'>
              <Icon as={FaCamera} w={7} h={7} color='pale' />
            </Box>
            <input type="file" ref={imagePicker} padding={7} onChange={handleChangeProfile} style={{ display: "none" }} accept="image/png, image/jpg" />

            <FormControl mb={3}>
              <FormLabel htmlFor='customerName' fontSize='sm' color='blackAlpha.900'>Organisation name</FormLabel>
              <Input type='text' size='sm' padding={7} id='organisationName' borderRadius='lg' name='organisationName' bg='whiteAlpha.900' />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor='contactEmail' fontSize='sm' color='blackAlpha.900'>Address of organisation</FormLabel>
              <Input type='text' borderRadius='lg' padding={7} size='sm' id='organiationEmail' name='organisationAddress' bg='whiteAlpha.900' />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel htmlFor='address' fontSize='sm' color='blackAlpha.900'>Telphone number</FormLabel>
              <Input type='text' padding={7} borderRadius='lg' size='sm' id='telNumber' name='telNumber' bg='whiteAlpha.900' />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor='phone' fontSize='sm' color='blackAlpha.900'>Contact email</FormLabel>
              <Input type='text' size='sm' padding={7} borderRadius='lg' id='phone' name='email' bg='whiteAlpha.900' />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor='phone' fontSize='sm' color='blackAlpha.900'>Nature of business</FormLabel>
              <Input type='text' padding={7} size='sm' borderRadius='lg' id='phone' name='natureBusiness' bg='whiteAlpha.900' />
            </FormControl>
          </Box>
          {/* Column 2 */}
          <Box id='column-2' w='40%'>

          <FormControl mb={3} paddingTop={20} marginTop={14}>
              <FormLabel htmlFor='creditLimit' fontSize='sm' color='blackAlpha.900'>Number of stations</FormLabel>
              <Input type='text' size='sm' padding={7} borderRadius='lg' id='creditLimit' name='stationNumber' bg='whiteAlpha.900' width={180} />
            </FormControl>

          <FormControl mb={3} >
              <FormLabel htmlFor='creditLimit' fontSize='sm' color='blackAlpha.900'>Number of terminals required</FormLabel>
              <Input type='text' size='sm' padding={7} borderRadius='lg' id='creditLimit' name='terminalNumRequired' bg='whiteAlpha.900' width={220}  />
            </FormControl>

          <FormControl mb={3} >
              <FormLabel htmlFor='creditLimit' fontSize='sm' color='blackAlpha.900'>Point of card collection</FormLabel>
              <Input type='text' size='sm' padding={7} borderRadius='lg' id='creditLimit' name='card' bg='whiteAlpha.900' />
            </FormControl>

            <FormControl mb={3} >
              <FormLabel htmlFor='creditLimit' fontSize='sm' color='blackAlpha.900'>Bank name</FormLabel>
              <Input type='text' size='sm' padding={7} borderRadius='lg' id='creditLimit' name='bankName' bg='whiteAlpha.900' />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor='creditTenure' fontSize='sm' color='blackAlpha.900'>Bank account number</FormLabel>
              <Input type='text' size='lg' padding={7} borderRadius='lg' id='creditTenure' name='bankAcctNo' bg='whiteAlpha.900' />
            </FormControl>

          </Box>
        </Box>
        <Center>
          <Button type='submit' padding='20px' width='400px' variant='secondary' my={4}>
            Create account
          </Button>
        </Center>
      </form>
    </Box>
  )
}
