"use client";

import RootLayout from "~/app/layout";
import Providers from "~/app/providers";
import CampaignHomeSection from "~/components/CampaignHomeSection";

export default function Campaigns() {
  return (
    <RootLayout>
        <CampaignHomeSection onSelectCampaign={() => {}} />
    </RootLayout>
  );
}
