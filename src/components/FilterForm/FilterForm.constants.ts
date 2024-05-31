import { FiltersFormValues as FormData } from './FilterForm.types';

export default [
  {
    label: 'Bedrooms',
    placeholder: 'Select option',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    label: 'Bathrooms',
    placeholder: 'Select option',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    label: 'Garages',
    placeholder: 'Select option',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
];

export const defaultValues: FormData = {
  Text: '',
  Bedrooms: 9,
  Bathrooms: 9,
  Garages: 9,
  'Sale Price': [10_000, 1_000_000],
};
