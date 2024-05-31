import { ContactAgentFormValues } from '~/app/mock/fakeApi.types';

export interface Field {
  name: keyof ContactAgentFormValues;
  label: string;
  isTextArea?: boolean;
  type?: string
}
