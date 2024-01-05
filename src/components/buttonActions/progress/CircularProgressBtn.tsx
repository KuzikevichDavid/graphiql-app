import dataTestId from '@/tests/data-test';
import { Box, Button, CircularProgress, SxProps, Theme } from '@mui/material';
import { MouseEventHandler } from 'react';
import { circularProgressStyle } from './circularProgressStyles';

interface PropsType {
  isLoading?: boolean;
  buttonSx: SxProps<Theme>;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  children: React.ReactNode;
}

function CircularProgressBtn({
  isLoading = false,
  buttonSx,
  disabled = false,
  title = '',
  onClick = () => {},
  children,
}: PropsType) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={disabled}
          onClick={onClick}
          title={title}
        >
          {children}
        </Button>
        {isLoading && (
          <CircularProgress
            size={24}
            sx={circularProgressStyle}
            data-testid={dataTestId.circularProgress}
          />
        )}
      </Box>
    </Box>
  );
}

export default CircularProgressBtn;
