/* eslint-disable react-hooks/exhaustive-deps */
import { Session } from '@/types/auth-types';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSessionFromLocalSessionData } from '../slices/authActions';
import {
  selectIsLoggedInSession,
  selectLocalSessionData,
} from '../slices/authSelectors';
import { useAppDispatch, useAppSelector } from '../store';

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps): ReactNode {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);

  const getLoggedInDataOrRedirect = () => {
    const localSessionData: Session | null = selectLocalSessionData();

    if (!localSessionData) {
      navigate('/signin');
      return;
    }

    dispatch(setSessionFromLocalSessionData(localSessionData));
  };

  useEffect(() => {
    if (!isLoggedInSession) getLoggedInDataOrRedirect();
  }, []);

  return children;
}

export default AuthProvider;
