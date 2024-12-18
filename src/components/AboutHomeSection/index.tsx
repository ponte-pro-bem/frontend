// import {
//   Box,
//   Flex,
//   HStack,
//   Image,
//   Stack,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import Elipse from "../../app/illustrations/elipse";

// export default function AboutHomeSection() {
//   return (
//     <Flex
//       overflow={"hidden"}
//       id="sobre-o-projeto"
//       h="100vh"
//       pt={24}
//       bg="#B6C7AA33"
//       justifyContent={"center"}
//       alignItems={"center"}
//       position={"relative"}
//     >
//       <Box position={"absolute"} zIndex={-1} top={"76px"} right={"-75px"}>
//         <Elipse />
//       </Box>
//       <VStack spacing={3} mr={12}>
//         <Stack borderRadius={16}>
//           <Image
//             style={{
//               borderRadius: 16,
//             }}
//             w="600px"
//             alt="123"
//             src={"prov-logo-1.png"}
//           />
//         </Stack>

//         <HStack
//           flexDirection={"row"}
//           w={"100%"}
//           justifyContent={"space-between"}
//         >
//           <Stack borderRadius={20}>
//             <Image
//               // width={235}
//               style={{
//                 borderRadius: 16,
//               }}
//               // height={400}
//               alt="123"
//               src={"prov-logo-2.png"}
//             />
//           </Stack>

//           <Stack borderRadius={20}>
//             <Image
//               // widt={235}
//               // height={380}
//               objectFit="contain"
//               style={{
//                 borderRadius: 16,
//               }}
//               alt="123"
//               src={"prov-logo-3.png"}
//             />
//           </Stack>
//         </HStack>
//       </VStack>

//       <VStack alignItems={"flex-start"} w="40%" px={12}>
//         <Text fontFamily={"Montserrat"} fontSize={"4xl"} fontWeight={500}>
//           <b>Organização</b> sem fins lucrativos
//         </Text>
//         <Text fontFamily={"Montserrat"} py={3}>
//           Conectando doadores e instituições para um impacto social positivo.
//         </Text>

//         <Text fontFamily={"Montserrat"} py={3} fontWeight={400}>
//           A "Ponte do Bem" é uma iniciativa que visa estabelecer conexões
//           efetivas entre doadores e instituições sem fins lucrativos. Por meio
//           de um catálogo abrangente de organizações, a plataforma permite que as
//           doações sejam realizadas com segurança, permitindo que cada pessoa
//           direcione seus recursos para causas que se alinhem com seus valores e
//           crenças.
//         </Text>

//         <Text fontFamily={"Montserrat"} py={3} fontWeight={400}>
//           Com a missão de atuar como intermediária entre potenciais doadores -
//           tanto pessoas físicas quanto jurídicas - e instituições, a "Ponte do
//           Bem" otimiza o processo de contribuições. O projeto garante que os
//           recursos sejam direcionados a organizações sérias e comprometidas com
//           causas sociais, ambientais e culturais, assegurando que cada doação
//           gere um impacto significativo e transformador na sociedade.
//         </Text>
//       </VStack>
//     </Flex>
//   );
// }
import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Elipse from "../../app/illustrations/elipse";

export default function AboutHomeSection() {
  return (
    <Flex
      overflow="hidden"
      id="sobre-o-projeto"
      minH="100vh"
      pt={{ base: 8, md: 24 }}
      bg="#B6C7AA33"
      justifyContent="center"
      alignItems="center"
      position="relative"
      flexDirection={{ base: "column", md: "row" }}
      px={{ base: 4, md: 0 }}
      pb={{ base: 8, md: 0 }}
    >
      {/* Absolute Positioned Elipse */}
      <Box 
        position="absolute" 
        zIndex={-1} 
        top={{ base: "20px", md: "76px" }} 
        right={{ base: "-30px", md: "-75px" }}
        display={{ base: "none", md: "block" }}
      >
        <Elipse />
      </Box>

      {/* Image Gallery */}
      <VStack 
        spacing={3} 
        mr={{ base: 0, md: 12 }} 
        w={{ base: "100%", md: "auto" }}
        mb={{ base: 6, md: 0 }}
      >
        <Stack borderRadius={16} w="full" maxW={{ base: "100%", md: "600px" }}>
          <Image
            borderRadius={16}
            w="full"
            maxW="600px"
            objectFit="cover"
            alt="Imagem principal"
            src="prov-logo-1.png"
          />
        </Stack>
        
        <Wrap 
          spacing={4} 
          justify="center" 
          w="full" 
          maxW={{ base: "100%", md: "600px" }}
        >
          <WrapItem w={{ base: "calc(50% - 1rem)", md: "auto" }}>
            <Stack borderRadius={20}>
              <Image
                borderRadius={16}
                w="full"
                maxW="235px"
                objectFit="cover"
                alt="Imagem secundária 1"
                src="prov-logo-2.png"
              />
            </Stack>
          </WrapItem>
          <WrapItem w={{ base: "calc(50% - 1rem)", md: "auto" }}>
            <Stack borderRadius={20}>
              <Image
                borderRadius={16}
                w="full"
                maxW="235px"
                objectFit="cover"
                alt="Imagem secundária 2"
                src="prov-logo-3.png"
              />
            </Stack>
          </WrapItem>
        </Wrap>
      </VStack>

      {/* Text Content */}
      <VStack 
        alignItems="flex-start" 
        w={{ base: "100%", md: "40%" }} 
        px={{ base: 0, md: 12 }}
        spacing={4}
        textAlign={{ base: "center", md: "left" }}
      >
        <Text 
          fontFamily="Montserrat" 
          fontSize={{ base: "2xl", md: "4xl" }} 
          fontWeight={500}
          alignSelf={{ base: "center", md: "flex-start" }}
        >
          <b>Organização</b> sem fins lucrativos
        </Text>
        
        <Text 
          fontFamily="Montserrat" 
          textAlign={{ base: "center", md: "left" }}
        >
          Conectando doadores e instituições para um impacto social positivo.
        </Text>
        
        {[
          "A \"Ponte do Bem\" é uma iniciativa que visa estabelecer conexões efetivas entre doadores e instituições sem fins lucrativos. Por meio de um catálogo abrangente de organizações, a plataforma permite que as doações sejam realizadas com segurança, permitindo que cada pessoa direcione seus recursos para causas que se alinhem com seus valores e crenças.",
          "Com a missão de atuar como intermediária entre potenciais doadores - tanto pessoas físicas quanto jurídicas - e instituições, a \"Ponte do Bem\" otimiza o processo de contribuições. O projeto garante que os recursos sejam direcionados a organizações sérias e comprometidas com causas sociais, ambientais e culturais, assegurando que cada doação gere um impacto significativo e transformador na sociedade."
        ].map((paragraph, index) => (
          <Text 
            key={index}
            fontFamily="Montserrat" 
            fontWeight={400}
            textAlign={{ base: "center", md: "left" }}
          >
            {paragraph}
          </Text>
        ))}
      </VStack>
    </Flex>
  );
}