import important from '@/utils/muiStyles/important';
import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { red, green } from '@mui/material/colors';

type ProgressFlag = 'error' | 'success' | 'default';

const circularProgressStyle: SxProps<Theme> = {
  color: green[500],
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: '-12px',
  marginLeft: '-12px',
};

const getCircularProgressBtnStyle = (flag: ProgressFlag = 'default') => {
  switch (flag) {
    case 'error':
      return {
        bgcolor: important(red[500]),
        '&:hover': {
          bgcolor: important(red[700]),
        },
      };
    case 'success':
      return {
        bgcolor: important(green[500]),
        '&:hover': {
          bgcolor: important(green[700]),
        },
      };
    default:
      return {};
  }
};

export { circularProgressStyle, getCircularProgressBtnStyle };
