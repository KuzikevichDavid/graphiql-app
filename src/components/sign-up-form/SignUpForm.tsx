import { TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import signUpSchema from './signUpSchema';
import { StyledForm } from '../styled';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  termsCheck: boolean;
}

function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data: FormData) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="username"
        label="Username"
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

      <Button type="submit" variant="contained" color="primary">
        Sign up
      </Button>
    </StyledForm>
  );
}

export default SignUpForm;
