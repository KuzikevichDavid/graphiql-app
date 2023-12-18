import { LANG } from '@/constants/language';
import { signOut } from '@/store/slices/authActions';
import { useAppDispatch } from '@/store/store';
import { LoginOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageSwitch from './styled';

function Header() {
  const [language, setLanguage] = useState<string>(LANG.eng);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
    <AppBar position="static">
      <Toolbar>
        <Link
          href="/"
          color="inherit"
          underline="none"
          variant="h4"
          sx={{ flexGrow: 1 }}
        >
          G R A P H I Q L A P P
        </Link>

        <IconButton onClick={onSignOut} color="inherit">
          <LoginOutlined />
        </IconButton>
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
