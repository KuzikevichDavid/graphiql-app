import { SxProps, Theme } from '@mui/material';

const controlPanelClass: SxProps<Theme> = {
  height: '100%',
  width: '100%',
  p: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  justifyContent: 'flex-start',
  backgroundColor: 'action.disabledBackground',
};

export default controlPanelClass;
