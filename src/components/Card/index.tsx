import {
    Card as ChakraCard,
    HStack,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { CardProps } from "./types";
import { Institution } from "~/app/hooks/useQueryInstitutions";
import { Campaign } from "~/app/hooks/useQueryCampaigns";

export default function Card<T extends Institution & Partial<Campaign>>({ item,  onSelectItem }: CardProps<T>) {
  return (
    <ChakraCard
      onClick={() => onSelectItem(item.id)}
      h={580}
      minW={400}
      w={400}
      transition={"all 1.5s easy-in-out"}
      _hover={{
        transform: "scale(1.01)",
        cursor: "pointer",
      }}
    >
      <Image
        height={300}
        width={400}
        alt="123"
        src={"https://placehold.jp/400x300.png"}
      />
      <VStack
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        h="100%"
        px={4}
        py={6}
      >
        <Stack>
          <Text fontSize={"2xl"} fontWeight={700}>
            {item.name}
          </Text>
          {!!item.startDate && (
            <HStack>
              <Text fontStyle={"italic"}>De {item.startDate} até </Text>
              <Text fontStyle={"italic"}>{item.endDate}</Text>
            </HStack>
          )}
          <Text fontSize={"md"} noOfLines={3}>
            {item.description}
          </Text>
        </Stack>
        <Text color={"brand.green"} fontWeight={700}>
          Ver mais
        </Text>
      </VStack>
    </ChakraCard>
  );
}
