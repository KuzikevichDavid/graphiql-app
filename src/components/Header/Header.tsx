import { LoginOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Link, Typography } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import classes from './Header.module.scss';

const LANG = {
  rus: 'RUS',
  eng: 'ENG',
};

const LangSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: '#1890ff',
    boxSizing: 'border-box',
  },
}));

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
          className={classes.header_link}
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
