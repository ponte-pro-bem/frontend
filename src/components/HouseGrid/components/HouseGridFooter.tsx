import { Button, Flex, Text } from '@chakra-ui/react';
import { HouseGridFooterProps } from './HouseGridFooter.types';

export default function HouseGridFooter({
  houses,
  isFetching,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  houseListFooterRef,
}: HouseGridFooterProps) {
  return (
    <Flex justifyContent="center" alignItems="center">
      {/* Show loading indicator if there are no houses and data is being fetched */}
      {houses.length === 0 && isFetching && (
        <Button border="none" w={200} isLoading />
      )}

      {/* Show message if there are no more houses to show */}
      {!hasNextPage && !isFetching && (
        <Text py={6} textAlign="center">
          No more houses to show
        </Text>
      )}

      {/* Show load more button if there are houses */}
      {houses.length > 0 && (
        <Flex
          ref={houseListFooterRef}
          pt={12}
          justifyContent="center"
          alignItems="center"
        >
          {/* Show load more button if there are more pages to fetch */}
          {hasNextPage && (
          <Button
            border="none"
            w={200}
            isLoading={isFetchingNextPage}
            onClick={fetchNextPage}
          >
            Load More
          </Button>
          )}
        </Flex>
      )}
    </Flex>
  );
}
