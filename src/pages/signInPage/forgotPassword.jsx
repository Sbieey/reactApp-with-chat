import { Box, Button, Center, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function ForgotPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Box w='100vw' h='100%'>
      <Box
        w={['80%', '70%', '50%']}
        m='100px auto'
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
            <Text fontSize={42} color='uiBlue' fontWeight='medium'>Forgotten password</Text>
          </Center>

          <form id='signInForm'>
            <FormControl my={24}>
              <FormLabel htmlFor='userId' color='uiBlue'>Enter email used to register</FormLabel>
              <Input type='email' id='email' name='email' bg='whiteAlpha.900' />
            </FormControl>

            <Center>
              <Button
                w="100%"
                isLoading={isSubmitting}
                bg="uiBlue"
                color='whiteAlpha.900'
                type="submit">
                Forgot password
              </Button>
            </Center>
          </form>
        </Box>
      </Box>
    </Box>
  )
}
