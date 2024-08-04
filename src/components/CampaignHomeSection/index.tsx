import {
  Flex,
  HStack,
  Text
} from "@chakra-ui/react";
import useQueryCampaigns, { Campaign } from "~/app/hooks/useQueryCampaigns";
import Card from "../Card";
import EntitySectionHeader from "../EntitySectionHeader";
import { CampaignHomeSectionProps } from "./types";

export default function CampaignHomeSection({
  onSelectCampaign,
}: CampaignHomeSectionProps) {
  const { data: campaigns, isLoading: isLoadingCampaigns } =
    useQueryCampaigns();
  return (
    <div id="campanhas" style={{ background: "#B6C7AA33" }}>
      <Flex h={"calc(100vh)"} flexDir={"column"} mx={12} mt={24}>
        <EntitySectionHeader
          title="Campanhas"
          subtitle="Apoie campanhas em todo o Brasil"
          hrefViewAllPage="/campaigns"
        />

        <HStack
          spacing={6}
          pt={6}
          pb={2}
          w="92vw"
          overflowX={"scroll"}
          overflowY={"hidden"}
          scrollBehavior={"smooth"}
        >
          {isLoadingCampaigns ? (
            <Text>carregando</Text>
          ) : (
            campaigns?.map((campaign) => {
              return (
                <Card<Campaign>
                  item={campaign}
                  onSelectItem={(campaignId) => {
                    onSelectCampaign(campaigns, campaignId);
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
