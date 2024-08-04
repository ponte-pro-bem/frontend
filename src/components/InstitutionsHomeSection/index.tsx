import { Flex, HStack, Text } from "@chakra-ui/react";
import useQueryInstitutions, {
  Institution,
} from "~/app/hooks/useQueryInstitutions";
import Card from "../Card";
import EntitySectionHeader from "../EntitySectionHeader";
import { InstitutionSectionProps } from "./types";

export default function InstitutionHomeSection({
  onSelectInstitution,
}: InstitutionSectionProps) {
  const { data: institutions, isLoading: isLoadingInstitutions } =
    useQueryInstitutions();

  return (
    <div id="organizacoes">
      <Flex h={"calc(100vh)"} flexDir={"column"} mx={12} mt={24}>
        <EntitySectionHeader
          title="Organizações"
          subtitle="Colabore com nossas organizações parceiras"
          hrefViewAllPage="/organizacoes"
        />

        <HStack
          spacing={6}
          pt={6}
          w="92vw"
          overflowX={"scroll"}
          overflowY={"hidden"}
          scrollBehavior={"smooth"}
        >
          {isLoadingInstitutions ? (
            <Text>CARREGANDO</Text>
          ) : (
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
