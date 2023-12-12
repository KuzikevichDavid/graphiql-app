import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import signInSchema from "../../validation-schemas/signInSchema";
import StyledForm from "../../ui/StyledForm";

interface SignInFormData {
  email: string;
  password: string;
}

function SignInForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
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

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isValid}
      >
        Sign In
      </Button>
    </StyledForm>
  );
}

export default SignInForm;
