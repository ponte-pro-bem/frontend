"use client"

import { Box, Button, Flex, HStack, Spacer } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from '~/app/logo';
export default function PageHeader() {
  const [activeSection, setActiveSection] = useState('#inicio')

  const menuItems = [
    {
      name: 'Sobre o projeto',
      link: '#sobre-o-projeto',
    },
    {
      name: 'Organizações',
      link: '#organizacoes',
    },
    {
      name: 'Campanhas',
      link: '#campanhas',
    },
    {
      name: 'Contato',
      link: '#contato',
    },
  ];
  const route = useRouter();
  const handleClick = (link) => {
    route.push(link)
    setActiveSection(link)
  
  };


  const a = usePathname()
  useEffect(() => {
    console.log(a)
  }, [])

  return (
    <Flex
    position={'fixed'}
    w='100%'
    zIndex={2}
    h={24}
      py={3}
      px={10}
      bg={'white'}
      justifyContent="center"
      alignItems="center"
      boxShadow="0 0 10px 0 rgba(100,100,100,0.2)"
    >

      <Button onClick={() => {
        handleClick('#inicio')
      }} variant={'ghost'} _hover={{
        bg: 'transparent'
      }}>
      <Logo />
      </Button>
      <Spacer></Spacer>
      <HStack
      >

      {menuItems.map((item, index) => (
        <Button fontWeight={activeSection === item.link ? 700 : 400}   _hover={{
          backgroundColor: 'brand.lightGreen',
          fontWeight: 700
        }} fontSize={'lg'} variant={'ghost'} key={index} onClick={() => handleClick(item.link)}>
          {item.name}
        </Button>
      ))}
      </HStack>
    </Flex>
  );
}
