import { selectIsLoggedInUser } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/store';
import { Link } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/sign-in-form/SignInForm';

function SignInPage() {
  const navigate = useNavigate();

  const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser);

  useEffect(() => {
    if (isLoggedInUser) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedInUser]);
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
