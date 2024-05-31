'use client';

import {
  Box,
  Button,
  Text,
  VStack,
} from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import FakeApiHouses from '~/app/mock/fakeApi';
import { ContactAgentFormValues } from '~/app/mock/fakeApi.types';
import { fields, validationSchema } from './HouseDetailsContactAgentForm.constants';
import TextField from './components/TextField/TextField';

export default function ContactAgentForm() {
  const {
    handleSubmit, control, reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const mutationContactAgent = useMutation({
    mutationFn: FakeApiHouses.contactAgent,
  });

  const onSubmit = async (data: ContactAgentFormValues) => {
    await mutationContactAgent.mutateAsync(data);
    reset();
  };

  return (
    <Box
      w={{ base: '100%', md: '40%' }}
      pt={4}
    >

      <VStack spacing={4} w="100%" px="8" pb={{ base: 10, sm: 0 }}>
        <Text fontSize="xl" fontWeight="bold" mb={1}>Contact an agent for this opportunity!</Text>
        {
          fields.map((fieldItem) => (
            <TextField key={fieldItem.label} fieldItem={fieldItem} control={control} />
          ))
       }
        <Button
          type="submit"
          w="100%"
          onClick={handleSubmit(onSubmit)}
        >
          Contact Now
        </Button>
      </VStack>
    </Box>
  );
}
