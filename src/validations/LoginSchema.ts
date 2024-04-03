import * as yup from 'yup';

export type ILoginForm = yup.InferType<typeof LoginSchema>;
export type IForgotPassword = yup.InferType<typeof ForgotPasswordSchema>;
export type INewPassword = yup.InferType<typeof NewPasswordSchema>;

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

export const ForgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
});

export const NewPasswordSchema = yup.object({
  password: yup.string().required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
});
