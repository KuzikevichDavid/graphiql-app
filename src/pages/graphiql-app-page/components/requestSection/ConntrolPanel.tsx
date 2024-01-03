import { Paper } from '@mui/material';
import RequestButton from './RequestButton';

export default function ControlPanel() {
  return (
    <Paper
      sx={{
        height: '100%',
        width: '100%',
        p: '10px',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        backgroundColor: 'action.disabledBackground',
      }}
    >
      <RequestButton />
    </Paper>
  );
}
