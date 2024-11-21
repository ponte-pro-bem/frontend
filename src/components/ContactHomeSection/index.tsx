import {
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
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
        h="calc(100vh - 96px)"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HStack w="100%" h="100%">
          <Stack
            bg="#98BA80"
            h="50%"
            w={["30%", "60%"]}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRightRadius={12}
          >
            <Text
              w="70%"
              lineHeight={"50px"}
              fontSize={"6xl"}
              fontWeight={700}
              color="white"
            >
              Entre em contato!
            </Text>
            <Text
              w="70%"
              lineHeight={"30px"}
              fontSize={"2xl"}
              color="white"
              mt={4}
            >
              Abra uma <b>campanha</b> ou compartilhar sua <b>organização</b>.
            </Text>

            <HStack w="70%" mt={4}>
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
            px={24}
            justifyContent={"flex-end"}
            // alignItems={"flex-end"}
          >
            <Image
              style={{
                borderRadius: "100%",
              }}
              height={150}
              width={150}
              alt="123"
              src={"prov-image-ide.png"}
            />
            <Text w="90%" fontStyle="italic" fontSize="xl" mt={12}>
              "A Ponte do Bem nasceu da necessidade de unir pessoas que querem
              ajudar com instituições que precisam de apoio. Percebemos que
              muitas pessoas têm o desejo de contribuir, mas nem sempre sabem
              como ou onde. Por isso, criamos uma plataforma que centraliza
              diferentes campanhas e organizações, tornando o processo de doação
              mais simples e transparente."
            </Text>
            <Text w="90%" fontStyle="italic" fontSize="xl" mt={2}>
              "Ver o impacto que conseguimos gerar quando conectamos doadores e
              instituições é verdadeiramente gratificante. Cada doação
              representa uma ponte entre a solidariedade e a transformação
              social."
            </Text>

            <Text fontSize={"lg"} fontWeight={600} pt={6}>
              Renata Correia
            </Text>
            <Text>Idealizadora da Ponte do bem</Text>
          </Stack>
        </HStack>
      </Flex>
    </div>
  );
}
