import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { StyledControlPanelButton } from '@/components/styled';

function RequestButton() {
  return (
    <StyledControlPanelButton variant="contained">
      <PlayArrowIcon />
    </StyledControlPanelButton>
  );
}

export default RequestButton;
