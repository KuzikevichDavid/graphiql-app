import { LoginOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Link, Typography } from '@mui/material';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { LANG } from '@/constants/language';
import LanguageSwitch from './styled';

function Header() {
  const [language, setLanguage] = useState<string>(LANG.eng);

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
          Header Test
        </Link>

        <IconButton href="/login" color="inherit">
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
