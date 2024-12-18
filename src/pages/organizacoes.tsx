"use client";

import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import fuzzysort from "fuzzysort";
import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import useQueryInstitutions, {
  Institution,
} from "../app/hooks/useQueryInstitutions";
import DetailsDrawerHome from "../components/DetailsDrawerHome";
import Elipse from "../app/illustrations/elipse";
import Card, { iconLibraries } from "../components/Card";
import { Campaign } from "../app/hooks/useQueryCampaigns";
import { useNavigate } from "react-router";
import { BiGhost } from "react-icons/bi";

// const FilterTags = ({ availableFilterTag, setSearchText }: any) => {
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);
//   if (!availableFilterTag) return null;

//   const handleTagClick = (tagName: string) => {
//     // Verifica se a tag já está selecionada
//     if (selectedTags.includes(tagName)) {
//       // Remove a tag se já estiver selecionada
//       const updatedTags = selectedTags.filter((tag) => tag !== tagName);
//       setSelectedTags(updatedTags);
//       setSearchText(updatedTags.join(", "));
//     } else {
//       // Adiciona a tag ao array de selecionadas
//       const updatedTags = [...selectedTags, tagName];
//       setSelectedTags(updatedTags);
//       setSearchText(updatedTags.join(", "));
//     }
//   };

//   const renderTagButton = (tag: any) => {
//     const Icon =
//       tag?.iconLibrary && tag.icon
//         ? iconLibraries[tag.iconLibrary][tag.icon]
//         : null;

//     const isSelected = selectedTags.includes(tag?.name);

//     return (
//       <Button
//         key={tag?.id || tag?.name}
//         px={3}
//         variant="ghost"
//         _hover={{
//           color: "brand.green",
//           transition: "all 0.3s ease-in-out",
//         }}
//         bg={isSelected ? "brand.green" : "transparent"}
//         color={isSelected ? "white" : "inherit"}
//         onClick={() => handleTagClick(tag?.name)}
//         leftIcon={Icon ? <Icon /> : undefined}
//       >
//         {tag?.name}
//       </Button>
//     );
//   };

//   return <HStack spacing={4}>{availableFilterTag.map(renderTagButton)}</HStack>;
// };
export const InstitutionsPage = () => {
  const { data: institutions, isLoading: isLoadingInstitutions } =
    useQueryInstitutions();
  const [availableFilterTag, setAvailableFilterTag] = useState<any>();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedInstitution, setSelectedInstitution] =
    useState<Institution | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSelectItem = (itemList: Institution[], itemId: string) => {
    const [item] = itemList.filter(({ id }) => id === itemId);
    setSelectedInstitution(item as Campaign);
    onOpen();
  };

  const filteredInstitutions = useMemo(() => {
    if (!institutions) return [];

    let filtered = institutions;

    // Filter by search text
    if (searchText) {
      filtered = fuzzysort
        .go(searchText, filtered, {
          keys: ["name", "description"],
          threshold: -10000,
        })
        .map((result) => result.obj);
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((institution) =>
        institution.tags?.some((tag) => selectedTags.includes(tag?.name))
      );
    }

    return filtered;
  }, [searchText, selectedTags, institutions]);

  useEffect(() => {
    if (!institutions) return;

    const uniqueTags = Array.from(
      new Map(
        institutions.flatMap((item) => item.tags).map(tag => [tag.name, tag])
      ).values()
    );
    setAvailableFilterTag(uniqueTags);
  }, [institutions]);
  const FilterTags = ({ availableFilterTag }: any) => {
    if (!availableFilterTag) return null;

    const handleTagClick = (tagName: string) => {
      setSelectedTags((prev) =>
        prev.includes(tagName)
          ? prev.filter((tag) => tag !== tagName)
          : [...prev, tagName]
      );
    };

    const renderTagButton = (tag: any) => {
      const Icon =
        tag?.iconLibrary && tag.icon
          ? iconLibraries[tag.iconLibrary][tag.icon]
          : null;
      const isSelected = selectedTags.includes(tag?.name);

      return (
        <Button
          key={tag?.id || tag?.name}
          // w={100g}
          w="fit-content"
          variant="ghost"
          _hover={{
            color: isSelected ? "white" : "brand.green",
            transition: "all 0.3s ease-in-out",
            bg: isSelected ? "lightgray" : "unset",
          }}
          bg={isSelected ? "brand.green" : "transparent"}
          color={isSelected ? "white" : "inherit"}
          onClick={() => handleTagClick(tag?.name)}
          leftIcon={Icon ? <Icon /> : undefined}
        >
          {tag?.name}
        </Button>
      );
    };

    return (
      <Wrap spacing={2} justify="start">
        {availableFilterTag.map((tag: any) => (
          <WrapItem key={tag?.id || tag?.name}>
            {renderTagButton(tag)}
          </WrapItem>
        ))}
      </Wrap>
    );
  };



  return (
    <Flex position="relative" overflow={"hidden"}>
      <Box position="absolute" zIndex={1} top={0} right={-40}>
        <Elipse />
      </Box>
      <Box px={{ base: 6, md: 12, lg: 24 }} py={12} zIndex={1} w="100%">
        <HStack spacing={6}>
          <Button
            fontSize="2xl"
            variant="ghost"
            px={3}
            ml={-3}
            leftIcon={<FaChevronLeft />}
            aria-label="Voltar"
            onClick={() => navigate(-1)}
          >
            <Text fontSize="2xl" fontWeight={700}>
              Voltar
            </Text>
          </Button>
        </HStack>
        <Text mt={6} fontSize="5xl" fontWeight={700}>
          Organizações
        </Text>
        <Input
          bg="white"
          fontSize="xl"
          mt={6}
          w={{
            base: "100%",
            "2xl": "50%",
          }}
          placeholder="Pesquise por organizações"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Box py={6}>
          <FilterTags availableFilterTag={availableFilterTag} />
        </Box>
        {isLoadingInstitutions ? (
          <Flex justify="center" align="center">
            <Text fontSize={20}>Buscando organizações...</Text>
          </Flex>
        ) : filteredInstitutions?.length === 0 ? (
          <Center h={580} minW={"100%"}>
            <VStack spacing={6}>
              <Icon as={BiGhost} fontSize="4xl" />
              <Text fontSize={"xl"} textAlign={'center'}>
                {" "}
                Sinto muito, no momento não temos resultados.
              </Text>
            </VStack>
          </Center>
        ) : (
          <SimpleGrid
            columns={{ base: 1, md: 2, xl: 3, "2xl": 4 }}
            gap={12}
            w="100%"
          >
            {filteredInstitutions?.map((institution) => (
              <GridItem key={institution.id}>
                <Card<Institution>
                  item={institution}
                  onSelectItem={(institutionId) => {
                    onSelectItem(filteredInstitutions, institutionId);
                  }}
                />
              </GridItem>
            ))}
          </SimpleGrid>
        )}
      </Box>
      <DetailsDrawerHome
        item={selectedInstitution}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
};

export default InstitutionsPage;
