import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#d500f9',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          ':hover': {
            color: '#d500f9',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          ':hover': {
            color: '#d500f9',
          },
        },
      },
    },
  },
});

export default theme;
