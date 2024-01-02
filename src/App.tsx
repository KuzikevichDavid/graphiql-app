import { Session } from '@supabase/supabase-js';
import { useEffect } from 'react';
import AppRoutes from './router/router';
import supabaseInstance from './services/supabase/supabaseAuthService';
import { setSessionFromLocalSessionData } from './store/auth/authActions';
import { useAppDispatch } from './store/store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getSession = async () => {
      const localSessionData: Session | null =
        await supabaseInstance.getSession();
      if (localSessionData) {
        dispatch(setSessionFromLocalSessionData(localSessionData));
      }
    };

    // eslint-disable-next-line no-console
    getSession().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppRoutes />;
}

export default App;
