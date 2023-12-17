import { signUp } from '@/store/slices/authActions';
import {
  selectSignUpError,
  selectSignUpStatus,
} from '@/store/slices/authSelectors';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { CustomError, RequestStatus } from '@/types/auth-types';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import {
  StyledErrorMessage,
  StyledForm,
  StyledSuccessfullMessage,
} from '../styled';
import signUpSchema from './signUpSchema';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  termsCheck: boolean;
}

function SignUpForm() {
  const dispatch = useAppDispatch();

  const signUpError: CustomError | null = useAppSelector(selectSignUpError);
  const signUpStatus: RequestStatus = useAppSelector(selectSignUpStatus);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (data: FormData) => {
    // eslint-disable-next-line no-console
    console.log(data);
    await dispatch(signUp(data));
  };

  if (signUpStatus === RequestStatus.COMPLETED) {
    return (
      <>
        <StyledSuccessfullMessage>
          Your registration was successful. Now you can sign in.
        </StyledSuccessfullMessage>
        <Link href="/signin">Sign in</Link>
      </>
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="username"
        label="Name"
        {...register('username')}
        error={!!errors.username}
        helperText={errors.username?.message}
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

      <TextField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        {...register('confirmPassword')}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        fullWidth
      />

      <TextField
        id="email"
        label="Email"
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
        label="Agree to the Terms of Use"
      />
      {errors.termsCheck && (
        <div style={{ color: 'red' }}>{errors.termsCheck.message}</div>
      )}
      {signUpStatus === RequestStatus.FAILED && (
        <StyledErrorMessage>{signUpError?.message}</StyledErrorMessage>
      )}
      <Button type="submit" variant="contained" color="primary">
        Sign up
      </Button>
    </StyledForm>
  );
}

export default SignUpForm;
