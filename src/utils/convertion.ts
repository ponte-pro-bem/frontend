/* eslint-disable arrow-body-style */

/**
 * Converts square foot to square meter.
 * @param squareFoot The value in square foot to be converted.
 * @returns The converted value in square meter.
 */
export const squareFootToSquareMeter = (squareFoot: number) => {
  return Number((squareFoot * 0.092903).toFixed(2));
};
