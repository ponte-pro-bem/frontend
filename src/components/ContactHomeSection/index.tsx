import {
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Show,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactHomeSection() {
  return (
    <div id="contato">
      <Flex
        h={{ base: "100vh", md: "calc(100vh - 96px)" }}
      //  justifyContent={"center"}
      // alignItems={"center"}
      >
        <HStack w="100%" h="100%" flexDir={{ base: "column-reverse", md: "row" }}>
          <Stack
            bg="#98BA80"
            h={{ base: "25%", md: "50%" }}
            w={{ base: "100%", md: "40%", lg: "60%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRightRadius={{ base: 0, md: 12 }}
            py={{ base: 3, md: 0 }}
          >
            <Text
              w={{ base: "90%", md: "70%" }}
              lineHeight={"50px"}
              fontSize={{ base: "2xl", md: "6xl" }}
              fontWeight={700}
              color="white"
            >
              Entre em contato!
            </Text>
            <Text
              w={{ base: "90%", md: "70%" }}
              lineHeight={"24px"}
              fontSize={{ base: "lg", md: "2xl" }}
              color="white"
              mt={{ base: 0, md: 4 }}
            >
              Abra uma <b>campanha</b> ou compartilhe sua <b>organização</b>.
            </Text>

            <HStack w={{ base: "40%", md: "70%" }} mt={4}>
              <Tooltip label="Whatsapp">
                <Link href={"https://wa.me/"} target="_blank">
                  <IconButton
                    bg={"transparent"}
                    aria-label="whatsapp"
                    icon={<FaWhatsapp />}
                  />
                </Link>
              </Tooltip>
              <Tooltip label="Instagram">
                <IconButton
                  bg={"transparent"}
                  aria-label="instagram"
                  icon={<FaInstagram />}
                />
              </Tooltip>
              <Tooltip label="Email">
                <IconButton
                  bg={"transparent"}
                  aria-label="email"
                  icon={<MdEmail />}
                />
              </Tooltip>
            </HStack>
          </Stack>
          <Stack
            w={"100%"}
            px={{ base: 6, md: 24 }}
            pt={{ base: 6, md: 0 }}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
          >
            <Show above="md">

              <Image
                style={{
                  borderRadius: "100%",
                }}
                height={150}
                width={150}
                alt="123"
                src={"prov-image-ide.png"}
              />
            </Show>
            <Text w={{ base: "100%", md: "90%" }} fontStyle="italic" fontSize={{ base: "lg", md: "xl" }} mt={12}>
              "A Ponte do Bem nasceu da necessidade de unir pessoas que querem
              ajudar com instituições que precisam de apoio. Percebemos que
              muitas pessoas têm o desejo de contribuir, mas nem sempre sabem
              como ou onde. Por isso, criamos uma plataforma que centraliza
              diferentes campanhas e organizações, tornando o processo de doação
              mais simples e transparente."
            </Text>
            <Text w={{ base: "100%", md: "90%" }} fontStyle="italic" fontSize={{ base: "lg", md: "xl" }} mt={2}>
              "Ver o impacto que conseguimos gerar quando conectamos doadores e
              instituições é verdadeiramente gratificante. Cada doação
              representa uma ponte entre a solidariedade e a transformação
              social."
            </Text>

            <Show below="md">

              <Image
                style={{
                  borderRadius: "100%",
                }}
                height={{ base: 70, md: 150 }}
                width={{ base: 70, md: 150 }}
                alt="123"
                src={"prov-image-ide.png"}
              />
            </Show>
            <Text fontSize={"lg"} fontWeight={600} pt={{ base: 0, md: 6 }}>
              Renata Correia
            </Text>
            <Text mb={{ base: 6, md: 0 }}>Idealizadora da Ponte do bem</Text>
          </Stack>
        </HStack>
      </Flex>
    </div>
  );
}
// import {
//   Box,
//   Flex,
//   HStack,
//   IconButton,
//   Image,
//   Link,
//   Stack,
//   Text,
//   Tooltip,
// } from "@chakra-ui/react";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// export default function ContactHomeSection() {
//   return (
//     <Flex
//       direction={{ base: "column", md: "row" }}
//       align={{ base: "center", md: "flex-start" }}
//       justify="space-between"
//       px={{ base: 4, md: 8 }}
//       py={8}
//       bg="gray.100"
//       borderRadius="lg"
//       boxShadow="lg"
//     >
//       <Stack spacing={4} maxW={{ base: "100%", md: "50%" }} textAlign={{ base: "center", md: "left" }}>
//         <Text fontSize="2xl" fontWeight="bold" color="teal.600">
//           Entre em contato!
//         </Text>
//         <Text fontSize="md" color="gray.600">
//           Abra uma campanha ou compartilhe sua organização.
//         </Text>
//         <HStack spacing={4} justify={{ base: "center", md: "flex-start" }}>
//           <Tooltip label="Instagram">
//             <IconButton
//               as={Link}
//               href="https://instagram.com"
//               aria-label="Instagram"
//               icon={<FaInstagram />}
//               colorScheme="pink"
//               isRound
//             />
//           </Tooltip>
//           <Tooltip label="WhatsApp">
//             <IconButton
//               as={Link}
//               href="https://wa.me"
//               aria-label="WhatsApp"
//               icon={<FaWhatsapp />}
//               colorScheme="green"
//               isRound
//             />
//           </Tooltip>
//           <Tooltip label="Email">
//             <IconButton
//               as={Link}
//               href="mailto:email@pontedobem.com"
//               aria-label="Email"
//               icon={<MdEmail />}
//               colorScheme="blue"
//               isRound
//             />
//           </Tooltip>
//         </HStack>
//       </Stack>

//       <Stack spacing={4} maxW={{ base: "100%", md: "50%" }} mt={{ base: 8, md: 0 }}>
//         <Text fontSize="md" fontStyle="italic" color="gray.600">
//           "A Ponte do Bem nasceu da necessidade de unir pessoas que querem
//           ajudar com instituições que precisam de apoio. Percebemos que
//           muitas pessoas têm o desejo de contribuir, mas nem sempre sabem
//           como ou onde. Por isso, criamos uma plataforma que centraliza
//           diferentes campanhas e organizações, tornando o processo de doação
//           mais simples e transparente."
//         </Text>
//         <Text fontSize="md" fontStyle="italic" color="gray.600">
//           "Ver o impacto que conseguimos gerar quando conectamos doadores e
//           instituições é verdadeiramente gratificante. Cada doação
//           representa uma ponte entre a solidariedade e a transformação
//           social."
//         </Text>
//         <Box>
//           <Text fontSize="lg" fontWeight="bold" color="teal.600">
//             Renata Correia
//           </Text>
//           <Text fontSize="sm" color="gray.500">
//             Idealizadora da Ponte do Bem
//           </Text>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }
