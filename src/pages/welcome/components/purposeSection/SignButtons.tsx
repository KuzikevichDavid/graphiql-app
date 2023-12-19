import LocalizationContext from '@/contexts/localization/LocalizationContext';
import Routes from '@/router/routes';
import theme from '@/styles/theme';
import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';

function SignButtons() {
  const { localeData } = useContext(LocalizationContext);

  return (
    <>
      <Box
        sx={{
          display: 'inline',
        }}
      >
        <Button href={Routes.SignUp} color="primary" variant="contained">
          {localeData.signup}
        </Button>
        {' / '}
        <Button href={Routes.SignIn} color="primary" variant="contained">
          {localeData.signin}
        </Button>
      </Box>
      <Box>
        <Button
          href={Routes.Main}
          color="primary"
          variant="contained"
          sx={{
            '& hover': {
              bgcolor: theme.palette.primary.light,
            },
          }}
        >
          <Typography component="h2" variant="h6">
            {localeData.welcomeAuth}
          </Typography>
        </Button>
      </Box>
    </>
  );
}

export default SignButtons;
