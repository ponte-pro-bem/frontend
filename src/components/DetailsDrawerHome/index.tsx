import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text, VStack } from "@chakra-ui/react";
import { DetailsDrawerProps } from "./types";
import { Carousel } from "react-responsive-carousel";
import { FaPix } from "react-icons/fa6";
import { QRCodeSVG } from "qrcode.react";
import { MdCheck, MdContentCopy } from "react-icons/md";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function DetailsDrawerHome({ item, isOpen, onClose }: DetailsDrawerProps){
  
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
    if (!item) return null;
    
    return (
      <Drawer isOpen={isOpen} size={"xl"} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{item.name}</DrawerHeader>
  
          <DrawerBody>
            <Flex marginX="10rem" justifyContent={"center"} alignItems={"center"}>
              <Carousel
                width={"100%"}
                dynamicHeight
                showStatus={false}
                autoPlay
                centerMode
                centerSlidePercentage={90}
                // @ts-ignore
                renderThumbs={() => null}
              >
                {
                    item.images?.map(image => {
                      return (
                        <div>
                          <img src={image} />
                        </div>
                      )
                    })
                }
              </Carousel>
            </Flex>
  
            {/* <Text>{item.description}</Text> */}
            <Box px={6} py={10}>
              <Text fontSize={"lg"}>
                {item.description}
              </Text>
            </Box>
  
            <VStack>
              <FaPix size={50} color="98BA80" />
              <Text fontSize={"lg"} py={4} w="60%" textAlign={"center"}>
                Leia o QR Code abaixo para contribuir com qualquer valor para{" "}
                <b>{item.name}</b>.
              </Text>
            </VStack>
            <Flex
              justify={"center"}
              alignItems={"center"}
              pt={4}
              pb={20}
              flexDir={"column"}
            >
              <Box
                bg="#98BA8055"
                width={"fit-content"}
                padding={5}
                rounded={"xl"}
              >
                <QRCodeSVG
                  size={200}
                  value={item.pixQRCodeRaw}
                  bgColor="#98BA8055"
                />
              </Box>
              <Button
                mt={4}
                variant="ghost"
                leftIcon={copied ? <MdCheck /> : <MdContentCopy />}
                onClick={() => copyToClipboard(item.pixQRCodeRaw)}
              >
                {copied
                  ? "Seu código foi copiado com sucesso!"
                  : "Clique aqui para copiar o código"}
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };
  