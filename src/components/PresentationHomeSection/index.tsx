import { Flex } from "@chakra-ui/react";
import { LogoHero } from "../../app/illustrations/hero";

export default function HomeIllustration(){
    return (
      <Flex
        h="100vh"
        id="inicio"
        my={24}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <LogoHero />
      </Flex>
    );
}