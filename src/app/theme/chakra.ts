import { extendTheme } from '@chakra-ui/react';
import { Button } from './chakraComponents';

export default extendTheme({
  components: {
    Button,
  },
  colors: {
    brand: {
      gray: '#E2E2E2',
      deapTeal: '#19747E',
      softMintGreen: '#D1E8E2',
      lightSkyBlue: '#A9D6E5',
    },
  },
});
