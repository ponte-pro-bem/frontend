"use client";

import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    HStack,
    Input,
    SimpleGrid,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import fuzzysort from 'fuzzysort';
import { useMemo, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import useQueryInstitutions, { Institution } from "../app/hooks/useQueryInstitutions";
import DetailsDrawerHome from "../components/DetailsDrawerHome";
import Elipse from "../app/illustrations/elipse";
import Card from "../components/Card";
import { Campaign } from "../app/hooks/useQueryCampaigns";
// import { Campaign } from "~/app/hooks/useQueryCampaigns";
// import useQueryInstitutions, { Institution } from "~/app/hooks/useQueryInstitutions";
// import Elipse from "~/app/illustrations/elipse";
// import RootLayout from "~/app/layout";
// import Providers from "~/app/providers";
// import Card from "~/components/Card";
// import DetailsDrawerHome from "~/components/DetailsDrawerHome";

export const InstitutionsPage = () => {
  const { data: institutions, isLoading: isLoadingInstitutions } = useQueryInstitutions();
  // const { back } = useRouter();
  const [searchText, setSearchText] = useState("");

  const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSelectItem = (itemList: Institution[], itemId: string) => {
    const [item] = itemList.filter(({ id }) => id === itemId)

      setSelectedInstitution(item as Campaign);

    onOpen();
  };

  const filteredInstitutions = useMemo(() => {
    if (!searchText) return institutions;

    if (!institutions) return [];

    return fuzzysort.go(searchText, institutions, {
      keys: ['name', 'description'],
      threshold: -10000,
    }).map(result => result.obj);
  }, [searchText, institutions]);

  return (
    <Flex position="relative">
      <Box position="absolute" zIndex={1} top={0} left={0}>
        <Elipse />
      </Box>
      <Box px={24} py={12} zIndex={1}>
        <HStack spacing={6}>
          <Button
            fontSize="2xl"
            variant="ghost"
            px={3}
            ml={-3}
            leftIcon={<FaChevronLeft />}
            aria-label="Voltar"
            onClick={() => {}}
          >

          <Text fontSize="2xl" fontWeight={700}>
            Voltar
          </Text>
          </Button>
        </HStack>
        <Text mt={6} fontSize="5xl" fontWeight={700}>
          Instituições
        </Text>
        <Input
          bg="white"
          fontSize="xl"
          my={12}
          w={{
            base: '100%',
            '2xl': '50%',
          }}
          placeholder="Pesquise por campanhas"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {isLoadingInstitutions ? (
          <Text>Carregando...</Text>
        ) : filteredInstitutions?.length === 0 ? (
          <Text>Nenhuma instituição encontrada</Text>
        ) : (
          <SimpleGrid columns={{ base: 1, lg: 2, xl: 3, '2xl': 4 }} gap={6} w="100%">
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
