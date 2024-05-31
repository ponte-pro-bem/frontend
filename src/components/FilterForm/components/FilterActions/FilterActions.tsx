import { Button, VStack } from '@chakra-ui/react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FilterActionsProps } from './FilterActions.types';

export default function FilterActions({ onClearFilters }: FilterActionsProps) {
  return (
    <VStack w="100%">
      <Button
        leftIcon={<FaMagnifyingGlass />}
        w="100%"
        type="submit"
        borderRadius={8}
      >
        Search
      </Button>
      <Button
        w="100%"
        variant="solid"
        borderRadius={8}
        onClick={onClearFilters}
      >
        Clear Filters
      </Button>
    </VStack>
  );
}
