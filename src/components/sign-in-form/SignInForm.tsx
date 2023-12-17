import { signIn } from '@/store/slices/authActions';
import { useAppDispatch } from '@/store/store';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { SignInData } from '@/types/auth-types';
import signInSchema from '../../pages/sign-in-page/signInSchema';
import { StyledForm } from '../styled';

function SignInForm() {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (data: SignInData) => {
    // eslint-disable-next-line no-console
    console.log(data);
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

      <Button type="submit" variant="contained" color="primary">
        Sign In
      </Button>
    </StyledForm>
  );
}

export default SignInForm;
