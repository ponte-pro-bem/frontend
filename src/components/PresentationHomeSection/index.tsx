import { Flex, Text, VStack, Box } from "@chakra-ui/react";
import { LogoHero } from "../../app/illustrations/hero";

export default function HomeIllustration() {
  return (
    <Flex
      h="100vh"
      id="inicio"
      // my={{ base: 0, md: 24 }}
      px={{ base: 4, md: 16, lg: 24 }}
      flexDirection={{ base: "column-reverse", md: "row" }}
      justifyContent="center"
      alignItems="center"
      // w={"90%"}
      textAlign={{ base: "center", md: "left" }}
    >
      <VStack
        spacing={6}
        align={{ base: "center", md: "flex-start" }}
      // w={{ base: "100%", md: "70%" }}
      // bg={'red'}
      // pr={{ base: 0, md: 10 }}
      >
        <Text
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl", xl: "6xl" }}
          fontWeight="bold"
          lineHeight="shorter"
        >
          Seu apoio transforma vidas.
          <Text
            color="brand.green"
            as="span"
            display={{ base: "block", md: "inline" }}
            ml={{ base: 0, md: 2 }}
          >
            Faça você a diferença!
          </Text>
        </Text>
      </VStack>

      <Box
        w={{ base: "100%", md: "100%" }}
        mb={{ base: 8, md: 0 }}
        display="flex"
        justifyContent={{ base: "center", md: "flex-end" }}
      >
        <LogoHero
        // You might want to add responsive sizing props to LogoHero component
        // width={{ base: "80%", md: "100%" }}
        // maxWidth="500px"
        />
      </Box>
    </Flex>
  );
}