import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { GridRowModes, GridToolbarContainer } from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
import { setHeaders } from '@/store/gql/slice/gqlSlice';
import { EditToolbarProps } from './types';

export default function EditToolbar(props: EditToolbarProps) {
  const { rows, dispatch, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    dispatch(
      setHeaders([
        ...rows,
        { id, name: 'header_name', value: 'header_value', isNew: true },
      ])
    );
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}
