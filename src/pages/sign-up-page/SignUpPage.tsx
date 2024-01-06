import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { selectIsLoggedInUser } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/store';
import { Link } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '@/components/sign-up-form/SignUpForm';

function SignUpPage() {
  const { localeData } = useContext(LocalizationContext);
  const navigate = useNavigate();
  const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser);
  useEffect(() => {
    if (isLoggedInUser) {
      navigate('/');
    }
  }, [isLoggedInUser, navigate]);
  return (
    <>
      <h1>{localeData.signup}</h1>
      <SignUpForm />
      <p>
        {localeData.signupMessage}
        <Link href="/signin">{localeData.signin}</Link>
      </p>
    </>
  );
}

export default SignUpPage;
