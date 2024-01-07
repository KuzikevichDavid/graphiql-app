import { Paper } from '@mui/material';
import RequestButton from './RequestButton';
import PrettifyButton from './PrettifyButton';
import controlPanelClass from './styles/styles';

export default function ControlPanel() {
  return (
    <Paper sx={controlPanelClass}>
      <RequestButton />
      <PrettifyButton />
    </Paper>
  );
}
