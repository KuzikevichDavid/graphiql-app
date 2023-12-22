import { StyledMain } from '@/components/styled';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <StyledMain>
        <Outlet />
      </StyledMain>
      Footer
    </>
  );
}

export default RootLayout;
