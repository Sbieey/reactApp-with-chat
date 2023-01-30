import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Button, Center, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export function SignInPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box w='100vw' h='100%'>
      <Box
        w={['80vw', '70vw', '50vw']}
        mt='5%'
        mx='auto'
        borderRadius='12px'
        p={4}
        bg='uiGray'>

        <Box
          width='70%'
          mx='auto'
          my='auto'
          px={2}
          h='70vh'
        >
          <Center mb='10'>
            <Text fontSize={42} color='uiBlue' fontWeight='medium'>Sign in</Text>
          </Center>

          <form id='signInForm'>
            <FormControl mb={12}>
              <FormLabel htmlFor='userId' color='uiBlue'>User ID</FormLabel>
              <Input type='text' id='userId' name='userId' bg='whiteAlpha.900' />
            </FormControl>

            <FormControl mb={10}>
              <FormLabel htmlFor='password' color='uiBlue'>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} id='password' name='password' bg='whiteAlpha.900' />
                <InputRightElement onClick={() => setShowPassword(!showPassword)} children={showPassword ? <ViewOffIcon color="gray.500" /> : <ViewIcon color="gray.500" />} />
              </InputGroup>
              <Box justifyContent='flex-end' width='100%' display='inline-flex' mt={1} color='uiBlue'>
                <Link to='/forgot-password'>
                  <Text fontWeight='medium'>Forgot password?</Text>
                </Link>
              </Box>
            </FormControl>

            <Center>
              <Button
                w="100%"
                isLoading={isSubmitting}
                bg="uiBlue"
                color='whiteAlpha.900'
                type="submit">
                Send
              </Button>
            </Center>
          </form>
        </Box>
      </Box>
    </Box>
  )
}
