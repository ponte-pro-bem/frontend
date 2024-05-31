import * as yup from 'yup';

declare module 'yup' {
    interface StringSchema extends yup.StringSchema {
        phone(message: string): yup.StringSchema;
    }
}
