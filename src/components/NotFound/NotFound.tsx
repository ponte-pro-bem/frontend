import { Box, Text } from '@chakra-ui/react';
import PageHeader from '../PageHeader/PageHeader';

export default function NotFound() {
  return (
    <>
      <PageHeader />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100vh"
        w="100%"
      >
        <Text>
          Ops, we couldn&apos;t find the page you&apos;re looking for. Please try again later.
        </Text>
      </Box>
    </>
  );
}
