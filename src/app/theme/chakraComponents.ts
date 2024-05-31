/* eslint-disable import/prefer-default-export */

import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base',
  },
  variants: {
    outline: {
      bg: 'brand.deapTeal',
      textTransform: 'none',
      borderRadius: '16px',
      color: 'white',
      _focus: {},
      _hover: {
        bg: 'brand.deapTeal',
        opacity: 0.8,
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
