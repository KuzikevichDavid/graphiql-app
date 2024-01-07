import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { ChangeEvent, useContext } from 'react';
import { setEndpoint } from '@/store/gql/slice/gqlSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import DocsButtons from './DocsButtons';

function ApiInputSection() {
  const { localeData } = useContext(LocalizationContext);
  const dispatch = useAppDispatch();
  const gqlEndpoint = useAppSelector((state) => state.gql.endpoint);

  const handleChangeEndpoint = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEndpoint(event.target.value));
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        ml: '10px',
        mr: '10px',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={localeData.appInputPlaceholder}
        value={gqlEndpoint}
        onChange={handleChangeEndpoint}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <DocsButtons />
    </Paper>
  );
}

export default ApiInputSection;
