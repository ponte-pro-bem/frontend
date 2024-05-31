import { Flex } from '@chakra-ui/react';
import Logo from '~/app/logo';

export default function PageHeader() {
  return (
    <Flex
      pt={6}
      pb={8}
      justifyContent="center"
      alignItems="center"
      boxShadow="0 0 10px 0 rgba(100,100,100,0.2)"
    >
      <Logo />
    </Flex>
  );
}
