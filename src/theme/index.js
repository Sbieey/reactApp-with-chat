import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from './buttonStyles';

export const theme = extendTheme({
  colors: {
    primary: '#A90802',
    secondary: '#012F96',
    uiBlue: '#022F97',
    uiGreen: '#27A92B',
    uiGray: '#E8E9E8',
    pale: '#F0EDED',
    uiRed: '#ED0632',
    uiOrange: '#ED8936'
  },
  components: {
    Button,
  },
});
