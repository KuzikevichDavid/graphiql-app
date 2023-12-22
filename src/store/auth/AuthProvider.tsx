import { Session } from '@/types/auth';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSessionFromLocalSessionData } from './authActions';
import {
  selectIsLoggedInSession,
  selectLocalSessionData,
} from './authSelectors';
import { useAppDispatch, useAppSelector } from '../store';

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps): ReactNode {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);

  useEffect(() => {
    const getLoggedInDataOrRedirect = async () => {
      const localSessionData: Session | null = await selectLocalSessionData();

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
