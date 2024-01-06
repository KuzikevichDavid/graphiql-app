import { Box, SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface PropsType {
  description: {
    text: string;
    styles?: SxProps<Theme>;
  };
  wrapperStyles?: SxProps<Theme>;
  children: ReactNode;
}

function Row({
  description: { text: descriptionText, styles: descriptionStyles = {} },
  wrapperStyles = {},
  children,
}: PropsType) {
  return (
    <Box sx={wrapperStyles}>
      <Typography component="span">
        <Typography component="span" sx={descriptionStyles}>
          {descriptionText}:{' '}
        </Typography>
        <Typography component="span">{children}</Typography>
      </Typography>
    </Box>
  );
}

export default Row;
