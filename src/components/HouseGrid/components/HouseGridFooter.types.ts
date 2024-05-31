import { House } from '~/interfaces/house';

export interface HouseGridFooterProps {
    houses: House[];
    isFetching: boolean;
    isFetchingNextPage: boolean;
    hasNextPage: boolean;
    fetchNextPage: () => void;
    houseListFooterRef: any;

}
