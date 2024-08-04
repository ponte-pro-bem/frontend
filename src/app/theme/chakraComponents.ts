/* eslint-disable import/prefer-default-export */

import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base',
  },
  variants: {
    outline: {
      bg: 'brand.lightText',
      textTransform: 'none',
      borderRadius: '16px',
      color: 'white',
      _focus: {},
      _hover: {
        bg: 'brand.deapTeal',
        opacity: 0.8,
      },
    },
    ghost: {
      textTransform: 'none',
      borderRadius: '16px',
      color: 'brand.lightText',
      _focus: {},
      _hover: {
        color: 'brand.darkText',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
