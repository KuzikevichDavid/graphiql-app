import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      Header
      <main>
        <Outlet />
      </main>
      Footer
    </>
  );
}

export default RootLayout;
