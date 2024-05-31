// import HouseDetailsHeader from "./HouseDetailsHeader"

import { House } from '~/interfaces/house';

export interface HouseDetailsHeaderProps extends Pick<House, 'Title' | 'Location' | 'DateListed'> {
    'SalePrice': string;
}
