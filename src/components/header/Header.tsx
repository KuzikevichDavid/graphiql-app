import { LoginOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Link, Container } from '@mui/material';
import { useContext } from 'react';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import Routes from '@/router/routes';
import SelectLang from './SelectLang';

function Header() {
  const { localeData } = useContext(LocalizationContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Container sx={{ flexGrow: 1 }}>
          <Link
            href={Routes.Home}
            color="inherit"
            underline="none"
            variant="h4"
          >
            {localeData.welcomePage}
          </Link>
        </Container>

        <IconButton href={Routes.SignIn} color="inherit">
          <LoginOutlined />
        </IconButton>
        <SelectLang />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
