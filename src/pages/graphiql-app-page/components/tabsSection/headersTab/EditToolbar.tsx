import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { GridRowModes, GridToolbarContainer } from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
import { setHeaders } from '@/store/gql/slice/gqlSlice';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { useContext } from 'react';
import dataTestId from '@/tests/data-test';
import { EditToolbarProps } from './types';

export default function EditToolbar({
  rows,
  dispatch,
  setRowModesModel,
}: EditToolbarProps) {
  const { localeData } = useContext(LocalizationContext);

  const handleClick = () => {
    const id = randomId();
    dispatch(setHeaders([...rows, { id, name: '', value: '', isNew: true }]));
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClick}
        data-testid={dataTestId.headersAddHeader}
      >
        {localeData.headersAddHeader}
      </Button>
    </GridToolbarContainer>
  );
}
