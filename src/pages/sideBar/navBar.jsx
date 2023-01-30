import { Avatar, Box, HStack, Text, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdLogout } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { AUTH_ROUTES } from 'utils/constants';

export function NavBar({ themeColor }) {
  const { pathname } = useLocation();
  const [shouldDisplay, setShouldDisplay] = useState(true);
  const toast = useToast();

  const performLogout = () => {
    return toast({
      position: "top",
      title: "Logout successful",
      status: "info",
      isClosable: true,
    })
  }



  useEffect(() => {
    if (AUTH_ROUTES.includes(pathname)) {
      setShouldDisplay(false);
    }
  }, [pathname])

  return (
    
      <Box bg={themeColor}
        h='80px'
        w='100%'
        py='4'
        px='6'>
        {shouldDisplay && (<Box justifyContent='flex-end' alignItems='center' width='100%' display='flex'>
          <Avatar src='https://bit.ly/dan-abramov' />
          <Text ml={4} color='whiteAlpha.900' fontWeight='medium'>AA RANO</Text>

          <HStack ml={8} sx={{ cursor: 'pointer' }} onClick={() => performLogout()} color='whiteAlpha.900'>
            <Text fontWeight='medium'>Logout</Text>
            <MdLogout />
          </HStack>
        </Box>)}
      </Box>
    
  )
}
