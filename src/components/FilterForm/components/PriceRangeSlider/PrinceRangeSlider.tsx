/* eslint-disable no-underscore-dangle */

'use client';

import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import { formatNumberToCurrency } from '~/utils/coin';
import { useState } from 'react';
import { PriceRangeSliderProps } from '../../FilterForm.types';

export default function PriceRangeSlider({
  control,
}: PriceRangeSliderProps) {
  const [values, setValues] = useState(control._getWatch('Sale Price'));
  return (
    <Stack direction="row" spacing={2} flexDir="column" width="100%" pb={6}>
      <Text fontSize="md">Values between:</Text>
      <Text fontSize="md">
        {
          // eslint-disable-next-line no-underscore-dangle
          values.map((price: number) => formatNumberToCurrency(price)).join(' - ') || '0 - 0'
        }
      </Text>
      <Controller
        name="Sale Price"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <RangeSlider
            min={10_000}
            max={1_000_000}
            title="price"
            value={field.value}
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-label={['min', 'max']}
            onChange={(value) => {
              setValues(value);
              field.onChange(value);
            }}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} bg="brand.lightSkyBlue" />
            <RangeSliderThumb index={1} bg="brand.lightSkyBlue" />
          </RangeSlider>
        )}
      />
    </Stack>
  );
}
