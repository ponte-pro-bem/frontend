import {
  HStack, Icon, Text, VStack,
} from '@chakra-ui/react';
import { squareFootToSquareMeter } from '~/utils/convertion';

import { RxDimensions } from 'react-icons/rx';
import { FaBed, FaBath } from 'react-icons/fa';
import { GiHomeGarage } from 'react-icons/gi';
import {
  IHouseDetailItemProps,
  IHouseDetailsProps,
} from './HouseDetails.types';

function HouseDetailItem({ icon, text }: IHouseDetailItemProps) {
  return (
    <HStack>
      <Icon as={icon} boxSize={6} color="gray.700" />
      <Text fontSize={{ base: 'md', md: '18px' }}>{text}</Text>
    </HStack>
  );
}

export default function HouseDetailItems({ house }: IHouseDetailsProps) {
  return (
    <VStack alignItems="flex-start" spacing={2}>

      <HStack>
        <HouseDetailItem icon={FaBed} text={`${house.Bedrooms} Bedrooms`} />
        <Text>|</Text>
        <HouseDetailItem icon={FaBath} text={`${house.Bathrooms} Bathrooms`} />
      </HStack>

      <HouseDetailItem
        icon={RxDimensions}
        text={`${house.Sqft} ft² / ${squareFootToSquareMeter(house.Sqft)} m²`}
      />
      <HouseDetailItem icon={GiHomeGarage} text={`${house.Garages} Garages`} />
    </VStack>
  );
}
