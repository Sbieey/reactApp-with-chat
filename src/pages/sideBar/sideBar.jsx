import { Box, Icon, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AUTH_ROUTES } from 'utils/constants';
import { CustomLinkWithSubMenu, CustomLink } from './customLinks';

import { AiOutlineFund } from 'react-icons/ai';
import { MdOutlineSettings, MdHelpOutline } from 'react-icons/md';
import { CgArrowsExchange } from 'react-icons/cg';
import { BsPersonBadge } from 'react-icons/bs';
import { RiPercentFill } from 'react-icons/ri'
import { IoDocumentTextOutline } from 'react-icons/io5';

export function SideBar({ themeColor }) {
  const { pathname } = useLocation();
  const [shouldDisplay, setShouldDisplay] = useState(true)


  useEffect(() => {
    if (AUTH_ROUTES.includes(pathname)) {
      setShouldDisplay(false);
    }
  }, [pathname])

  

  return (
    shouldDisplay && (
      <Box
        h='90vh'
        width='220px'
        bg={themeColor}>
        <CustomLink path='/' name='Dashboard' icon={AiOutlineFund} />
        {/* <CustomLink path='/clients' name='Clients' icon={BsPeople} /> */}
        <CustomLinkWithSubMenu />
        <CustomLink path='/transactions' name='Transactions' icon={CgArrowsExchange} />
        <CustomLink path='/commisions' name='Commisions' icon={RiPercentFill} />
        <CustomLink path='/request-cards' name='Card requests'  icon={BsPersonBadge} />
        <CustomLink path='/settings' name='Settings' icon={MdOutlineSettings} />
        <CustomLink path='/docs' name='Documentation' icon={IoDocumentTextOutline} />
        <CustomLink path='/help' name='Help' icon={MdHelpOutline} />
      </Box>
    )
  )
}
