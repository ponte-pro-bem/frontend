'use client';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  VStack,
} from '@chakra-ui/react';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import HouseHeader from './components/HouseHeader/HouseHeader';

import { ICardsProps } from './Cards.types';
import HousePrice from './components/HousePrice';
import HouseDetailItems from './components/HouseDetails/HouseDetails';

export default function HouseCard({ house }: ICardsProps) {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/details/${house.Id}`);
  };

  return (
    <Card
      h="100%"
      borderRadius={16}
      position="relative"
      overflow="hidden"
    >
      <Box h="100%" maxH={500} w="100%" position="relative" overflow="hidden">
        <Image
          width={500}
          height={400}
          src={house.ThumbnailURL}
          style={{ objectFit: 'cover' }}
          alt="Image of the house"
        />
      </Box>
      <CardBody h="100%">
        <VStack alignItems="flex-start" spacing={3}>
          <HouseHeader title={house.Title} location={house.Location} />
          <HouseDetailItems house={house} />
          <HousePrice price={house['Sale Price']} />
        </VStack>
      </CardBody>
      <CardFooter borderTopWidth={2}>
        <Button w="100%" variant="outline" onClick={handleViewDetails}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
