import { Button, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { EntitySectionHeaderProps } from "./types";

export default function EntitySectionHeader({
  title,
  subtitle,
  hrefViewAllPage,
}: EntitySectionHeaderProps) {
  return (
    <HStack alignItems={"center"} justifyContent={"space-between"} mb={4}>
      <VStack alignItems={"flex-start"} mt={6}>
        <Text fontSize={"4xl"} fontWeight={"600"}>
          {title}
        </Text>
        <Text fontSize={"xl"}>{subtitle}</Text>
      </VStack>
      <Link href={hrefViewAllPage}>
        <Button fontWeight={400} variant="ghost" fontSize={"lg"}>
          Ver todas
        </Button>
      </Link>
    </HStack>
  );
}
