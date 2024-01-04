import important from '@/utils/muiStyles/important';
import { red, green } from '@mui/material/colors';

const getCircularProgressBtnStyle = (isError: boolean, isSuccess: boolean) => ({
  ...(isError && {
    bgcolor: important(red[500]),
    '&:hover': {
      bgcolor: important(red[700]),
    },
  }),
  ...(isSuccess && {
    bgcolor: important(green[500]),
    '&:hover': {
      bgcolor: important(green[700]),
    },
  }),
});

export default getCircularProgressBtnStyle;
