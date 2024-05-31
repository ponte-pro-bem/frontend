import * as yup from 'yup';

const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function validatePhone(this: yup.StringSchema, msg: string) {
  return this.test({
    name: 'phone',
    message: msg,
    test: (value) => {
      if (!value) return true;
      return phoneRegex.test(value);
    },
  });
}

yup.addMethod<yup.StringSchema>(yup.string, 'phone', validatePhone);

export default yup;
