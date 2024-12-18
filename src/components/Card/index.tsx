import Markdown from 'markdown-to-jsx'
import {
  Box,
  Card as ChakraCard,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { CardProps } from "./types";
import { Institution } from "../../app/hooks/useQueryInstitutions";
import { Campaign } from "../../app/hooks/useQueryCampaigns";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as Io5 from "react-icons/io5";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";

export const iconLibraries: { [key: string]: any } = {
  "gi": GiIcons,
  "md": MdIcons,
  "io5": Io5,
  "bi": BiIcons,
  "fa": FaIcons,
};

export default function Card<T extends Institution & Partial<Campaign>>({
  item,
  onSelectItem,
}: CardProps<T>) {
  console.log(item);

  return (
    <ChakraCard
      onClick={() => onSelectItem(item.id)}
      h={580}
      minW={400}
      w={400}
      my={4}
      transition={"transform 0.3s ease-in-out"}
      _hover={{
        shadow: "md",
        transform: "translateY(-10px)",
        transitionDuration: "0.3s",
        transitionTimingFunction: "ease-in-out",
        cursor: "pointer",
      }}
    >
      <Image
        width={400}
        maxH={250}
        alt="123"
        objectFit={'cover'}
        src={item?.images?.[0]?.url ?? "https://placehold.jp/400x300.png"}
        borderRadius={8}
        borderBottomRadius={0}
      />
      <VStack
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        h="100%"
        px={4}
        py={6}
      >
        <Stack>
          <Text fontSize={"2xl"} fontWeight={700}>
            {item.name}
          </Text>
          <HStack marginTop="auto" paddingBottom={4} overflow="hidden" position="relative">
            <Box
              as="div"
              display="flex"
              overflowX="hidden"
              maxW="100%"
              whiteSpace="nowrap"

            >
              <Wrap spacing={2} justify="start">
                {item?.tags?.map((tag) => {
                  const Element =
                    tag?.iconLibrary && tag?.icon
                      ? iconLibraries[tag?.iconLibrary][tag.icon]
                      : null;

                  return (
                    <WrapItem key={tag.id}>
                      <HStack
                        key={tag?.id}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        {Element && <Element size={16} color={"#98BA80"} />}
                        <Text mr={4} fontSize={"sm"} color={"brand.green"} fontWeight={500}>
                          {tag?.name}
                        </Text>
                      </HStack>
                    </WrapItem>
                  );
                })}

              </Wrap>
            </Box>
            {/* Overlay com efeito de blur no final do HStack */}
            <Box
              position="absolute"
              right="0"
              top="0"
              bottom="0"
              width="40px"
              bg="white" // mesma cor do fundo do componente
              style={{ backdropFilter: "blur(4px)" }}
            />
          </HStack>
          {/* {!!item.startDate && (
            <HStack>
              <Text fontStyle={"italic"}>De {item.startDate} até </Text>
              <Text fontStyle={"italic"}>{item.endDate}</Text>
            </HStack>
          )} */}
          <Box
            position="relative"
            maxW="360px"
            maxHeight="130px" // Controla a altura do texto antes do efeito de desfoque
            overflow="hidden"
            fontSize={14}
            fontFamily="Montserrat"
          >
            <Markdown>
              {item.description}
            </Markdown>
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              height="40px" // Altura do efeito de desfoque
              bgGradient="linear(to-b, transparent, white)"
            />
          </Box>
        </Stack>

        <Text color={"brand.green"} fontWeight={700}>
          Saiba mais
        </Text>
      </VStack>
    </ChakraCard>
  );
}
