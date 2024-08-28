import { useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Campaign } from "./hooks/useQueryCampaigns";
import { Institution } from "./hooks/useQueryInstitutions";

export enum ENTITY {
  CAMPAIGNS = 'campaigns',
  INSTITUTIONS = 'institutions'
}

export default function useHomeController() {

  const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSelectItem = (itemList: Array<Institution | Campaign>, itemId: string, type: ENTITY) => {
    const [item] = itemList.filter(({ id }) => id === itemId)

    if (type === ENTITY.INSTITUTIONS) {
      setSelectedInstitution(item);
      setSelectedCampaign(null);
    }
    
    if (type === ENTITY.CAMPAIGNS) {
      setSelectedCampaign(item as Campaign);
      setSelectedInstitution(null);
    }

    onOpen();
  };

  return {
    onSelectItem,
    isOpen,
    onClose,
    selectedCampaign,
    selectedInstitution
  };
}
