import { Box, Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import Elipse from "../../app/illustrations/elipse";

export default function AboutHomeSection(){
    return (
      <Flex
        id="sobre-o-projeto"
        h="100vh"
        pt={24}
        bg="#B6C7AA33"
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Box position={"absolute"} zIndex={-1} top={0} left={0}>
          <Elipse />
        </Box>
        <VStack spacing={3} mr={12}>
          <Stack borderRadius={16}>
            <Image
              style={{
                borderRadius: 16,
              }}
              height={314}
              width={502}
              alt="123"
              src={"https://placehold.jp/502x314.png"}
            />
          </Stack>
  
          <HStack
            flexDirection={"row"}
            w={"100%"}
            justifyContent={"space-between"}
          >
            <Stack borderRadius={20}>
              <Image
                width={235}
                style={{
                  borderRadius: 16,
                }}
                height={400}
                alt="123"
                src={"https://placehold.jp/235x400.png"}
              />
            </Stack>
  
            <Stack borderRadius={20}>
              <Image
                width={235}
                height={380}
                style={{
                  borderRadius: 16,
                }}
                alt="123"
                src={"https://placehold.jp/235x380.png"}
              />
            </Stack>
          </HStack>
        </VStack>
  
        <VStack alignItems={"flex-start"} w="40%" px={12}>
          <Text fontFamily={"Montserrat"} fontSize={"4xl"} fontWeight={500}>
            <b>Organização</b> sem fins lucrativos
          </Text>
          <Text fontFamily={"Montserrat"} py={3} fontWeight={400}>
            Lorem Ipsum is simply dummy text of the printing
          </Text>
          <Text fontFamily={"Montserrat"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry orem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry orem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an
            unknown.Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown.
          </Text>
          <Text fontFamily={"Montserrat"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry orem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry orem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an
            unknown.Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown.
          </Text>
        </VStack>
      </Flex>
    );
  };
  