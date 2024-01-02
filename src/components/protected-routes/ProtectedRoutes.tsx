import {
  selectIsLoggedInUser,
  selectSignInStatus,
} from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/store';
import { RequestStatus } from '@/types/auth';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
  const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser);
  const signInStatus = useAppSelector(selectSignInStatus);

  const isSignInCompleted = signInStatus === RequestStatus.COMPLETED;

  if (!isLoggedInUser && isSignInCompleted) {
    return <Navigate to="/signin" />;
  }
  return <Outlet />;
}
export default ProtectedRoutes;
