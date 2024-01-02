import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function RequestButton() {
  return (
    <Button
      variant="contained"
      sx={{
        position: 'absolute',
        right: '0px',
        top: '0px',
        transform: 'translate(50%, 0%)',
        zIndex: '100',
        borderRadius: '50%',
        width: '64px',
        height: '64px',
        '&:hover': { color: 'secondary.main' },
      }}
    >
      <PlayArrowIcon />
    </Button>
  );
}

export default RequestButton;
