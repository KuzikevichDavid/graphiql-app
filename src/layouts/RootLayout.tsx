import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { StyledMain } from '@/components/styled';
import { Box } from '@mui/material';
import rootClass from './styles';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={rootClass}>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </Box>
  );
}

export default RootLayout;
