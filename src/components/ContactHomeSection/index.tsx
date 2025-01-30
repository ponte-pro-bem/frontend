import React from 'react';
import {
  Flex,
  HStack,
  IconButton,
  Link,
  Show,
  Stack,
  Text,
  Tooltip,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const EMAIL = "pontedobem.org@gmail.com";

function useContactController() {
  const { onCopy } = useClipboard(EMAIL);
  const toast = useToast();

  const handleEmailClick = () => {
    onCopy();
    toast({
      title: "Email copiado",
      description: "O email foi copiado para a área de transferência",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    window.location.href = `mailto:${EMAIL}`;
  };

  return { handleEmailClick };
}

export default function ContactHomeSection() {
  const { handleEmailClick } = useContactController();

  return (
    <div id="contato">
      <Flex h={{ base: "100vh", md: "calc(100vh - 96px)" }}>
        <HStack w="100%" h="100%" justifyContent={{ base: "flex-start" }} flexDir={{ base: "column-reverse", md: "row" }}>
          <Stack
            bg="#98BA80"
            h={{ base: "25%", md: "50%" }}
            w={{ base: "100%", md: "40%", lg: "60%" }}
            display={"flex"}
            justifyContent={{ base: "flex-start", md: "center" }}
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

            <HStack w={{ base: "90%", md: "70%" }} mt={4}>
              <Tooltip label="Instagram">
                <Link href={"https://www.instagram.com/pontedobem_org"} target="_blank">
                  <IconButton
                    bg={"transparent"}
                    aria-label="instagram"
                    icon={<FaInstagram />}
                  />
                </Link>
              </Tooltip>
              <Tooltip label="Copiar email" placement="top">
                <IconButton
                  bg={"transparent"}
                  aria-label="email"
                  icon={<MdEmail />}
                  onClick={handleEmailClick}
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
            </Show>
            <Text w={{ base: "100%", md: "90%" }} fontStyle="italic" fontSize={{ base: "lg", md: "xl" }} mt={12}>
              "Tudo começou de um sonho simples: conectar corações que querem ajudar com mãos que precisam de apoio. Quantas vezes a gente olha ao redor e pensa 'queria fazer algo', mas não sabe por onde começar? Foi pensando nisso que criamos a Ponte do Bem - um lugar onde a vontade de fazer a diferença encontra os caminhos para transformar vidas."
            </Text>
            <Text w={{ base: "100%", md: "90%" }} fontStyle="italic" fontSize={{ base: "lg", md: "xl" }} mt={2}>
              "O mais incrível é ver como cada pequena ação gera ondas de esperança. Quando um doador encontra uma instituição, não é só dinheiro ou recurso que se move, é amor, é empatia, é a certeza de que juntos podemos construir um mundo mais humano e solidário."
            </Text>

            <Show below="md">
            </Show>
            <Text fontSize={"lg"} fontWeight={600} pt={6}>
              Levi Correia e Lívia Correia
            </Text>
            <Text mb={{ base: 6, md: 0 }}>Idealizadores da Ponte do Bem</Text>
          </Stack>
        </HStack>
      </Flex>
    </div>
  );
}