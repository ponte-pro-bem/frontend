import { Control } from 'react-hook-form';
import { ContactAgentFormValues } from '~/app/mock/fakeApi.types';
import { Field } from '../../HouseDetailsContactAgentForm.types';

export interface TextFieldProps {
  fieldItem: Field;
  control: Control<ContactAgentFormValues>;
}
