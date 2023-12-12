import SignInForm from "../../components/sign-in-form/SignInForm";

function SignInPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Sign in</h1>
      <SignInForm />
    </div>
  );
}

export default SignInPage;
