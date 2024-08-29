"use client";

import {
  Center,
  Flex,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
// import AboutHomeSection from "~/components/AboutHomeSection";
// import CampaignHomeSection from "~/components/CampaignHomeSection";
// import ContactHomeSection from "~/components/ContactHomeSection";
// import DetailsDrawerHome from "~/components/DetailsDrawerHome";
// import FooterHome from "~/components/FooterHome";
// import InstitutionHomeSection from "~/components/InstitutionsHomeSection";
// import PageHeader from "~/components/PageHeader/PageHeader";
// import HomeIllustration from "~/components/PresentationHomeSection";
import useHomeController, { ENTITY } from "./page.controller";
import PageHeader from "../components/PageHeader/PageHeader";
import HomeIllustration from "../components/PresentationHomeSection";
import AboutHomeSection from "../components/AboutHomeSection";
import InstitutionHomeSection from "../components/InstitutionsHomeSection";
import CampaignHomeSection from "../components/CampaignHomeSection";
import FooterHome from "../components/FooterHome";
import ContactHomeSection from "../components/ContactHomeSection";
import DetailsDrawerHome from "../components/DetailsDrawerHome";

export default function Home() {
  const {
    onSelectItem,
    isOpen,
    onClose,
    selectedCampaign,
    selectedInstitution,
  } = useHomeController();

  const [isDesktop] = useMediaQuery("(min-width: 800px)", {
    fallback: false,
    ssr: false,
  });

  if (!isDesktop) {
    return (
      <Center flexDir={"column"} h="100vh">
        <Text textAlign={"center"}>
          No momento não estamos disponíveis para dispositivos móveis
        </Text>
        <br />
        <Text>Acesse ao site utilizando um computador</Text>
      </Center>
    );
  }

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
