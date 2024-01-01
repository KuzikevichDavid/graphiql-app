import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { useContext } from 'react';

function ApiInputSection() {
  const { localeData } = useContext(LocalizationContext);
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={localeData.appInputPlaceholder}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <AutorenewIcon />
      </IconButton>
    </Paper>
  );
}

export default ApiInputSection;
