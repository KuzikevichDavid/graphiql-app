import { Box, Button, Container, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import notFoundImage from '@/assets/images/404.png';
import { useContext } from 'react';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import testIds from '@/utils/testUtils/constants/testIds';

function NotFoundPage() {
  const { localeData } = useContext(LocalizationContext);

  return (
    <Box
      data-testid={testIds.notFound}
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
            <Typography variant="h2">{localeData.notFound_Title}</Typography>
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
              <Button variant="contained">{localeData.notFound_Button}</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default NotFoundPage;
