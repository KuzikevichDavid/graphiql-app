import { alpha, createTheme, darken, Theme } from '@mui/material';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import React from 'react';
import important from '@/utils/muiStyles/important';

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

const primaryMain = '#673ab7';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: '#d500f9',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
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
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
      styleOverrides: {
        root: {
          textDecoration: 'none',
          ':hover': {
            color: '#d500f9',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: important(alpha(primaryMain, 0.8)),
            opacity: 1,
            '&:hover': {
              backgroundColor: important(darken(primaryMain, 0.3)),
              opacity: 1,
            },
          },
        },
      },
    },
  },
});

export default theme;
