import { House } from '~/interfaces/house';
import { FiltersFormValues } from '../components/FilterForm/FilterForm.types';

export interface Filters extends FiltersFormValues {}

export interface GetAllHousesParams {
    filters: Filters;
    page: number;
    limit?: number;
}

export interface ResponseData {
    data: House[];
    total: number;
    nextPage?: number;
}

// eslint-disable-next-line no-unused-vars
export type Checker = { [key: string]: (houseValue: any, filterValue: any) => boolean };

export interface GetHousesParams
 { page: number, queryKeyFilters: Filters }

export interface ContactAgentFormValues {
    fullName: string;
    email: string;
    phone: string;
    comments: string;
}
