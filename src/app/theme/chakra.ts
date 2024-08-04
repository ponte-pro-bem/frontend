import { extendTheme } from '@chakra-ui/react';
import { Button } from './chakraComponents';

export default extendTheme({
  components: {
    Button,
    Text: {
      baseStyle: {
        color: '#292C56',
        fontFamily: 'Montserrat',
      },
    }
  },
  colors: {
    brand: {
      gray: '#E2E2E2',
      green: '#98BA80',
      lightGreen: '#98BA8055',
      softMintGreen: '#D1E8E2',
      lightSkyBlue: '#A9D6E5',
      lightText: '#5A5A5A',
      darkText: '#292C56'
    },
  },
});
