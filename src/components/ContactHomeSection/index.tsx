import { Flex, HStack, IconButton, Link, Stack, Text, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactHomeSection(){
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
                  <Link
                    href={"https://wa.me/5555859680395?text=oiee%20bb%20gostosa"}
                    target="_blank"
                  >
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
                src={"https://placehold.jp/150x150.png"}
              />
              <Text w="90%" fontStyle={"italic"} fontSize={"xl"} mt={12}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
                urna a nunc placerat varius. Nullam ultricies felis nec arcu Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Proin ac urna a
                nunc placerat varius. Nullam ultricies felis nec arcu dictum, eget
                fringilla turpis egestas. Aenean quis libero sit amet libero
                vehicula congue sit amet a felis. Donec ac velit felis.
              </Text>
              <Text w="90%" fontStyle={"italic"} fontSize={"xl"} mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
                urna a nunc placerat varius. Nullam ultricies felis nec arcu Lorem
                ipsum dolor sit amet."
              </Text>
  
              <Text fontSize={"lg"} fontWeight={600} pt={6}>
                Magnus Carlsen
              </Text>
              <Text>Idealizador da Ponte do bem</Text>
            </Stack>
          </HStack>
        </Flex>
      </div>
    );
  };