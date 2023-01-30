import { Box, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsPeople } from "react-icons/bs";
import { VscTriangleDown, VscTriangleRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

export const CustomLinkWithSubMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        bg='secondary'
        display='flex'
        h='57px'
        cursor='pointer'
        alignItems='center'
        justifyContent='flex-start'
        _hover={{ bg: 'uiGray', color: '#3C0101' }}
        color='whiteAlpha.900'
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon as={BsPeople} mx={3} w={5} h={5} />
        <Text fontSize='md' fontWeight='semibold'>Merchants</Text>
        <Icon
          as={isOpen ? VscTriangleDown : VscTriangleRight}
          sx={{ position: 'relative', left: '25%' }} />
      </Box>
      {isOpen && (
        <>
          <Link to='/create-client'>
            <Box bg='secondary'
              display='flex'
              h='57px'
              alignItems='center'
              justifyContent='flex-start'
              _hover={{ bg: 'uiGray', color: '#3C0101' }}
              color='whiteAlpha.900'>
              <Icon visibility='hidden' as={BsPeople} mx={3} w={7} h={7} />
              <Text fontSize='sm' fontWeight='semibold'>Create Merchant</Text>
            </Box>
          </Link>

          <Link to='/manage-client'>
            <Box bg='secondary'
              display='flex'
              h='57px'
              alignItems='center'
              justifyContent='flex-start'
              _hover={{ bg: 'uiGray', color: '#3C0101' }}
              color='whiteAlpha.900'>
              <Icon visibility='hidden' as={BsPeople} mx={3} w={7} h={7} />
              <Text fontSize='sm' fontWeight='semibold'>Manage Merchants</Text>
            </Box>
          </Link>
        </>
      )}
    </>
  )
}

export const CustomLink = ({ path, name, icon }) => {
  return (
    <Link to={path}>
      <Box
        bg='secondary'
        display='flex'
        h='57px'
        alignItems='center'
        justifyContent='flex-start'
        _hover={{ bg: 'uiGray', color: '#3C0101' }}
        color='whiteAlpha.900'>
        <Icon as={icon} mx={3} w={5} h={5} />
        <Text fontSize='md' fontWeight='semibold'>{name}</Text>
      </Box>
    </Link>
  )
}
