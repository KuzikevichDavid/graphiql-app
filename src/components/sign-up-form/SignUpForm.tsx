import { TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import signUpSchema from "../../validation-schemas/signUpSchema";

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
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "420px",
        width: "100%",
        gap: "20px",
      }}
    >
      <TextField
        id="username"
        label="Username"
        {...register("username")}
        error={!!errors.username}
        helperText={errors.username?.message}
      />

      <TextField
        id="password"
        label="Password"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <TextField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        {...register("confirmPassword")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />

      <TextField
        id="email"
        label="Email"
        type="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <FormControlLabel
        control={
          <Checkbox
            id="termsCheck"
            {...register("termsCheck")}
            color="primary"
          />
        }
        label="Agree to the Terms of Use"
      />
      {errors.termsCheck && (
        <div style={{ color: "red" }}>{errors.termsCheck.message}</div>
      )}

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default SignUpForm;
