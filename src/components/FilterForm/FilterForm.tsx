import {
  Flex,
  HStack,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import selectOptionFilters, { defaultValues } from './FilterForm.constants';
import {
  FilterFormnProps,
  FiltersFormValues,
} from './FilterForm.types';
import FilterActions from './components/FilterActions/FilterActions';
import FilterSelect from './components/FilterSelect/FilterSelect';
import PriceRangeSlider from './components/PriceRangeSlider/PrinceRangeSlider';

export default function FilterForm({ onSubmitSearch }: FilterFormnProps) {
  const {
    handleSubmit, control, reset,
  } = useForm<FiltersFormValues>({ defaultValues });

  const onSubmit: SubmitHandler<FiltersFormValues> = (data) => onSubmitSearch(data);

  const handleClearFilters = () => {
    reset(defaultValues);
    handleSubmit(onSubmit);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack
        spacing={12}
        mb="12"
        flexDir={{ base: 'column', md: 'column', lg: 'row' }}
        w="100%"
      >
        <Stack
          w="inherit"
        >
          <VStack w="100%">
            <Controller
              name="Text"
              control={control}
              rules={{ required: false }}
              render={({ field }) => (
                <Input
                  ref={field.ref}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  w="100%"
                  type="text"
                  placeholder="Search by name, city, price or size"
                />
              )}
            />
            {selectOptionFilters.map((filter) => (
              <FilterSelect
                key={filter.label}
                label={filter.label}
                options={filter.options}
                control={control}
              />
            ))}
          </VStack>
        </Stack>
        <Flex w="100%">
          <VStack
            flexDir={{ base: 'column', md: 'row', lg: 'column' }}
            spacing={6}
            w="100%"
          >
            <VStack w="100%">
              <PriceRangeSlider control={control} />
            </VStack>
            <FilterActions
              onClearFilters={handleClearFilters}
            />
          </VStack>
        </Flex>
      </HStack>
    </form>
  );
}
