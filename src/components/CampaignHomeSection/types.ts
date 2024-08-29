import { Campaign } from "../../app/hooks/useQueryCampaigns";

export interface CampaignHomeSectionProps {
  onSelectCampaign: (campaigns: Campaign[], campaignId: string) => void;
}
