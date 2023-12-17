import { Outlet } from 'react-router-dom';
import Header from '@/components/header/Header';
import { StyledMain } from '@/components/styled';
import AuthProvider from '@/store/authProvider/AuthProvider';

function RootLayout() {
  return (
    <AuthProvider>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      Footer
    </AuthProvider>
  );
}

export default RootLayout;
