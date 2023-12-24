import Header from '@/components/header/Header';
import { StyledMain } from '@/components/styled';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      Footer
    </>
  );
}

export default RootLayout;
