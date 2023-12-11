import * as Yup from "yup";

const signInSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
});

export default signInSchema;
