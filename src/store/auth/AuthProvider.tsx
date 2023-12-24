import AuthSupabase from '@/services/supabase/supabaseAuthService';
import { Session } from '@supabase/supabase-js';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { setSessionFromLocalSessionData } from './authActions';
import { selectIsLoggedInSession } from './authSelectors';

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps): ReactNode {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);

  useEffect(() => {
    const getLoggedInDataOrRedirect = async () => {
      const supabase = new AuthSupabase();
      const localSessionData: Session | null = await supabase.getSession();

      if (!localSessionData) {
        navigate('/signin');
        return;
      }

      dispatch(setSessionFromLocalSessionData(localSessionData));
    };
    // eslint-disable-next-line no-console
    if (!isLoggedInSession) getLoggedInDataOrRedirect().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}

export default AuthProvider;
