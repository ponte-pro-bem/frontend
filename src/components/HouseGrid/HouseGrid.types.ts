import { House } from '~/interfaces/house';

export interface HouseGridProps {
  houses: House[];
  isFetching: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
  houseListFooterRef: (node?: Element | null | undefined) => void;
}
