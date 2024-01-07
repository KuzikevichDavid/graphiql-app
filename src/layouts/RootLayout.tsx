import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { StyledMain } from '@/components/styled';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}

export default RootLayout;
