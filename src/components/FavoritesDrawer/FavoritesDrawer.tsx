'use client';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Text,
  Tooltip,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { RxEyeOpen, RxHeartFilled, RxTrash } from 'react-icons/rx';
import { useFavoritesStore } from '~/store/favorites';
import { capitalize } from '~/utils/strings';

export default function FavoritesDrawer() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const route = useRouter();

  return (
    <>
      <Button
        variant="unstyled"
        onClick={onOpen}
        w="fit-content"
        mb={6}
        rightIcon={<RxHeartFilled />}
        _hover={{
          opacity: 0.7,
        }}
      >
        See my favorites
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent minW="30%">
          <DrawerCloseButton />
          <DrawerHeader>Your favorite items</DrawerHeader>

          <DrawerBody>

            <VStack spacing={4} mt={8}>
              {
                Object.entries(favorites).map(([id, { Title }]) => (
                  <HStack key={id} justifyContent="space-between" alignItems="center" w="100%">
                    <Text w="90%" textAlign="start">
                      {capitalize(Title)}
                    </Text>
                    <HStack spacing={0}>
                      <Tooltip label="View">
                        <IconButton
                          aria-label="Delete"
                          variant="ghost"
                          icon={<RxEyeOpen />}
                          size="lg"
                          _hover={{ color: 'blue.600' }}
                          onClick={() => {
                            onClose();
                            route.push(`/details/${id}`);
                          }}
                        />
                      </Tooltip>
                      <Tooltip label="Delete">

                        <IconButton
                          aria-label="Delete"
                          variant="ghost"
                          icon={<RxTrash />}
                          size="lg"
                          _hover={{ color: 'red.600' }}
                          onClick={() => removeFavorite(Number(id))}
                        />
                      </Tooltip>
                    </HStack>
                  </HStack>
                ))
            }
            </VStack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  );
}
