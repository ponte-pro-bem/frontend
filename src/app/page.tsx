"use client";

import {
  Flex
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AboutHomeSection from "~/components/AboutHomeSection";
import CampaignHomeSection from "~/components/CampaignHomeSection";
import ContactHomeSection from "~/components/ContactHomeSection";
import DetailsDrawerHome from "~/components/DetailsDrawerHome";
import FooterHome from "~/components/FooterHome";
import InstitutionHomeSection from "~/components/InstitutionsHomeSection";
import PageHeader from "~/components/PageHeader/PageHeader";
import HomeIllustration from "~/components/PresentationHomeSection";
import useHomeController, { ENTITY } from "./page.controller";

export default function Home() {
  const {
    onSelectItem,
    isOpen,
    onClose,
    selectedCampaign,
    selectedInstitution,
  } = useHomeController();

  return (
    <main>
      <Flex flexDir="column">
        <PageHeader />

        <HomeIllustration />

        <AboutHomeSection />

        <InstitutionHomeSection
          onSelectInstitution={(institutions, institutionId) => {
            onSelectItem(institutions, institutionId, ENTITY.INSTITUTIONS);
          }}
        />

        <CampaignHomeSection
          onSelectCampaign={(campaigns, campaignId) => {
            onSelectItem(campaigns, campaignId, ENTITY.CAMPAIGNS);
          }}
        />

        <ContactHomeSection />

        <FooterHome />
      </Flex>

      <DetailsDrawerHome
        item={selectedCampaign ?? selectedInstitution}
        isOpen={isOpen}
        onClose={onClose}
      />
    </main>
  );
}
