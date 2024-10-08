"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import fuzzysort from 'fuzzysort';
import { useMemo, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Card from "../components/Card";
import useQueryCampaigns, { Campaign } from "../app/hooks/useQueryCampaigns";
import DetailsDrawerHome from "../components/DetailsDrawerHome";
import Elipse from "../app/illustrations/elipse";
import { useNavigate } from "react-router";
// import useQueryCampaigns, { Campaign } from "~/app/hooks/useQueryCampaigns";
// import Elipse from "~/app/illustrations/elipse";
// import RootLayout from "~/app/layout";
// import Card from "~/components/Card";
// import DetailsDrawerHome from "~/components/DetailsDrawerHome";

export const CampaignsLis = () => {
  const { data: campaigns, isLoading: isLoadingCampaigns } = useQueryCampaigns();
  // const { back } = useRouter();
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState("");

  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSelectItem = (itemList: Campaign[], itemId: string) => {
    const [item] = itemList.filter(({ id }) => id === itemId)

      setSelectedCampaign(item as Campaign);

    onOpen();
  };

  const filteredCampaigns = useMemo(() => {
    if (!searchText) return campaigns;

    if (!campaigns) return [];

    return fuzzysort.go(searchText, campaigns, {
      keys: ['name', 'description'],
      threshold: -10000,
    }).map(result => result.obj);
  }, [searchText, campaigns]);

  return (
    <Flex position="relative">
      <Box position="absolute" zIndex={1} top={0} left={0}>
        <Elipse />
      </Box>
      <Box px={24} py={12} zIndex={1} w='100%'>
        <HStack spacing={6}>
          <Button
            fontSize="2xl"
            variant="ghost"
            px={3}
            ml={-3}
            leftIcon={<FaChevronLeft />}
            aria-label="Voltar"
            onClick={() => { navigate(-1) }}
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
        {isLoadingCampaigns ? (
          <Flex width='100%' height='100%' justify='center' align='center'>
            <Text fontSize={20}>Buscando campanhas...</Text>
          </Flex>
        ) : filteredCampaigns?.length === 0 ? (
          <Flex width='100%' height='100%' justify='center' align='center'>
          <Text fontSize={20}>Ops! Nenhuma campanhas foi encontrada.</Text>
        </Flex>
        ): (
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
