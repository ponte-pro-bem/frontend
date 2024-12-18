import { Center, HStack, Icon, Spinner, Text, VStack } from "@chakra-ui/react";
import { BiGhost } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
import { HomeSectionListPlaceholderProps } from "./types";

export const HomeSectionListPlaceholder = ({
  isLoading,
  error,
  isEmpty,
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
        <VStack spacing={6}>
          <Icon as={MdErrorOutline} fontSize="4xl" />

          <Text fontSize={"xl"} fontWeight="bold">
            Não foi possível buscar resultados. Tente novamente mais tarde.
          </Text>
        </VStack>
      </Center>
    );
  }

  if (isEmpty) {
    return (
      <Center h={580} minW={"100%"}>
        <VStack spacing={6}>
          <Icon as={BiGhost} fontSize="4xl" />
          <Text fontSize={"xl"} textAlign={'center'}>
            {" "}
            Sinto muito, no momento não temos resultados.
          </Text>
        </VStack>
      </Center >
    );
  }
  return null;
};
