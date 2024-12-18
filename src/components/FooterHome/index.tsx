import { Flex, HStack, Stack, Text } from "@chakra-ui/react";

export default function FooterHome() {
  return (
    <Flex bg="#414141" h={24} px={{ base: 6, md: 12 }}>
      <HStack w="100%" justifyContent={"space-between"}>
        <Stack>
          <Text color="white">© Todos direitos reservados</Text>
        </Stack>
      </HStack>
    </Flex>
  );
};
