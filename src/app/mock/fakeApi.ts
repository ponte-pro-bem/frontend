import fuzzysort from 'fuzzysort';
import { House } from '~/interfaces/house';
import { data } from '../data';
import { FUZZY_SORT_KEYS, ITEMS_PER_PAGE } from './fakeApi.constants';
import {
  Checker, ContactAgentFormValues, Filters, GetAllHousesParams,
  ResponseData,
} from './fakeApi.types';

/**
 * Class representing a fake API for houses.
 */
export default class FakeApiHouses {
  /**
   * Retrieves all houses based on the provided filters, page, and limit.
   * @param filters - The filters to apply.
   * @param page - The page number.
   * @param limit - The number of items per page.
   * @returns A promise that resolves to the response data.
   */
  static getAllHouses = async (
    { filters, page, limit = ITEMS_PER_PAGE }
    : GetAllHousesParams,
  ): Promise<ResponseData> => new Promise((resolve) => {
    setTimeout(() => {
      if (!filters || Object.keys(filters).length === 0) {
        resolve(this.paginate(data, page, limit));
      } else {
        const filteredData = this.applyFuzySortFilters(data, filters);
        resolve(this.paginate(filteredData, page, limit));
      }
    }, 300);
  });

  /**
   * Paginates the provided houses based on the page and limit.
   * @param houses - The list of houses.
   * @param page - The page number.
   * @param limit - The number of items per page.
   * @returns The paginated response data.
   */
  private static paginate(houses: House[], page: number, limit: number): ResponseData {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return {
      data: houses.slice(startIndex, endIndex),
      total: houses.length,
      nextPage: endIndex < houses.length ? page + 1 : undefined,
    };
  }

  /**
   * Applies fuzzy sort filters to the provided houses based on the filters.
   * @param houses - The list of houses.
   * @param filters - The filters to apply.
   * @returns The filtered list of houses.
   */
  private static applyFuzySortFilters(houses: House[], filters: Filters): House[] {
    let filteredByText = houses;

    if (filters.Text) {
      filteredByText = fuzzysort.go(filters.Text, houses, {
        keys: FUZZY_SORT_KEYS,
      }).map((result) => result.obj);
    }

    return filteredByText.filter((house) => this.matchesFilters(house, filters));
  }

  /**
   * Checks if a house matches the provided filters.
   * @param house - The house object.
   * @param filters - The filters to apply.
   * @returns True if the house matches the filters, false otherwise.
   */
  private static matchesFilters(house: House, filters: Filters): boolean {
    const updatedFilters = { ...filters };
    delete updatedFilters.Text;

    const checkers: Checker = {
      number: (houseValue, filterValue) => houseValue <= filterValue,
      array: (houseValue, [min, max]) => houseValue >= min && houseValue <= max,
      default: (houseValue, filterValue) => houseValue === filterValue,
    };

    let isValid = true;

    Object.keys(updatedFilters).forEach((key) => {
      const castedKey = key as keyof Filters & keyof House;

      let filterValue = updatedFilters[castedKey];

      let houseValue = house[castedKey];

      if (!(key in house)) return;
      if (filterValue === null || filterValue === undefined) return;

      if (typeof houseValue === 'string') houseValue = parseFloat(houseValue);
      if (typeof filterValue === 'string') filterValue = parseFloat(filterValue);

      const checkerType = Array.isArray(filterValue) ? 'array' : typeof filterValue;

      const checker = checkers[checkerType] || checkers.default;

      if (!checker(houseValue, filterValue)) {
        isValid = false;
      }
    });

    return isValid;
  }

  /**
   * Retrieves a house by its ID.
   * @param id - The ID of the house.
   * @returns The house object.
   */
  static async getHouseById(id: number): Promise<House | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.find((house) => house.Id === id));
      }, 400);
    });
  }

  // contact agent
  static async contactAgent(contactAgentFormValues: ContactAgentFormValues): Promise<void> {
    console.log('contactAgent', contactAgentFormValues);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 400);
    });
  }
}
