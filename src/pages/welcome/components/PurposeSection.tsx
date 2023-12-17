import LocalizationContext from '@/contexts/localization/LocalizationContext';
import Routes from '@/router/routes';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import { useContext } from 'react';
import { greySection } from './styles/styles';

function PurposeSection() {
  const { localeData } = useContext(LocalizationContext);
  return (
    <Box component="section" sx={greySection}>
      <Container
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '720px',
          padding: '10px',
        }}
      >
        <Box sx={{ margin: '10px' }}>
          <Container sx={{ margin: '10px' }}>
            <Typography component="h1" variant="h3" color="primary.main">
              {localeData.welcome}
            </Typography>
          </Container>
          <Container>
            <Typography component="h2" variant="h5" color="secondary.main">
              {localeData.purpose}
            </Typography>
            <Typography paragraph>{localeData.welcomePurpose}</Typography>
          </Container>
        </Box>
        <Box
          sx={{
            display: 'inline',
          }}
        >
          <Typography paragraph>
            {`${localeData.welcomeNotAuth} `}
            <Link
              href={Routes.SignUp}
              color="inherit"
              underline="none"
              variant="h6"
            >
              {localeData.signup}
            </Link>
            {' / '}
            <Link
              href={Routes.SignIn}
              color="inherit"
              underline="none"
              variant="h6"
            >
              {localeData.signin}
            </Link>
          </Typography>
        </Box>
        <Box>
          <Button
            href={Routes.Main}
            color="primary"
            variant="contained"
            sx={{
              '& hover': {
                bgcolor: 'primary.main.lighter',
              },
            }}
          >
            <Typography component="h2" variant="h5">
              {localeData.welcomeAuth}
            </Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default PurposeSection;
