import { useQuery } from '@tanstack/react-query';
import FakeApiHouses from '../mock/fakeApi';
import { QUERY_KEYS } from './query.constants';

export default function useQueryGetOneHouse(id: number) {
  const query = useQuery({
    queryKey: [QUERY_KEYS.houses, id],
    queryFn: async ({ queryKey }) => {
      const [, houseId] = queryKey;

      return FakeApiHouses.getHouseById(Number(houseId));
    },
    enabled: !!id,
  });

  return query;
}
