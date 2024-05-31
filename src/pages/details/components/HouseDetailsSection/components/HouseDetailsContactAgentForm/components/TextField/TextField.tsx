import {
  Box, FormControl, FormErrorMessage, FormLabel, Input, Textarea,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import { ContactAgentFormValues } from '~/app/mock/fakeApi.types';
import { TextFieldProps } from './TextField.types';

export default function TextField({ fieldItem, control }: TextFieldProps) {
  return (
    <Box alignItems="flex-start" w="100%">
      <Controller<ContactAgentFormValues>
        name={fieldItem.name}
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => {
          console.log('fieldState.error', fieldState.error);
          return (
            <FormControl
              isRequired
              isInvalid={!!fieldState.error}
              w="100%"
            >
              <FormLabel>{fieldItem.label}</FormLabel>
              {
                    fieldItem.isTextArea ? (
                      <Textarea
                        name={field.name}
                        ref={field.ref}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        w="100%"
                        placeholder={fieldItem.label}
                        minH={200}
                      />
                    ) : (
                      <Input
                        name={field.name}
                        ref={field.ref}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        w="100%"
                        placeholder={fieldItem.label}
                      />
                    )
                  }
              <FormErrorMessage>
                {fieldState.error?.message}
              </FormErrorMessage>
            </FormControl>
          );
        }}
      />

    </Box>
  );
}
