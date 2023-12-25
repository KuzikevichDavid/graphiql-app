import { signIn } from '@/store/auth/authActions';
import {
  selectSignInError,
  selectSignInStatus,
} from '@/store/auth/authSelectors';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { CustomError, RequestStatus, SignInData } from '@/types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import signInSchema from './signInSchema';
import { StyledErrorMessage, StyledForm } from '../styled';

function SignInForm() {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });
  const signInError: CustomError | null = useAppSelector(selectSignInError);
  const signInStatus: RequestStatus = useAppSelector(selectSignInStatus);

  const onSubmit = async (data: SignInData) => {
    const { email, password } = data;
    await dispatch(signIn({ email, password }));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="email"
        label="Email"
        type="email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
      />

      <TextField
        id="password"
        label="Password"
        type="password"
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
      />
      {signInStatus === RequestStatus.FAILED && (
        <StyledErrorMessage>
          {signInError?.message ?? 'Something went wrong'}
        </StyledErrorMessage>
      )}
      <Button type="submit" variant="contained" color="primary">
        {signInStatus === RequestStatus.LOADING ? 'Loading ...' : 'Sign in'}
      </Button>
    </StyledForm>
  );
}

export default SignInForm;
