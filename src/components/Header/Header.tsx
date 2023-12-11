import { LoginOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Link, Typography } from '@mui/material';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import LangSwitch from '../../styles/MUI/langSwitch';

const LANG = {
  rus: 'RUS',
  eng: 'ENG',
};

function Header() {
  const [lang, setLanguage] = useState(LANG.eng);

  const changeLanguage = () => {
    if (lang === LANG.rus) {
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
          <Typography>Eng</Typography>
          <LangSwitch
            checked={lang !== LANG.eng}
            onChange={changeLanguage}
            inputProps={{ 'aria-label': 'ant design' }}
          />
          <Typography>Rus</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
