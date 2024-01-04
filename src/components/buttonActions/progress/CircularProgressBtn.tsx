import { Box, Button, CircularProgress, SxProps, Theme } from '@mui/material';
import { green } from '@mui/material/colors';
import { MouseEventHandler } from 'react';

interface PropsType {
  isLoading?: boolean;
  buttonSx: SxProps<Theme>;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  children: React.ReactNode;
}

function CircularProgressBtn({
  isLoading,
  buttonSx,
  disabled,
  title,
  onClick,
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
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}

CircularProgressBtn.defaultProps = {
  isLoading: false,
  disabled: false,
  title: '',
  onClick: () => {},
};

export default CircularProgressBtn;
