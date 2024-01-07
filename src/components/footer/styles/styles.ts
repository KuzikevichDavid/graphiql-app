import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export const gitCard: SxProps<Theme> = {
  display: 'flex',
  width: '100px',
  justifyContent: 'flex-start',
  padding: '3px',
  '&:hover': {
    border: 'none',
    color: 'primary',
    backgroundColor: 'white',
  },
};

export const flexGit: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const flexGitMobile: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export const rsLogo: SxProps<Theme> = {
  minWidth: '100px',
  width: '100px',
  height: '80px',
  '&:hover': {
    border: 'none',
    color: 'primary',
    backgroundColor: 'white',
  },
};
