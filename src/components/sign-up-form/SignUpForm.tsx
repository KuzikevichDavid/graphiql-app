import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { signUp } from '@/store/auth/authActions';
import {
  selectSignUpError,
  selectSignUpStatus,
} from '@/store/auth/authSelectors';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { CustomError, RequestStatus } from '@/types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  StyledErrorMessage,
  StyledForm,
  StyledSuccessfullMessage,
} from '../styled';
import createSignInSchema from './signUpSchema';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  termsCheck: boolean;
}

function SignUpForm() {
  const { localeData } = useContext(LocalizationContext);
  const dispatch = useAppDispatch();
  const signUpError: CustomError | null = useAppSelector(selectSignUpError);
  const signUpStatus: RequestStatus = useAppSelector(selectSignUpStatus);
  const [signUpErrorMessage, setSignUpErrorMessage] = useState<string | null>(
    null
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(createSignInSchema(localeData)),
  });

  const onSubmit = async (data: FormData) => {
    await dispatch(signUp(data));
  };

  useEffect(() => {
    if (signUpError?.message) {
      setSignUpErrorMessage(localeData.userAlreadyExists);
    } else {
      setSignUpErrorMessage(localeData.somethingWentWrong);
    }
  }, [
    localeData.somethingWentWrong,
    localeData.userAlreadyExists,
    signUpError?.message,
  ]);

  if (signUpStatus === RequestStatus.COMPLETED) {
    return (
      <>
        <StyledSuccessfullMessage>
          {localeData.successfullSignup}
        </StyledSuccessfullMessage>
        <Link href="/signin">{localeData.signin}</Link>
      </>
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="username"
        label={localeData.name}
        {...register('username')}
        error={!!errors.username}
        helperText={errors.username?.message}
        fullWidth
      />

      <TextField
        id="password"
        label={localeData.password}
        type="password"
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
      />

      <TextField
        id="confirmPassword"
        label={localeData.confirmPassword}
        type="password"
        {...register('confirmPassword')}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        fullWidth
      />

      <TextField
        id="email"
        label={localeData.email}
        type="email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
      />

      <FormControlLabel
        control={
          <Checkbox
            id="termsCheck"
            {...register('termsCheck')}
            color="primary"
          />
        }
        label={localeData.agreeTerms}
      />
      {errors.termsCheck && (
        <div style={{ color: 'red' }}>{errors.termsCheck.message}</div>
      )}
      {signUpStatus === RequestStatus.FAILED && (
        <StyledErrorMessage>{signUpErrorMessage}</StyledErrorMessage>
      )}
      <Button type="submit" variant="contained" color="primary">
        {localeData.signup}
      </Button>
    </StyledForm>
  );
}

export default SignUpForm;
