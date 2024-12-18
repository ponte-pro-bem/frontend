// import { Flex, HStack, Text } from "@chakra-ui/react";
// import Card from "../Card";
// import EntitySectionHeader from "../EntitySectionHeader";
// import { CampaignHomeSectionProps } from "./types";
// import { HomeSectionListPlaceholder } from "../HomeSectionListPlaceholder";
// import useQueryCampaigns, { Campaign } from "../../app/hooks/useQueryCampaigns";

// export default function CampaignHomeSection({
//   onSelectCampaign,
// }: CampaignHomeSectionProps) {
//   const {
//     data: campaigns,
//     isLoading: isLoadingCampaigns,
//     error,
//   } = useQueryCampaigns();
//   return (
//     <div id="campanhas" style={{ background: "#B6C7AA33" }}>
//       <Flex flexDir={"column"} mx={12} mt={24}>
//         <EntitySectionHeader
//           title="Campanhas"
//           subtitle="Apoie campanhas em todo o Brasil"
//           hrefViewAllPage="/campanhas"
//         />

//         <HStack
//           spacing={6}
//           pt={6}
//           pb={2}
//           w="92vw"
//           overflowX={"scroll"}
//           overflowY={"hidden"}
//           scrollBehavior={"smooth"}
//           css={{
//             "&::-webkit-scrollbar": {
//               width: "16px",
//               borderRadius: "8px",
//               backgroundColor: `rgba(0, 0, 0, 0.05)`,
//             },
//             "&::-webkit-scrollbar-thumb": {
//               backgroundColor: `rgba(0, 0, 0, 0.05)`,
//             },
//           }}
//         >
//           <HomeSectionListPlaceholder
//             isLoading={isLoadingCampaigns}
//             error={!!error}
//             isEmpty={campaigns?.length === 0}
//           />
//           {!isLoadingCampaigns &&
//             !error &&
//             campaigns &&
//             campaigns?.map((campaign) => {
//               return (
//                 <Card<Campaign>
//                   key={campaign.id || campaign.name}
//                   item={campaign}
//                   onSelectItem={(campaignId) => {
//                     onSelectCampaign(campaigns, campaignId);
//                   }}
//                 />
//               );
//             })}
//         </HStack>
//       </Flex>
//     </div>
//   );
// }
import { 
  Flex, 
  HStack, 
  Box, 
  Text,
  useBreakpointValue,
  chakra,
  Icon
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDesktop = useBreakpointValue({ base: false, md: true });

  // Custom scrolling function for mobile
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const cardWidth = carousel.children[0]?.clientWidth || 300; // Fallback width
      const scrollAmount = direction === 'right' 
        ? cardWidth + 16 // Add some spacing
        : -(cardWidth + 16);
      
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="campanhas" style={{ background: "#B6C7AA33" }}>
      <Flex 
        flexDir="column" 
        mx={{ base: 4, md: 12 }} 
        mt={{ base: 12, md: 24 }}
      >
        <EntitySectionHeader
          title="Campanhas"
          subtitle="Apoie campanhas em todo o Brasil"
          hrefViewAllPage="/campanhas"
        />

        {/* Desktop View */}
        {isDesktop ? (
          <HStack
            spacing={6}
            pt={6}
            pb={2}
            w="full"
            overflowX="scroll"
            overflowY="hidden"
            scrollBehavior="smooth"
            css={{
              "&::-webkit-scrollbar": {
                width: "16px",
                borderRadius: "8px",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
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
              campaigns?.map((campaign) => (
                <Card<Campaign>
                  key={campaign.id || campaign.name}
                  item={campaign}
                  onSelectItem={(campaignId) => {
                    onSelectCampaign(campaigns, campaignId);
                  }}
                />
              ))}
          </HStack>
        ) : (
          // Mobile View with Custom Carousel
          <Box position="relative" w="full">
            {/* Carousel Navigation */}
            {currentSlide > 0 && (
              <chakra.button
                position="absolute"
                left="0"
                top="50%"
                transform="translateY(-50%)"
                zIndex={10}
                bg="white"
                boxShadow="md"
                borderRadius="full"
                p={2}
                onClick={() => scrollCarousel('left')}
              >
                <Icon as={ChevronLeftIcon} w={6} h={6} />
              </chakra.button>
            )}

            {/* Carousel Container */}
            <HStack
              ref={carouselRef}
              spacing={4}
              pt={6}
              pb={2}
              w="full"
              overflowX="auto"
              overflowY="hidden"
              scrollBehavior="smooth"
              sx={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                "&::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
                scrollbarWidth: "none"
              }}
            >
              <HomeSectionListPlaceholder
                isLoading={isLoadingCampaigns}
                error={!!error}
                isEmpty={campaigns?.length === 0}
              />
              {!isLoadingCampaigns &&
                !error &&
                campaigns?.map((campaign, index) => (
                  <Box 
                    key={campaign.id || campaign.name} 
                    flex="0 0 auto" 
                    w={{ base: "80vw", sm: "70vw" }}
                    scrollSnapAlign="start"
                    mr={{ base: 2, md: 4 }}
                  >
                    <Card<Campaign>
                      item={campaign}
                      onSelectItem={(campaignId) => {
                        onSelectCampaign(campaigns, campaignId);
                      }}
                    />
                  </Box>
                ))}
            </HStack>

            {/* Right Navigation */}
            {campaigns && currentSlide < campaigns.length - 1 && (
              <chakra.button
                position="absolute"
                right="0"
                top="50%"
                transform="translateY(-50%)"
                zIndex={10}
                bg="white"
                boxShadow="md"
                borderRadius="full"
                p={2}
                onClick={() => scrollCarousel('right')}
              >
                <Icon as={ChevronRightIcon} w={6} h={6} />
              </chakra.button>
            )}

            {/* Pagination Dots */}
            <Flex 
              justify="center" 
              mt={4}
              display={campaigns && campaigns.length > 1 ? "flex" : "none"}
            >
              {campaigns?.map((_, index) => (
                <Box
                  key={index}
                  w={2}
                  h={2}
                  mx={1}
                  bg={currentSlide === index ? "brand.green" : "gray.300"}
                  borderRadius="full"
                />
              ))}
            </Flex>
          </Box>
        )}
      </Flex>
    </div>
  );
}