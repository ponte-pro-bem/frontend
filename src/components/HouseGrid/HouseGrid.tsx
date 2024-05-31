import {
  Box,
  GridItem,
} from '@chakra-ui/react';
import HouseCard from '../Cards/Cards';
import { HouseGridProps } from './HouseGrid.types';
import HouseGridFooter from './components/HouseGridFooter';

export default function HouseGrid({
  houses,
  isFetching,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  houseListFooterRef,
}: HouseGridProps) {
  return (
    <>

      <Box
        w="100%"
        sx={{ columnCount: [1, 1, 2, 2, 4, 4], columnGap: '20px' }}
      >
        {houses.map((house) => (
          <GridItem key={house.Id} pb={6} display="inline-block" mb={2}>
            <HouseCard house={house} />
          </GridItem>
        ))}
      </Box>

      <HouseGridFooter
        fetchNextPage={fetchNextPage}
        hasNextPage={!!hasNextPage}
        houseListFooterRef={houseListFooterRef}
        houses={houses}
        isFetching={isFetching}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
}
