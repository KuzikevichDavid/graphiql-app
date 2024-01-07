import { createTheme, alpha, darken, Theme } from '@mui/material';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import React from 'react';
import important from '@/utils/muiStyles/important';
import COLORS from './MUI/colors';

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primaryMain,
      light: COLORS.lightColor,
    },
    secondary: {
      main: COLORS.secondaryMain,
    },
    text: {
      disabled: COLORS.headerScrolled,
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
            color: COLORS.secondaryMain,
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
            color: COLORS.secondaryMain,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: important(alpha(COLORS.primaryMain, 0.8)),
            opacity: 1,
            '&:hover': {
              backgroundColor: important(darken(COLORS.primaryMain, 0.3)),
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
