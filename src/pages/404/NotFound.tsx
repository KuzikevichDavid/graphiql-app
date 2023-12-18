import { Box, Button, Container, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import notFoundImage from '@/assets/images/404.png';

const NOT_FOUND_TITLES = {
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
          <Grid item xs={6}>
            <Typography variant="h2">{NOT_FOUND_TITLES.title}</Typography>
          </Grid>
          <Grid item xs={6}>
            <img
              src={notFoundImage}
              alt="source not found"
              width={500}
              height={250}
            />
          </Grid>
          <Grid
            item
            xs={12}
            container
            alignItems="center"
            justifyContent="center"
          >
            <Link href="/">
              <Button variant="contained">{NOT_FOUND_TITLES.button}</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export { NOT_FOUND_TITLES, NotFoundPage };
