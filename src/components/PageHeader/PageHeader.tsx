"use client";
import {
  Button,
  Flex,
  HStack,
  VStack,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Hide,
  Show,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState, useRef } from "react";
import Logo, { MiniLogo } from "../../app/logo";
import { Link, animateScroll } from "react-scroll";
import { useUserStore } from '../../stores/useUserStore';

const menuItems = [
  {
    name: "Sobre o projeto",
    link: "sobre-o-projeto",
  },
  {
    name: "Organizações",
    link: "organizacoes",
  },
  {
    name: "Campanhas",
    link: "campanhas",
  },
  {
    name: "Contato",
    link: "contato",
  },
];

export default function PageHeader() {
  const [activeSection, setActiveSection] = useState("#inicio");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  
  // Usar o store do Zustand
  const { user } = useUserStore();

  const handleClick = (link: string) => {
    setActiveSection(link);
  };

  const MenuLink = ({ item, isMobile = false }: any) => (
    // @ts-ignore
    <Link to={item.link} spy={true} smooth={true} offset={-70} duration={500}>
      <Button
        fontWeight={activeSection === item.link ? 700 : 400}
        _hover={{
          backgroundColor: "brand.lightGreen",
        }}
        fontSize={"lg"}
        variant={"ghost"}
        onClick={() => {
          handleClick(item.link);
          isMobile && onClose();
        }}
        width={isMobile ? "full" : "auto"}
      >
        {item.name}
      </Button>
    </Link>
  );

  return (
    <Flex
      position={"fixed"}
      w="100%"
      zIndex={2}
      h={{ base: 16, md: 24 }}
      py={3}
      px={{ base: 4, md: 10 }}
      bg={"white"}
      justifyContent="center"
      alignItems="center"
      boxShadow="0 0 10px 0 rgba(100,100,100,0.2)"
    >
      <Flex
        w={"35px"}
        onClick={() => {
          animateScroll.scrollToTop();
        }}
        h={{ base: 16, md: 24 }}
        alignItems={"center"}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Hide below="md">
          <Logo />
        </Hide>
        <Show below="md">
          <MiniLogo />
        </Show>
      </Flex>

      <Spacer />

      <Show below="md">
        <Text
          onClick={() => {
            animateScroll.scrollToTop();
          }}
          _hover={{
            opacity: 0.9,
            cursor: "pointer",
          }}
          fontWeight={"600"}
        >
          Ponte do bem
        </Text>
      </Show>
      <Spacer />

      {/* Desktop Menu */}
      <HStack display={{ base: "none", md: "flex" }}>
        {menuItems.map((item, index) => (
          <MenuLink key={index} item={item} />
        ))}

        {user?.name ? (
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="bold"
            lineHeight="shorter"
          >
            Olá,{" "}
            <Text
              color="brand.green"
              as="span"
              css={{ textTransform: "capitalize" }}
            >
              {user.name.split(" ")[0] || "visitante"}
            </Text>
            !
          </Text>
        ) : null}
      </HStack>

      {/* Mobile Menu Trigger */}
      <IconButton
        ref={btnRef}
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        bg={"transparent"}
        color={"gray.700"}
        aria-label="Open Menu"
        w={"35px"}
        icon={<HamburgerIcon />}
      />

      {/* Mobile Drawer Menu */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent marginTop={{ base: 16 }}>
          <DrawerCloseButton />
          <DrawerBody mt={16}>
            <VStack spacing={4} align="stretch">
              {menuItems.map((item, index) => (
                <MenuLink key={index} item={item} isMobile={true} />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
