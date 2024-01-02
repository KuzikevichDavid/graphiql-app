import { selectIsLoggedInUser } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/store';
import { Link } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/sign-up-form/SignUpForm';

function SignUpPage() {
  const navigate = useNavigate();
  const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser);
  useEffect(() => {
    if (isLoggedInUser) {
      navigate('/');
    }
  }, [isLoggedInUser, navigate]);
  return (
    <>
      <h1>Sign Up</h1>
      <SignUpForm />
      <p>
        Already have an account ? <Link href="/signin">Sign in</Link>
      </p>
    </>
  );
}

export default SignUpPage;
