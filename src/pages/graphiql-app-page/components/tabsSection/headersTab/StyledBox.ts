import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  '& .Mui-error': {
    backgroundColor: `rgb(126,10,15, ${
      theme.palette.mode === 'dark' ? 0 : 0.1
    })`,
    color: theme.palette.mode === 'dark' ? '#ff4343' : '#750f0f',
  },
}));

export default StyledBox;
