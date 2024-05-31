import { Text, VStack } from '@chakra-ui/react';
import { HomeSectionTitleProps } from './HomeSectionTitle.types';

export default function HomeSectionTitle({ title, subtitle }: HomeSectionTitleProps) {
  return (
    <VStack justifyContent="flex-start" alignItems="flex-start" mb={6} spacing={0}>
      <Text fontSize="3xl" fontWeight={700} color="gray.600">
        {title}
      </Text>
      <Text fontSize="lg" fontWeight={500} color="gray.400">
        {subtitle}
      </Text>
    </VStack>
  );
}
