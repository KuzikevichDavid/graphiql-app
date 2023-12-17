/* eslint-disable react-hooks/exhaustive-deps */
import { selectIsLoggedInUser } from '@/store/slices/authSelectors';
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
  }, [isLoggedInUser]);
  return (
    <>
      <h1>Sign in</h1>
      <SignInForm />

      <div className="text-center">
        You do not have an account ?
        <Link href="/sign-up" className="underline">
          Sign up
        </Link>
      </div>
    </>
  );
}

export default SignInPage;
