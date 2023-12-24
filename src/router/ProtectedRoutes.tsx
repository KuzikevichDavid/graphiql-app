import RootLayout from '@/layouts/RootLayout';
import AuthProvider from '@/store/auth/AuthProvider';
import { selectIsLoggedInUser } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes() {
  const navigate = useNavigate();
  const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser);

  useEffect(() => {
    if (isLoggedInUser) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedInUser]);

  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  );
}
export default ProtectedRoutes;
