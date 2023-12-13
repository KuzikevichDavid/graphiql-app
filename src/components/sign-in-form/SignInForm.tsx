import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import signInSchema from "../../pages/sign-in-page/signInSchema";
import { StyledForm } from "../styled";

interface SignInFormData {
  email: string;
  password: string;
}

function SignInForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="email"
        label="Email"
        type="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
      />

      <TextField
        id="password"
        label="Password"
        type="password"
        {...register("password")}
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
