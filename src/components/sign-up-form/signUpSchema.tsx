import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .matches(
      /^[a-zA-ZА-Яа-я]{2,16}$/,
      "Username must be between 2 and 16 characters long",
    )
    .test(
      "no-digits-or-special",
      "Username cannot contain digits or special characters",
      (value) => /^[^0-9@$!%*#?&]+$/.test(value),
    ),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-zА-Яа-я\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 characters, one letter (uppercase or lowercase), one digit, and one special character",
    ),
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
