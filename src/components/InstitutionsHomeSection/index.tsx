import {
  Flex,
  HStack,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

import useQueryInstitutions, {
  Institution,
} from "../../app/hooks/useQueryInstitutions";
import Card from "../Card";
import EntitySectionHeader from "../EntitySectionHeader";
import { HomeSectionListPlaceholder } from "../HomeSectionListPlaceholder";
import { InstitutionSectionProps } from "./types";

export default function InstitutionHomeSection({
  onSelectInstitution,
}: InstitutionSectionProps) {
  const {
    data: institutions,
    isLoading: isLoadingInstitutions,
    error,
  } = useQueryInstitutions();

  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <div id="organizacoes">
      <Flex
        h="calc(100vh)"
        flexDir="column"
        mx={{ base: 4, md: 12 }}
        mt={{ base: 12, md: 24 }}
      >
        <EntitySectionHeader
          title="Organizações"
          subtitle="Colabore com nossas organizações parceiras"
          hrefViewAllPage="/organizacoes"
        />

        {/* Desktop View */}
        {isDesktop ? (
          <HStack
            spacing={6}
            pt={6}
            w="full"
            overflowX="scroll"
            overflowY="hidden"
            scrollBehavior="smooth"
            css={{
              "&::-webkit-scrollbar": {
                width: "16px",
                borderRadius: "8px",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              },
            }}
          >
            <HomeSectionListPlaceholder
              isLoading={isLoadingInstitutions}
              isEmpty={institutions?.length === 0}
              error={!!error}
            />
            {!isLoadingInstitutions &&
              !error &&
              institutions?.map((institution) => (
                <Card<Institution>
                  key={institution.id}
                  item={institution}
                  onSelectItem={(institutionId) => {
                    onSelectInstitution(institutions, institutionId);
                  }}
                />
              ))}
          </HStack>
        ) : (
          // Mobile View with Horizontal Scroll
          <HStack
            spacing={4}
            pt={6}
            w="full"
            overflowX="auto"
            overflowY="hidden"
            scrollBehavior="smooth"
            css={{
              "&::-webkit-scrollbar": { display: "none" },
              msOverflowStyle: "none",
              scrollbarWidth: "none"
            }}
          >
            <HomeSectionListPlaceholder
              isLoading={isLoadingInstitutions}
              isEmpty={institutions?.length === 0}
              error={!!error}
            />
            {!isLoadingInstitutions &&
              !error &&
              institutions?.map((institution) => (
                <Box
                  key={institution.id}
                  // flex="0 0 auto"
                  // w={{ base: "80vw", sm: "70vw" }}
                  px={2} // Add padding for spacing
                >
                  <Card<Institution>
                    item={institution}
                    onSelectItem={(institutionId) => {
                      onSelectInstitution(institutions, institutionId);
                    }}
                  />
                </Box>
              ))}
          </HStack>
        )}
      </Flex>
    </div>
  );
}