import SignUpForm from "../../components/sign-up-form/SignUpForm";

function SignUpPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Sign Up</h1>
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
