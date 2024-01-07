import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { StyledMain } from '@/components/styled';
import { Box } from '@mui/material';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </Box>
  );
}

export default RootLayout;
