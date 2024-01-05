import { Paper } from '@mui/material';
import RequestButton from './RequestButton';
import PrettifyButton from './PrettifyButton';

export default function ControlPanel() {
  return (
    <Paper
      sx={{
        height: '100%',
        width: '100%',
        p: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'flex-start',
        backgroundColor: 'action.disabledBackground',
      }}
    >
      <RequestButton />
      <PrettifyButton />
    </Paper>
  );
}
