import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DetailsDrawerProps } from "./types";
import { Carousel } from "react-responsive-carousel";
import { FaBookmark, FaHandHoldingHeart, FaPix } from "react-icons/fa6";
import { QRCodeSVG } from "qrcode.react";
import { MdCheck, MdContentCopy } from "react-icons/md";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useForm } from "react-hook-form";
import Markdown from 'markdown-to-jsx'
// import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import CurrencyInput from "react-currency-input-field";
import ReactMarkdown from "react-markdown";
interface DonationForm {
  name: string;
  cpf: string;
  amount: number;
}
export default function DetailsDrawerHome({
  item,
  isOpen,
  onClose,
}: DetailsDrawerProps) {
  const [copied, setCopied] = useState(false);
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DonationForm>();

  const onSubmit = async (data: DonationForm) => {
    try {
      // Aqui você deve implementar a chamada POST para seu servidor
      await fetch("/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          itemId: item?.id || "3",
        }),
      });

      setShowQRCode(true);
    } catch (error) {
      console.error("Erro ao registrar doação:", error);
    }
  };

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
        <DrawerHeader fontSize={32} fontWeight="bold">
          {item.name}
        </DrawerHeader>

        <DrawerBody
          position="relative"
          w="100%"
          overflowY="auto"
          sx={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "gray.200",
              borderRadius: "24px",
            },
          }}
        >
          <Flex
            p={2}
            w="100%"
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
          >
            <Carousel
              width={"100%"}
              stopOnHover
              showStatus={false}
              autoPlay
              centerMode
              swipeable={true}
              emulateTouch={true}
              infiniteLoop={true}
              centerSlidePercentage={90}
              // @ts-ignore
              renderThumbs={() => null}
              useKeyboardArrows
              interval={6000}
              transitionTime={500}
            >
              {item.images?.map((image) => {
                return (
                  <Stack ml={3} key={image.id}>
                    <Image
                      maxH={450}
                      objectFit={'cover'}
                      src={image.url}
                      style={{ borderRadius: 24, marginLeft: 10 }}
                      alt={image.key}
                    />
                  </Stack>
                );
              })}
            </Carousel>
          </Flex>

          <Box px={6} py={10}>
            {/* <Text fontSize={"lg"} whiteSpace="pre-line" lineHeight="1.8">
              {item.description}
            </Text> */}
            <Text fontSize={"lg"} whiteSpace="pre-line" lineHeight="1.8">
              <Markdown>
                {item.description}
              </Markdown>
            </Text>
            {/* <ReactMarkdown children={item.description} />; */}
          </Box>

          <VStack pb={36} spacing={6} width="100%" alignItems="center">
            {!showDonationForm && !showQRCode && (
              <>
                <Box
                  position="fixed"
                  bottom={0}
                  pb={6}
                  width="calc(100%)" // 48px é para compensar o padding do drawer
                  maxW="calc(var(--chakra-sizes-4xl))"
                  paddingX={12}
                  bg="white"
                >
                  <Button
                    w="100%"
                    size="lg"
                    height="70px"
                    bg="green.500"
                    color="white"
                    fontSize="24px"
                    fontWeight="bold"
                    onClick={() => setShowDonationForm(true)}
                    _hover={{
                      bg: "green.600",
                      transform: "translateY(-2px)",
                      boxShadow: "xl",
                    }}
                    transition="all 0.2s"
                    boxShadow="0 -15px 20px rgba(0, 0, 0, 0.1)"
                  >
                    Quero apoiar!
                  </Button>
                  <Box
                    position="absolute"
                    top="-100px"
                    left={0}
                    right={0}
                    height="100px"
                    bgGradient="linear(to-t, white, transparent)"
                    pointerEvents="none"
                  />
                </Box>
              </>
            )}
            <Divider mb={6} />
            {showDonationForm && !showQRCode && (
              <Box
                as="form"
                onSubmit={handleSubmit(onSubmit)}
                width="100%"
                maxWidth="500px"
              >
                <HStack alignItems={"start"}>
                  <Icon
                    pt={2}
                    as={FaBookmark}
                    fontSize={36}
                    color="brand.green"
                  ></Icon>
                  <Text fontSize={"lg"} fontWeight={700} color="brand.green">
                    Nos ajude a registrar as doações feitas pela Ponte do Bem.
                  </Text>
                </HStack>
                <Text fontSize={"xs"} textAlign="left" py={5}>
                  Preencha seus dados e qual o valor de sua doação para apoiar{" "}
                  <b>{item.name}</b>
                </Text>
                <VStack spacing={4}>
                  <Box width="100%">
                    <Input
                      placeholder="Nome completo"
                      {...register("name")}
                      w="100%"
                      borderWidth={2}
                      borderColor={"brand.green"}
                      _placeholder={{
                        color: "gray.400",
                        fontWeight: 700,
                      }}
                      _focus={{
                        borderColor: "green.500",
                        boxShadow: "0 0 0 1px #38A169",
                      }}
                    />
                    {errors.cpf && (
                      <Text color="red.500" fontSize="sm" mt={1}>
                        {errors.cpf.message}
                      </Text>
                    )}
                  </Box>
                  <Box width="100%">
                    <Input
                      placeholder="CPF"
                      {...register("cpf")}
                      w="100%"
                      borderWidth={2}
                      borderColor={"brand.green"}
                      _placeholder={{
                        color: "gray.400",
                        fontWeight: 700,
                      }}
                      _focus={{
                        borderColor: "green.500",
                        boxShadow: "0 0 0 1px #38A169",
                      }}
                    />
                    {errors.cpf && (
                      <Text color="red.500" fontSize="sm" mt={1}>
                        {errors.cpf.message}
                      </Text>
                    )}
                  </Box>
                  <Box width="100%">
                    <Input
                      as={CurrencyInput}
                      decimalsLimit={2}
                      prefix="R$ "
                      groupSeparator="."
                      decimalSeparator=","
                      placeholder="Valor da doação"
                      step="0.01"
                      {...register("amount", {
                        required: "Voce deve adicionar o valor da doação",
                      })}
                      w="100%"
                      borderWidth={2}
                      borderColor={"brand.green"}
                      _placeholder={{
                        color: "gray.400",
                        fontWeight: 700,
                      }}
                      _focus={{
                        borderColor: "green.500",
                        boxShadow: "0 0 0 1px #38A169",
                      }}
                    />
                    {errors.amount && (
                      <Text color="red.500" fontSize="sm" mt={1}>
                        {errors.amount.message}
                      </Text>
                    )}
                  </Box>
                  <Button type="submit" colorScheme="green" width="100%">
                    Confirmar Doação
                  </Button>
                  <Text fontSize={"xs"}>
                    Toda doação é enviada diretamente a campanha ou instituição,
                    não possuímos nenhum controle do valor contribuído.
                  </Text>
                </VStack>
              </Box>
            )}
            {showQRCode && (
              <>
                <HStack alignItems={"start"}>
                  <Text fontSize={"lg"} fontWeight={700} color="brand.green">
                    Muito obrigado, sua ajuda faz toda diferença!
                  </Text>
                </HStack>

                <Text fontSize={"lg"} py={4} w="60%" textAlign={"center"}>
                  Leia o QR Code abaixo para contribuir com o valor informado
                  para <b>{item.name}</b>.
                </Text>
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
                    : "Clique aqui para copiar o código pix"}
                </Button>
              </>
            )}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
