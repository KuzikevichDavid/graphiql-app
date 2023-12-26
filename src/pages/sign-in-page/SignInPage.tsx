import { Link } from '@mui/material';
import SignInForm from '../../components/sign-in-form/SignInForm';

function SignInPage() {
  return (
    <>
      <h1>Sign in</h1>
      <SignInForm />

      <div className="text-center">
        You do not have an account ?<Link href="/signup">Sign up</Link>
      </div>
    </>
  );
}

export default SignInPage;
