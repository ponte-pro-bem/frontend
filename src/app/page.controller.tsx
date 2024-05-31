import { useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiltersFormValues } from '~/components/FilterForm/FilterForm.types';
import useQueryInfinityHouses from './hooks/useQueryInfinityHouses';

export default function useHomeController() {
  const [filters, setFilters] = useState<FiltersFormValues | undefined>(undefined);

  const {
    data,
    refetch,
    isRefetching,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useQueryInfinityHouses({ filters });

  const houses = useMemo(
    () => data?.pages.flatMap((page) => page.data) || [],
    [data],
  );

  const { ref: houseListFooterRef } = useInView({
    onChange: (inView) => {
      if (inView) {
        fetchNextPage();
      }
    },
    triggerOnce: false,
  });

  const handleSubmitSearch = (formValues: FiltersFormValues) => {
    setFilters(formValues);
    refetch();
  };

  return {
    houses,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    houseListFooterRef,
    handleSubmitSearch,
    isRefetching,
  };
}
