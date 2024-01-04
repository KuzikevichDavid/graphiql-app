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

const primaryMain = '#4a5d74';
const secondaryMain = '#efac56';
const lightColor = '#fff';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
      light: lightColor,
    },
    secondary: {
      main: secondaryMain,
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
            color: secondaryMain,
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
            color: secondaryMain,
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
    MuiGrid: {
      styleOverrides: {
        root: {
          '.MuiGrid-item': {
            padding: '5px',
          },
          padding: '5px',
          margin: '0px',
        },
      },
    },
  },
});

export default theme;
