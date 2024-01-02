import { useEffect } from 'react';
import AppRoutes from './router/router';
import { tryGetSessionFromLocalStorage } from './store/auth/authActions';
import { useAppDispatch } from './store/store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // eslint-disable-next-line no-console
    dispatch(tryGetSessionFromLocalStorage()).catch(console.error);
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
