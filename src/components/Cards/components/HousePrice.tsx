import { Text } from '@chakra-ui/react';
import { formatNumberToCurrency } from '~/utils/coin';

interface HousePriceProps {
  price: string;
}

export default function HousePrice({ price }: HousePriceProps) {
  return <Text mt={3} fontSize="2xl" fontWeight={500}>{formatNumberToCurrency(Number(price))}</Text>;
}
