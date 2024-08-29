"use client";
import { Button, Flex, HStack, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Logo from "../../app/logo";
import { useNavigate } from "react-router";

import { Link, animateScroll } from "react-scroll";

export default function PageHeader() {
  const [activeSection, setActiveSection] = useState("#inicio");
  const navigate = useNavigate();
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
  // const route = useRouter();
  const handleClick = (link: string) => {
    // navigate(link);
    setActiveSection(link);
  };

  return (
    <Flex
      position={"fixed"}
      w="100%"
      zIndex={2}
      h={24}
      py={3}
      px={10}
      bg={"white"}
      justifyContent="center"
      alignItems="center"
      boxShadow="0 0 10px 0 rgba(100,100,100,0.2)"
    >
      <Button
        onClick={() => {
    animateScroll.scrollToTop()

        }}
        variant={"ghost"}
        _hover={{
          bg: "transparent",
        }}
      >
        <Logo />
      </Button>
      <Spacer></Spacer>
      <HStack>
        {menuItems.map((item, index) => (
          <Link
            to={item.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button
              fontWeight={activeSection === item.link ? 700 : 400}
              _hover={{
                backgroundColor: "brand.lightGreen",
              }}
              fontSize={"lg"}
              variant={"ghost"}
              key={index}
              onClick={() => handleClick(item.link)}
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </HStack>
    </Flex>
  );
}
