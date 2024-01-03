import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { signOut } from '@/store/auth/authActions';
import {
  selectIsLoggedInSession,
  selectLoggedInUser,
} from '@/store/auth/authSelectors';
import { useAppDispatch, useAppSelector } from '@/store/store';
import dataTestId from '@/tests/data-test';
import LogoutOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import BurgerMenu from './BurgerMenu';
import SelectLang from './SelectLang';

function Header() {
  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);
  const loggedInUser = useAppSelector(selectLoggedInUser);
  const { localeData } = useContext(LocalizationContext);

  const dispatch = useAppDispatch();

  const onSignOut = async () => {
    await dispatch(signOut());
  };

  return (
    <AppBar data-testid={dataTestId.header} position="sticky">
      <Toolbar>
        <BurgerMenu />

        {isLoggedInSession && (
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
        )}

        <SelectLang />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
