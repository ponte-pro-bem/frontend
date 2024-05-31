import { Box, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { HouseDetailsBodyProps } from './HouseDetailsBody.types';

export default function HouseDetailsBody(
  {
    Bathrooms, Bedrooms, Garages, PictureURL, Sqft, YearBuilt,
  }: HouseDetailsBodyProps,
) {
  return (
    <VStack w="100%" />
  );
}
