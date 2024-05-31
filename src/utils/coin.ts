/**
 * @param number value in dolars
 * @param currency currency code
 */
export const formatNumberToCurrency = (number: number, currency = 'USD', maximumFractionDigits = 2) => {
  const value = new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits }).format(number);

  return value;
};
