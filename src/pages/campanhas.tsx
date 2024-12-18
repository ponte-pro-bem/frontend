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
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import fuzzysort from "fuzzysort";
import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Card, { iconLibraries } from "../components/Card";
import useQueryCampaigns, { Campaign } from "../app/hooks/useQueryCampaigns";
import DetailsDrawerHome from "../components/DetailsDrawerHome";
import Elipse from "../app/illustrations/elipse";
import { useNavigate } from "react-router";
import { BiGhost } from "react-icons/bi";
// import useQueryCampaigns, { Campaign } from "~/app/hooks/useQueryCampaigns";
// import Elipse from "~/app/illustrations/elipse";
// import RootLayout from "~/app/layout";
// import Card from "~/components/Card";
// import DetailsDrawerHome from "~/components/DetailsDrawerHome";

export const CampaignsLis = () => {
  const { data: campaigns, isLoading: isLoadingCampaigns } =
    useQueryCampaigns();
  // const { back } = useRouter();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
    null
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSelectItem = (itemList: Campaign[], itemId: string) => {
    const [item] = itemList.filter(({ id }) => id === itemId);

    setSelectedCampaign(item as Campaign);

    onOpen();
  };


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
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const filteredCampaigns = useMemo(() => {
    if (!campaigns) return [];

    let filtered = campaigns;

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
  }, [searchText, selectedTags, campaigns]);
  const [availableFilterTag, setAvailableFilterTag] = useState<any>();
  useEffect(() => {
    if (!campaigns) return;

    const uniqueTags = Array.from(
      new Map(
        campaigns.flatMap((item) => item.tags).map(tag => [tag.name, tag])
      ).values()
    );
    setAvailableFilterTag(uniqueTags);
  }, [campaigns]);

  return (
    <Flex position="relative">
      <Box position="absolute" zIndex={1} top={0} right={-40}>
        <Elipse />
      </Box>
      <Box px={24} py={12} zIndex={1} w="100%">
        <HStack spacing={6}>
          <Button
            fontSize="2xl"
            variant="ghost"
            px={3}
            ml={-3}
            leftIcon={<FaChevronLeft />}
            aria-label="Voltar"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Text fontSize="2xl" fontWeight={700}>
              Voltar
            </Text>
          </Button>
        </HStack>
        <Text mt={6} fontSize="5xl" fontWeight={700}>
          Campanhas
        </Text>
        <Input
          bg="white"
          fontSize="xl"
          my={12}
          w="50%"
          placeholder="Pesquise por campanhas"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Box py={6}>
          <FilterTags availableFilterTag={availableFilterTag} />
        </Box>
        {isLoadingCampaigns ? (
          <Flex width="100%" height="100%" justify="center" align="center">
            <Text fontSize={20}>Buscando campanhas...</Text>
          </Flex>
        ) : filteredCampaigns?.length === 0 ? (
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
          <Grid templateColumns="repeat(5, 1fr)" gap={6} w="100%">
            {filteredCampaigns?.map((campaign) => (
              <GridItem key={campaign.id}>
                <Card<Campaign>
                  item={campaign}
                  onSelectItem={(campaignId) => {
                    onSelectItem(filteredCampaigns, campaignId);
                  }}
                />
              </GridItem>
            ))}
          </Grid>
        )}
      </Box>

      <DetailsDrawerHome
        item={selectedCampaign}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
};

// const Campaigns = () => {
//   return (
//     <RootLayout>
//       <CampaignsLis />
//     </RootLayout>
//   );
// };

export default CampaignsLis;
