import { Box, SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface PropsType {
  rowData: {
    desc: string;
    descriptionSx?: SxProps<Theme>;
    children: ReactNode;
    childrenSx?: SxProps<Theme>;
  };
  sx?: SxProps<Theme>;
}

function Row({
  rowData: { desc, descriptionSx: sxDesc, children, childrenSx },
  sx: style = {},
}: PropsType) {
  return (
    <Box sx={style}>
      <Typography component="span">
        <Typography component="span" sx={sxDesc}>
          {`${desc}: `}
        </Typography>
        <Typography component="span" sx={childrenSx}>
          {typeof children === 'string' ? `${children}` : children}
        </Typography>
      </Typography>
    </Box>
  );
}

export default Row;
