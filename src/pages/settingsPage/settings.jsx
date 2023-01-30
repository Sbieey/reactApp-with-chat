import { useRef, useState } from 'react'
import { Avatar, Box, Button, FormControl, FormLabel, HStack, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { THEME_COLOR } from 'utils/constants';

export default function Settings() {
  const inputRef = useRef();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const handleSavePassword = (e) => {
    e.preventDefault();

    inputRef.current.value = '';

    toast({
      position: "top",
      title: "Password saved",
      status: "success",
      isClosable: true,
    })
  }

  return (
    <Box sx={{ width: 'calc(100vw - 200px)' }} h='100%' display='flex' flexDirection='column' border='3px solid purple'>
      <Text pl={6} fontSize='24px' mb='12px' fontWeight='semibold'>Settings</Text>
      {/* UPDATE AVATAR */}
      <Box w='55%' mb='50px' pl={12}>
        <Text>Change profile</Text>
        <Avatar src='https://bit.ly/dan-abramov' size='2xl'/>
      </Box>

      {/** CHANGE PASSWORD */}
      <Box w='55%' mb='70px' pl={12}>
        <form onSubmit={handleSavePassword}>
          <FormControl mb={4}>
            <FormLabel htmlFor='password' color='uiBlue'>Change password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} id='password' name='password' bg='whiteAlpha.900' ref={inputRef} />
              <InputRightElement onClick={() => setShowPassword(!showPassword)} children={showPassword ? <ViewOffIcon color="gray.500" /> : <ViewIcon color="gray.500" />} />
            </InputGroup>
          </FormControl>
          <Button type='submit' variant='primary'>
            Save
          </Button>
        </form>
      </Box>

      {/** SET THEME COLOR */}
      <Box w='55%' mb={4} pl={12}>
        <Text>Theme</Text>
        <Text>Set App Color</Text>

        {/* TODO: onclick change theme color logic */}
        <HStack>
          <ColorCard color={THEME_COLOR.red} />
          <ColorCard color={THEME_COLOR.blue} />
          <ColorCard color={THEME_COLOR.yellow} />
          <ColorCard color={THEME_COLOR.purple} />
        </HStack>
      </Box>
    </Box>
  )
}

const ColorCard = ({ color }) => {
  return (
    <Box bg={color} h='60px' w='60px' borderRadius='8px'></Box>
  )
}


