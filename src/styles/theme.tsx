/* eslint-disable react/jsx-props-no-spreading */
import { createTheme } from '@mui/material';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import React from 'react';

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

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
  },
});

export default theme;
