import { StyledMain } from '@/components/styled';
import AuthProvider from '@/store/authProvider/AuthProvider';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <AuthProvider>
      <StyledMain>
        <Outlet />
      </StyledMain>
      Footer
    </AuthProvider>
  );
}

export default RootLayout;
