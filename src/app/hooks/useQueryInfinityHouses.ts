import { useInfiniteQuery } from '@tanstack/react-query';
import FakeApiHouses from '../mock/fakeApi';
import { Filters } from '../mock/fakeApi.types';
import { QUERY_KEYS } from './query.constants';

export default function useQueryInfinityHouses({ filters }: { filters?: Filters }) {
  const infinityQueryHouses = useInfiniteQuery({
    queryKey: [QUERY_KEYS.houses, filters],
    queryFn: ({ pageParam, queryKey }) => {
      const [, queryKeyFilter] = queryKey;

      const castedFilters = queryKeyFilter as Filters;

      return FakeApiHouses.getAllHouses(
        { page: pageParam, filters: castedFilters },
      );
    },
    initialPageParam: 1,
    getNextPageParam: ({ nextPage }) => nextPage ?? undefined,
  });

  return infinityQueryHouses;
}
