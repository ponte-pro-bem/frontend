import { Center, HStack, Spinner, Text } from "@chakra-ui/react";
import { HomeSectionListPlaceholderProps } from "./types";

export const HomeSectionListPlaceholder = ({
  isLoading,
  error,
}: HomeSectionListPlaceholderProps) => {
  if (isLoading) {
    return (
      <Center h={580} minW={"100%"}>
        <HStack spacing={6}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="brand.green"
            size="xl"
          />
          <Text fontSize={"xl"}>Buscando...</Text>
        </HStack>
      </Center>
    );
  }

  if (error) {
    return (
      <Center h={580} minW={"100%"}>
        <HStack spacing={6}>
          <Text fontSize={"xl"}>
            Não foi possível buscar resultados. Tente novamente mais tarde.
          </Text>
        </HStack>
      </Center>
    );
  }

  return null
};
