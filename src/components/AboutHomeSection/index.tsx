import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Elipse from "../../app/illustrations/elipse";

export default function AboutHomeSection() {
  return (
    <Flex
      overflow={"hidden"}
      id="sobre-o-projeto"
      h="100vh"
      pt={24}
      bg="#B6C7AA33"
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <Box position={"absolute"} zIndex={-1} top={"76px"} right={"-75px"}>
        <Elipse />
      </Box>
      <VStack spacing={3} mr={12}>
        <Stack borderRadius={16}>
          <Image
            style={{
              borderRadius: 16,
            }}
            w="600px"
            alt="123"
            src={"prov-logo-1.png"}
          />
        </Stack>

        <HStack
          flexDirection={"row"}
          w={"100%"}
          justifyContent={"space-between"}
        >
          <Stack borderRadius={20}>
            <Image
              // width={235}
              style={{
                borderRadius: 16,
              }}
              // height={400}
              alt="123"
              src={"prov-logo-2.png"}
            />
          </Stack>

          <Stack borderRadius={20}>
            <Image
              // widt={235}
              // height={380}
              objectFit="contain"
              style={{
                borderRadius: 16,
              }}
              alt="123"
              src={"prov-logo-3.png"}
            />
          </Stack>
        </HStack>
      </VStack>

      <VStack alignItems={"flex-start"} w="40%" px={12}>
        <Text fontFamily={"Montserrat"} fontSize={"4xl"} fontWeight={500}>
          <b>Organização</b> sem fins lucrativos
        </Text>
        <Text fontFamily={"Montserrat"} py={3}>
          Conectando doadores e instituições para um impacto social positivo.
        </Text>

        <Text fontFamily={"Montserrat"} py={3} fontWeight={400}>
          A "Ponte do Bem" é uma iniciativa que visa estabelecer conexões
          efetivas entre doadores e instituições sem fins lucrativos. Por meio
          de um catálogo abrangente de organizações, a plataforma permite que as
          doações sejam realizadas com segurança, permitindo que cada pessoa
          direcione seus recursos para causas que se alinhem com seus valores e
          crenças.
        </Text>

        <Text fontFamily={"Montserrat"} py={3} fontWeight={400}>
          Com a missão de atuar como intermediária entre potenciais doadores -
          tanto pessoas físicas quanto jurídicas - e instituições, a "Ponte do
          Bem" otimiza o processo de contribuições. O projeto garante que os
          recursos sejam direcionados a organizações sérias e comprometidas com
          causas sociais, ambientais e culturais, assegurando que cada doação
          gere um impacto significativo e transformador na sociedade.
        </Text>
      </VStack>
    </Flex>
  );
}
