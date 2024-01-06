import { HeaderIdentityItem } from '@/store/gql/slice/types';
import { AppDispatch } from '@/store/store';
import { GridRowModesModel } from '@mui/x-data-grid';

export interface EditToolbarProps {
  rows: HeaderIdentityItem[];
  dispatch: AppDispatch;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}
