import { LANG } from '@/constants/language';
import { signOut } from '@/store/auth/authActions';
import {
  selectIsLoggedInSession,
  selectLoggedInUser,
} from '@/store/auth/authSelectors';
import { useAppDispatch, useAppSelector } from '@/store/store';
import dataTestId from '@/tests/data-test';
import { LoginOutlined } from '@mui/icons-material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageSwitch from './styled';

function Header() {
  const [language, setLanguage] = useState<string>(LANG.eng);
  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);
  const loggedInUser = useAppSelector(selectLoggedInUser);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSignIn = () => {
    navigate('/signin');
  };

  const onSignOut = async () => {
    await dispatch(signOut());
    navigate('/signin');
  };

  const changeLanguage = () => {
    if (language === LANG.rus) {
      setLanguage(LANG.eng);
    } else {
      setLanguage(LANG.rus);
    }
  };
  return (
    <AppBar data-testid={dataTestId.header} position="static">
      <Toolbar>
        <Link href="/" color="inherit" underline="none" variant="h4">
          Header Test
        </Link>
        <Typography sx={{ flexGrow: 1 }} />
        {isLoggedInSession ? (
          <>
            <Typography>{loggedInUser?.email}</Typography>
            <IconButton onClick={onSignOut} color="inherit">
              <LogoutOutlinedIcon />
            </IconButton>
          </>
        ) : (
          <IconButton onClick={onSignIn} color="inherit">
            <LoginOutlined />
          </IconButton>
        )}
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>{LANG.eng}</Typography>
          <LanguageSwitch
            aria-label="Switch between languages"
            checked={language !== LANG.eng}
            onChange={changeLanguage}
            inputProps={{ 'aria-label': 'ant design' }}
          />
          <Typography>{LANG.rus}</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
