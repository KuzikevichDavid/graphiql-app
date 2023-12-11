import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  termsCheck: Yup.boolean()
    .oneOf([true], "Required terms of use")
    .required("Required terms of use"),
});

export default signUpSchema;
