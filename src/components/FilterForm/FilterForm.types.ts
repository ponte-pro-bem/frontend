import { Control } from 'react-hook-form';

export interface IFilterOption {
  label: string;
  options: number[];
}

export interface FiltersFormValues {
  Text?: string;
  Bedrooms?: number;
  Bathrooms?: number;
  Garages?: number;
  'Sale Price'?: [number, number];
}

export interface FilterFormnProps {
  onSubmitSearch: (data: FiltersFormValues) => void;
}

export interface IFilterSelectProps {
  label: string;
  options: number[];
  control: Control<FiltersFormValues>;
}

export interface PriceRangeSliderProps {
  control: Control<FiltersFormValues>;
}

export interface ControlledFilterSelectProps {
  label: string;
  options: { value: string; label: string }[];
  control: Control<FiltersFormValues>;
}
