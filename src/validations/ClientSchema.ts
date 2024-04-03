import * as yup from 'yup';

export type IClient = yup.InferType<typeof ClientSchema>;

export const ClientSchema = yup.object({});
