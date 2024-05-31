'use client';

import {
  Flex,
} from '@chakra-ui/react';
import FilterForm from '~/components/FilterForm/FilterForm';
import HomeSectionTitle from '~/components/HomeSectionTitle/HomeSectionTitle';
import FavoritesDrawer from '~/components/FavoritesDrawer/FavoritesDrawer';
import HouseGrid from '~/components/HouseGrid/HouseGrid';
import useHomeController from './page.controller';

export default function Home() {
  const {
    houses,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    houseListFooterRef,
    handleSubmitSearch,
  } = useHomeController();

  return (
    <main>
      <Flex px={8} pb={4} pt={8} flexDir="column">
        <FilterForm onSubmitSearch={handleSubmitSearch} />

        <HomeSectionTitle title="Houses" subtitle="Here is a list of houses available for sale" />

        <FavoritesDrawer />

        <HouseGrid
          houses={houses}
          isFetching={isFetching}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          houseListFooterRef={houseListFooterRef}
        />

      </Flex>
    </main>
  );
}
