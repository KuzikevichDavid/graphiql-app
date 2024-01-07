import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { signIn } from '@/store/auth/authActions';
import {
  selectSignInError,
  selectSignInStatus,
} from '@/store/auth/authSelectors';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { CustomError, RequestStatus, SignInData } from '@/types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { StyledErrorMessage, StyledForm } from '../styled';
import createSignInSchema from './signInSchema';

function SignInForm() {
  const { localeData } = useContext(LocalizationContext);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(createSignInSchema(localeData)),
    context: {
      localeData,
    },
  });

  const signInError: CustomError | null = useAppSelector(selectSignInError);
  const signInErrorMessage = signInError?.message
    ? localeData.invalidLoginCredentials
    : localeData.somethingWentWrong;
  const signInStatus: RequestStatus = useAppSelector(selectSignInStatus);

  const onSubmit = async (data: SignInData) => {
    const { email, password } = data;
    await dispatch(signIn({ email, password }));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="email"
        label={localeData.email}
        type="email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
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
      {signInStatus === RequestStatus.FAILED && (
        <StyledErrorMessage>{signInErrorMessage}</StyledErrorMessage>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        data-testid="signin-button"
      >
        {signInStatus === RequestStatus.LOADING
          ? localeData.loading
          : localeData.signin}
      </Button>
    </StyledForm>
  );
}

export default SignInForm;
