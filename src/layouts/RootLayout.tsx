import { Outlet } from 'react-router-dom';
import Header from '@/components/header/Header';
import { StyledMain } from '@/components/styled';

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
