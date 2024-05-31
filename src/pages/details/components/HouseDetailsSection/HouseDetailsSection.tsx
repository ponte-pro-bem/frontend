import {
  Box, Button,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { RxHeart, RxHeartFilled } from 'react-icons/rx';
import HouseDetailItems from '~/components/Cards/components/HouseDetails/HouseDetails';
import { useFavoritesStore } from '~/store/favorites';
import { HouseDetailsProps } from './HouseDetailsSection.types';
import HouseDetailsDescription from './components/HouseDetailsDescription/HouseDetailsDescription';
import HouseDetailsHeader from './components/HouseDetailsHeader/HouseDetailsHeader';

export default function HouseDetailsSection({ house }: HouseDetailsProps) {
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const favorites = useFavoritesStore((state) => state.favorites);

  if (!house) {
    return null;
  }

  return (
    <VStack w="100%" alignItems="flex-start" px="6" py="8">
      <HouseDetailsHeader
        Title={house.Title}
        Location={house.Location}
        SalePrice={house['Sale Price']}
        DateListed={house.DateListed}
      />

      <Box
        h="500"
        w="100%"
        position="relative"
        overflow="hidden"
        borderRadius={12}
        my={3}
      >
        <Image
          src={house.PictureURL}
          fill
          alt="house image"
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
      <Button
        variant="ghost"
        onClick={() => {
          if (favorites[house.Id]) {
            removeFavorite(house.Id);
            return;
          }
          addFavorite(house.Id, house.Title);
        }}
        borderWidth={1}
        w="100%"
        leftIcon={favorites[house.Id] ? <RxHeartFilled /> : <RxHeart />}
      >
        {`
          ${favorites[house.Id] ? 'Remove from' : 'Add to'}
          Favorites
        `}
      </Button>
      <Box px={2} pt={2}>
        <HouseDetailItems house={house} />
        <HouseDetailsDescription description={house.Description} />
      </Box>
    </VStack>
  );
}
