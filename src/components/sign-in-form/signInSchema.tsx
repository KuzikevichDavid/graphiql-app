import { LocaleData } from '@/localization/types';
import * as Yup from 'yup';

const createSignInSchema = (localeData: LocaleData) =>
  Yup.object().shape({
    password: Yup.string().required(localeData.passwordRequired),
    email: Yup.string()
      .required(localeData.emailRequired)
      .email(localeData.emailInvalid),
  });
export default createSignInSchema;
