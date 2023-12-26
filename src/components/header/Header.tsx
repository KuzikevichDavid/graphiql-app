import { LoginOutlined } from '@mui/icons-material';
import LogoutOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { signOut } from '@/store/auth/authActions';
import {
  selectIsLoggedInSession,
  selectLoggedInUser,
} from '@/store/auth/authSelectors';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { useNavigate } from 'react-router-dom';
import dataTestId from '@/tests/data-test';
import Routes from '@/router/routes';
import { useContext } from 'react';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import BurgerMenu from './BurgerMenu';
import SelectLang from './SelectLang';

function Header() {
  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);
  const loggedInUser = useAppSelector(selectLoggedInUser);

  const { localeData } = useContext(LocalizationContext);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSignIn = () => {
    navigate(Routes.SignIn);
  };

  const onSignOut = async () => {
    await dispatch(signOut());
  };

  return (
    <AppBar data-testid={dataTestId.header} position="static">
      <Toolbar>
        <BurgerMenu />

        {isLoggedInSession ? (
          <>
            <Typography sx={{ overflow: 'hidden' }}>
              {loggedInUser?.email}
            </Typography>
            <IconButton
              onClick={onSignOut}
              title={localeData.signout}
              color="inherit"
            >
              <LogoutOutlinedIcon />
            </IconButton>
          </>
        ) : (
          <IconButton
            onClick={onSignIn}
            title={localeData.signup}
            color="inherit"
          >
            <LoginOutlined />
          </IconButton>
        )}

        <SelectLang />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
