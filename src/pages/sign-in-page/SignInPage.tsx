import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { selectIsLoggedInUser } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/store';
import { Link } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/sign-in-form/SignInForm';

function SignInPage() {
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
      <h1>{localeData.signin}</h1>
      <SignInForm />

      <div className="text-center">
        {localeData.signinMessage}
        <Link href="/signup">{localeData.signup}</Link>
      </div>
    </>
  );
}

export default SignInPage;
