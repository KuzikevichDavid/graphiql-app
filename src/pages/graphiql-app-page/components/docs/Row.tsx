import { Box, SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface PropsType {
  rowData: {
    desc: string;
    sxDesc?: SxProps<Theme>;
    value: ReactNode;
    sxValue?: SxProps<Theme>;
  };
  sxWrapper?: SxProps<Theme>;
}

function Row({
  rowData: { desc, sxDesc, value, sxValue },
  sxWrapper: style,
}: PropsType) {
  return (
    <Box sx={style}>
      <Typography component="span">
        <Typography component="span" sx={sxDesc}>
          {' '}
          {`${desc}: `}
        </Typography>
        <Typography component="span" sx={sxValue}>
          {typeof value === 'string' ? `${value}` : value}
        </Typography>
      </Typography>
    </Box>
  );
}

Row.defaultProps = {
  sxWrapper: {},
};

export default Row;
