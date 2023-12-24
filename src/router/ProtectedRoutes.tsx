import RootLayout from '@/layouts/RootLayout';
import AuthSupabase from '@/services/supabase/supabaseAuthService';
import { setSessionFromLocalSessionData } from '@/store/auth/authActions';
import {
  selectIsLoggedInSession,
  selectIsLoggedInUser,
} from '@/store/auth/authSelectors';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { Session } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ProtectedRoutes() {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();
  const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser);

  useEffect(() => {
    if (isLoggedInUser && location.pathname !== '/app') {
      navigate('/');
    }
  }, [isLoggedInUser, location.pathname, navigate]);

  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);

  useEffect(() => {
    const getLoggedInDataOrRedirect = async () => {
      const supabase = new AuthSupabase();
      const localSessionData: Session | null = await supabase.getSession();

      if (!localSessionData && location.pathname !== '/') {
        navigate('/signin');
        return;
      }

      if (localSessionData) {
        dispatch(setSessionFromLocalSessionData(localSessionData));
      }
    };
    // eslint-disable-next-line no-console
    if (!isLoggedInSession) getLoggedInDataOrRedirect().catch(console.error);
  }, [dispatch, isLoggedInSession, location.pathname, navigate]);

  return <RootLayout />;
}
export default ProtectedRoutes;
