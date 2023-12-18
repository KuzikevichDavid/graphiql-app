import { Box, Button, Container, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import notFoundImage from '@/assets/images/404.png';

const TITLES = {
  title: `The page you’re looking for doesn’t exist.`,
  button: `Back Home`,
};

function NotFoundPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h2">{TITLES.title}</Typography>
          </Grid>
          <Grid xs={6}>
            <img
              src={notFoundImage}
              alt="source not found"
              width={500}
              height={250}
            />
          </Grid>
          <Grid xs={12} container alignItems="center" justifyContent="center">
            <Link href="/">
              <Button variant="contained">{TITLES.button}</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default NotFoundPage;
