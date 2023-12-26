import LocalizationContext from '@/contexts/localization/LocalizationContext';
import Routes from '@/router/routes';
import { selectIsLoggedInSession } from '@/store/auth/authSelectors';
import { useAppSelector } from '@/store/store';
import theme from '@/styles/theme';
import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';

function SignButtons() {
  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);
  const { localeData } = useContext(LocalizationContext);

  return !isLoggedInSession ? (
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
  ) : (
    <Box>
      <Button
        href={Routes.App}
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
  );
}

export default SignButtons;
