import { LocaleData } from '@/localization/types';
import * as Yup from 'yup';

const createSignUpSchema = (localeData: LocaleData) =>
  Yup.object().shape({
    username: Yup.string()
      .required(localeData.userNameRequired)
      .matches(/^[a-zA-ZА-Яа-я]{2,16}$/, localeData.userNameLengthRequirments)
      .test(
        'no-digits-or-special',
        localeData.userNameCharactersRequirments,
        (value) => /^[^0-9@$!%*#?&]+$/.test(value)
      ),
    password: Yup.string()
      .required(localeData.passwordRequired)
      .matches(
        /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-zА-Яа-я\d@$!%*#?&]{8,}$/,
        localeData.passwordRequierments
      ),
    confirmPassword: Yup.string()
      .required(localeData.confirmPassword)
      .oneOf([Yup.ref('password')], localeData.passwordsMustMatch),
    email: Yup.string()
      .required(localeData.emailRequired)
      .email(localeData.invalidEmail),
    termsCheck: Yup.boolean()
      .oneOf([true], localeData.requiredTermsOfUse)
      .required(localeData.requiredTermsOfUse),
  });

export default createSignUpSchema;
