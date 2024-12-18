// "use client";
// import { Button, Flex, HStack, Spacer } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import Logo from "../../app/logo";
// import { useNavigate } from "react-router";

// import { Link, animateScroll } from "react-scroll";

// export default function PageHeader() {
//   const [activeSection, setActiveSection] = useState("#inicio");
//   const navigate = useNavigate();
//   const menuItems = [
//     {
//       name: "Sobre o projeto",
//       link: "sobre-o-projeto",
//     },
//     {
//       name: "Organizações",
//       link: "organizacoes",
//     },
//     {
//       name: "Campanhas",
//       link: "campanhas",
//     },
//     {
//       name: "Contato",
//       link: "contato",
//     },
//   ];
//   // const route = useRouter();
//   const handleClick = (link: string) => {
//     // navigate(link);
//     setActiveSection(link);
//   };

//   return (
//     <Flex
//       position={"fixed"}
//       w="100%"
//       zIndex={2}
//       h={24}
//       py={3}
//       px={10}
//       bg={"white"}
//       justifyContent="center"
//       alignItems="center"
//       boxShadow="0 0 10px 0 rgba(100,100,100,0.2)"
//     >
//       <Button
//         onClick={() => {
//     animateScroll.scrollToTop()

//         }}
//         variant={"ghost"}
//         _hover={{
//           bg: "transparent",
//         }}
//       >
//         <Logo />
//       </Button>
//       <Spacer></Spacer>
//       <HStack>
//         {menuItems.map((item, index) => (
//           <Link
//             to={item.link}
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             <Button
//               fontWeight={activeSection === item.link ? 700 : 400}
//               _hover={{
//                 backgroundColor: "brand.lightGreen",
//               }}
//               fontSize={"lg"}
//               variant={"ghost"}
//               key={index}
//               onClick={() => handleClick(item.link)}
//             >
//               {item.name}
//             </Button>
//           </Link>
//         ))}
//       </HStack>
//     </Flex>
//   );
// }
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
  Text
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState, useRef } from "react";
import Logo, { MiniLogo } from "../../app/logo";
import { Link, animateScroll } from "react-scroll";

export default function PageHeader() {
  const [activeSection, setActiveSection] = useState("#inicio");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

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

  const handleClick = (link: string) => {
    setActiveSection(link);
  };

  const MenuLink = ({ item, isMobile = false }: any) => (
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
          animateScroll.scrollToTop()
        }}
        h={{ base: 16, md: 24 }}
        alignItems={'center'}
        _hover={{
          cursor: 'pointer'
        }}
        >
        <Hide below="md">
        <Logo />
        </Hide>
        <Show below="md">
          <MiniLogo/>
        </Show>
      </Flex>
      
      <Spacer />

<Show below="md">

      <Text  onClick={() => {
          animateScroll.scrollToTop()
        }} _hover={{
        opacity: 0.9,
        cursor: 'pointer'
      }} fontWeight={"600"}>Ponte do bem</Text>
</Show>
      <Spacer />
      
      {/* Desktop Menu */}
      <HStack display={{ base: "none", md: "flex" }}>
        {menuItems.map((item, index) => (
          <MenuLink key={index} item={item} />
        ))}
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
