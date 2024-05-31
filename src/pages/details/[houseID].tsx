'use client';

import {
  Box,
  Button,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa6';
import useQueryGetOneHouse from '~/app/hooks/useQueryGetOneHouse';
import Providers from '~/app/providers';
import LoadingPage from '~/components/LoadingPage/LoadingPage';
import NotFound from '~/components/NotFound/NotFound';
import PageHeader from '~/components/PageHeader/PageHeader';
import { House } from '~/interfaces/house';
import { Metadata } from 'next';
import HouseDetailsSection from './components/HouseDetailsSection/HouseDetailsSection';
import ContactAgentForm from './components/HouseDetailsSection/components/HouseDetailsContactAgentForm/HouseDetailsContactAgentForm';


function Details() {
  const router = useRouter();

  const {
    data, isFetching, isFetched, isLoading,
  } = useQueryGetOneHouse(Number(router.query.houseID));

  if (isFetching && isLoading) return <LoadingPage />;

  if (data) {
    return (
      <Box>
        <PageHeader />
        <Button leftIcon={<FaArrowLeft />} variant="unstyled" onClick={() => router.back()} ml={6} pt={{ base: 6, md: 8 }}>
          Go back
        </Button>

        <VStack
          flexDir={{ base: 'column', md: 'row' }}
        >
          <Stack w={{ base: '100%', md: '60%' }}>
            <HouseDetailsSection house={data as House} />
          </Stack>
          <ContactAgentForm />

        </VStack>

      </Box>
    );
  } if (!data && isFetched) return <NotFound />;
}

export default function WrappedDetails() {
  return (
    <Providers>
      <Details />
    </Providers>
  );
}
