import { Divider, Flex, Text } from '@chakra-ui/react';
import { capitalize } from '~/utils/strings';
import { IHouseHeaderProps } from './HouseHeader.types';

export default function HouseHeader({ title, location }: IHouseHeaderProps) {
  return (
    <Flex flexDir="column">
      <Text
        noOfLines={{ base: 3, md: 2 }}
        minH={{ base: 18, md: 12 }}
        fontWeight={700}
        fontSize={{ base: 'lg', md: 'xl' }}
        textOverflow="ellipsis"
      >
        {capitalize(title)}
      </Text>
      <Text fontSize={{ base: 'md', md: 'lg' }} as="i" color="gray.500">
        {location}
      </Text>
      <Divider my={2} />
    </Flex>
  );
}
