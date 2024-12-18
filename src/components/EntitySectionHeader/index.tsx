import { Button, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { EntitySectionHeaderProps } from "./types";

export default function EntitySectionHeader({
  title,
  subtitle,
  hrefViewAllPage,
}: EntitySectionHeaderProps) {
  return (
    <HStack
      alignItems={{
        base: "flex-start",
        md: "center",
      }}
      justifyContent="space-between"
      mb={4}
      flexDir={{
        base: "column",
        md: "row",
      }}
    // flexWrap="wrap" // Permite que os itens se ajustem em telas menores
    >
      <VStack alignItems="flex-start" mt={6} spacing={1}>
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="600">
          {title}
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }}>{subtitle}</Text>
      </VStack>
      <Link href={hrefViewAllPage} mt={{ base: 4, md: 0 }} fontWeight={700}
        variant="ghost"
        fontSize={{ base: "md", md: "xl" }}
        color="brand.green">

        Ver todas
      </Link>
    </HStack>
  );
}