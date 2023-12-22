import { selectIsLoggedInUser } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/store';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedInUser]);
  return (
    <>
      <h1>Sign Up</h1>
      <SignUpForm />
    </>
  );
}

export default SignUpPage;
