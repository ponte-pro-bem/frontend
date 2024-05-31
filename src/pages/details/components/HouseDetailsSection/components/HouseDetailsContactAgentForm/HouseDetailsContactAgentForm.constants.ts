import yup from '~/utils/yup';
import { Field } from './HouseDetailsContactAgentForm.types';

export const fields: Field[] = [
  {
    name: 'fullName',
    label: 'Full name',
  },
  {
    name: 'email',
    label: 'Email',
  },
  {
    name: 'phone',
    label: 'Phone',
  },
  {
    name: 'comments',
    label: 'Comments',
    isTextArea: true,
  },
];

export const validationSchema = yup.object({
  fullName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').required('Field required'),
  email: yup.string().email('E-mail format invalid').required('Field required'),
  phone: yup.string().phone('Phone number is not valid').required('Phone is required').typeError('Phone must be a number'),
  comments: yup.string().required('Field required'),
});
