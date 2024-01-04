import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function RequestButton() {
  return (
    <Button
      variant="contained"
      sx={{
        zIndex: '100',
        minWidth: '30px',
        width: '50px',
        height: '40px',
        '&:hover': { color: 'secondary.main' },
      }}
    >
      <PlayArrowIcon />
    </Button>
  );
}

export default RequestButton;
