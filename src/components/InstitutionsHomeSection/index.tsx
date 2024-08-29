import { Flex, HStack } from "@chakra-ui/react";

import useQueryInstitutions, { Institution } from "../../app/hooks/useQueryInstitutions";
import Card from "../Card";
import EntitySectionHeader from "../EntitySectionHeader";
import { HomeSectionListPlaceholder } from "../HomeSectionListPlaceholder";
import { InstitutionSectionProps } from "./types";

export default function InstitutionHomeSection({
  onSelectInstitution,
}: InstitutionSectionProps) {
  const { data: institutions, isLoading: isLoadingInstitutions, error, ...rest } =
    useQueryInstitutions();

  return (
    <div id="organizacoes">
      <Flex h={"calc(100vh)"} flexDir={"column"} mx={12} mt={24}>
        <EntitySectionHeader
          title="Organizações"
          subtitle="Colabore com nossas organizações parceiras"
          hrefViewAllPage={"/organizacoes"}
        />

        <HStack
          spacing={6}
          pt={6}
          w="92vw"
          overflowX={"scroll"}
          overflowY={"hidden"}
          scrollBehavior={"smooth"}
          css={{
            "&::-webkit-scrollbar": {
              width: "16px",
              borderRadius: "8px",
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
          }}
        >
          <HomeSectionListPlaceholder 
            isLoading={isLoadingInstitutions}
            error={!!error}
          />
          {!isLoadingInstitutions && !error && institutions && (
            institutions?.map((institution) => {
              return (
                <Card<Institution>
                  key={institution.id}
                  item={institution}
                  onSelectItem={(institutionId) => {
                    onSelectInstitution(institutions, institutionId);
                  }}
                />
              );
            })
          )}
        </HStack>
      </Flex>
    </div>
  );
}
