import { LoginOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import Routes from '@/router/routes';
import testIds from '@/utils/testUtils/constants/testIds';
import SelectLang from './SelectLang';
import BurgerMenu from './BurgerMenu';

function Header() {
  return (
    <AppBar data-testid={testIds.header} position="static">
      <Toolbar>
        <BurgerMenu />

        <IconButton href={Routes.SignIn} color="inherit">
          <LoginOutlined />
        </IconButton>
        <SelectLang />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
