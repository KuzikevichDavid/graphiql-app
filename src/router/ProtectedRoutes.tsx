import { selectIsLoggedInUser } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/store';
import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
  const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (isLoggedInUser) {
      setShouldRedirect(false);
    } else {
      setShouldRedirect(true);
    }
  }, [isLoggedInUser]);

  return shouldRedirect ? <Navigate to="/signin" /> : <Outlet />;
}
export default ProtectedRoutes;
