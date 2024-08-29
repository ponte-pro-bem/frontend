import { Campaign } from "../../app/hooks/useQueryCampaigns";
import { Institution } from "../../app/hooks/useQueryInstitutions";

export interface DetailsDrawerProps {
    item: Campaign | Institution | null;
    isOpen: boolean;
    onClose: () => void;
  }