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
            
            <Box display='flex' cursor='pointer' onClick={() => imagePicker.current.click()} alignItems='center' justifyContent='center' w='70px' h='70px' borderRadius='full' mb={3} bg='whiteAlpha.900'>
              <Icon as={FaCamera} w={7} h={7} color='pale' />
            </Box>
            <input type="file" ref={imagePicker} onChange={handleChangeProfile} style={{ display: "none" }} accept="image/png, image/jpg" />

            <FormControl mb={3}>
              <FormLabel htmlFor='customerName' fontSize='sm' color='blackAlpha.900'>Customer Name</FormLabel>
              <Input type='text' size='sm' id='customerName' borderRadius='lg' name='customerName' bg='whiteAlpha.900' />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor='businessType' fontSize='sm' color='blackAlpha.900'>Business type</FormLabel>
              <Select name='businessType' bg='whiteAlpha.900'>
                <option value='Manufacturing'>Manufacturing</option>
                <option value='Oil & gas'>Oil & gas</option>
                <option value='Real estate'>Real estate</option>
              </Select>
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor='contactPerson' fontSize='sm' color='blackAlpha.900'>Contact Person</FormLabel>
              <Input type='text' size='sm' id='contactPerson' borderRadius='lg' name='contactPerson' bg='whiteAlpha.900' />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor='phone' fontSize='sm' color='blackAlpha.900'>Phone</FormLabel>
              <Input type='text' size='sm' id='phone' name='phone' bg='whiteAlpha.900' />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel htmlFor='contactEmail' fontSize='sm' color='blackAlpha.900'>Contact Email</FormLabel>
              <Input type='text' size='sm' id='contactEmail' borderRadius='lg' name='contactEmail' bg='whiteAlpha.900' />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel htmlFor='address' fontSize='sm' color='blackAlpha.900'>Street address</FormLabel>
              <Input type='text' size='sm' id='address' borderRadius='lg' name='address' bg='whiteAlpha.900' />
            </FormControl>
          </Box>
          {/* Column 2 */}
          <Box id='column-2' w='40%'>
            <FormControl mb={3}>
              <FormLabel htmlFor='city' fontSize='sm' color='blackAlpha.900'>City</FormLabel>
              <Input type='text' size='sm' id='city' borderRadius='lg' name='city' bg='whiteAlpha.900' />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor='state' fontSize='sm' color='blackAlpha.900'>State</FormLabel>
              <Input type='text' size='sm' id='state' borderRadius='lg' name='state' bg='whiteAlpha.900' />
            </FormControl>

            <Text fontSize='sm' mb={3}>Product type</Text>
            <Checkbox
              isChecked={allChecked}
              mb={4}
              isIndeterminate={isIndeterminate}
              onChange={(e) => setCheckedItems([e.target.checked, e.target.checked, e.target.checked, e.target.checked])}
            >
              Select all
            </Checkbox>
            <HStack mb={4}>
              <Checkbox
                iconColor='whiteAlpha.900'
                isChecked={checkedItems[0]}
                onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1], checkedItems[2], checkedItems[3]])}
              >
                PMS
              </Checkbox>
              <Checkbox
                isChecked={checkedItems[1]}
                onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked, checkedItems[2], checkedItems[3]])}
              >
                AGO
              </Checkbox>
              <Checkbox
                isChecked={checkedItems[2]}
                onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], e.target.checked, checkedItems[3]])}
              >
                DPK
              </Checkbox>
              <Checkbox
                isChecked={checkedItems[3]}
                onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], e.target.checked])}
              >
                LPG
              </Checkbox>
            </HStack>

            <FormControl mb={3}>
              <FormLabel htmlFor='creditLimit' fontSize='sm' color='blackAlpha.900'>Credit limit</FormLabel>
              <Input type='text' size='sm' id='creditLimit' borderRadius='lg' name='creditLimit' bg='whiteAlpha.900' />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor='creditTenure' fontSize='sm' color='blackAlpha.900'>Credit tenure</FormLabel>
              <Input type='text' size='sm' id='creditTenure' borderRadius='lg' name='creditTenure' bg='whiteAlpha.900' />
            </FormControl>

          </Box>
        </Box>
        <Center>
          <Button type='submit' variant='primary' my={4}>
            Create Account
          </Button>
        </Center>
      </form>
    </Box>
  )
}
