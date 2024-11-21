import { Flex, HStack, Text } from "@chakra-ui/react";
import Card from "../Card";
import EntitySectionHeader from "../EntitySectionHeader";
import { CampaignHomeSectionProps } from "./types";
import { HomeSectionListPlaceholder } from "../HomeSectionListPlaceholder";
import useQueryCampaigns, { Campaign } from "../../app/hooks/useQueryCampaigns";

export default function CampaignHomeSection({
  onSelectCampaign,
}: CampaignHomeSectionProps) {
  const {
    data: campaigns,
    isLoading: isLoadingCampaigns,
    error,
  } = useQueryCampaigns();
  return (
    <div id="campanhas" style={{ background: "#B6C7AA33" }}>
      <Flex flexDir={"column"} mx={12} mt={24}>
        <EntitySectionHeader
          title="Campanhas"
          subtitle="Apoie campanhas em todo o Brasil"
          hrefViewAllPage="/campanhas"
        />

        <HStack
          spacing={6}
          pt={6}
          pb={2}
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
            isLoading={isLoadingCampaigns}
            error={!!error}
            isEmpty={campaigns?.length === 0}
          />
          {!isLoadingCampaigns &&
            !error &&
            campaigns &&
            campaigns?.map((campaign) => {
              return (
                <Card<Campaign>
                  key={campaign.id || campaign.name}
                  item={campaign}
                  onSelectItem={(campaignId) => {
                    onSelectCampaign(campaigns, campaignId);
                  }}
                />
              );
            })}
        </HStack>
      </Flex>
    </div>
  );
}
