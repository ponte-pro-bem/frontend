import { Text, VStack } from '@chakra-ui/react';
import { capitalize } from '~/utils/strings';
import { formatNumberToCurrency } from '~/utils/coin';
import { formatDate } from '~/utils/dates';
import { HouseDetailsHeaderProps } from './HouseDetailsHeader.types';

export default function HouseDetailsHeader(
  {
    Title, Location, SalePrice, DateListed,
  }: HouseDetailsHeaderProps,
) {
  return (
    <VStack alignItems="flex-start">
      <Text
        fontSize={{
          base: '3xl',
        }}
        fontWeight={700}
      >
        {capitalize(Title)}
      </Text>
      <Text
        fontSize={{
          base: 'md',
        }}
        fontStyle="italic"

      >
        {Location}
      </Text>
      <Text
        fontWeight={700}
        fontSize={{
          base: 'lg',
        }}
      >
        {formatNumberToCurrency(Number(SalePrice))}
      </Text>
      <Text fontSize="md" color="gray.500">
        Listed in
        {' '}
        {formatDate(DateListed)}
      </Text>
    </VStack>
  );
}
