import { Session } from '@supabase/supabase-js';
import { useEffect } from 'react';
import AppRoutes from './router/router';
import AuthSupabase from './services/supabase/supabaseAuthService';
import { setSessionFromLocalSessionData } from './store/auth/authActions';
import { useAppDispatch } from './store/store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const supabase = new AuthSupabase();
    const localSessionData: Session | null = supabase.getSession();
    if (localSessionData) {
      dispatch(setSessionFromLocalSessionData(localSessionData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <AppRoutes />;
}

export default App;
