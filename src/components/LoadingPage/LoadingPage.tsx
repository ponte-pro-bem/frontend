import { Box, Spinner } from '@chakra-ui/react';
import PageHeader from '../PageHeader/PageHeader';

export default function LoadingPage() {
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
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    </>
  );
}
