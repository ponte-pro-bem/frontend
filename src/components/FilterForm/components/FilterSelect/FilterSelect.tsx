import { Select, Stack } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import { FiltersFormValues, IFilterSelectProps as FilterSelectProps } from '../../FilterForm.types';

function formatLabel(label: string, count: number) {
  return count === 1 ? label.slice(0, -1) : label;
}

export default function FilterSelect({
  label,
  options,
  control,
}: FilterSelectProps) {
  return (
    <Stack
      direction="row"
      spacing={4}
      w="inherit"
    >
      <Controller
        name={label as keyof Omit<FiltersFormValues, 'Text' | 'Sale Price'>}
        control={control}
        render={({ field }) => (
          <Select
            w="100%"
            disabled={field.disabled}
            ref={field.ref}
            placeholder={`Select quantity of ${label}`}
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option === 1 ? `1 ${formatLabel(label, option)}` : `Up to ${option} ${label}`}
              </option>
            ))}
          </Select>
        )}
      />
    </Stack>
  );
}
