import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridRowParams,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { selectMappedHeaders } from '@/store/gql/slice/gqlSelectors';
import { HeaderIdentityItem } from '@/store/gql/slice/types';
import { setHeaders } from '@/store/gql/slice/gqlSlice';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import dataTestId from '@/tests/data-test';
import EditToolbar from './EditToolbar';
import getColumnDefinition from './getColumnDefinition';
import StyledBox from './StyledBox';

export default function HeadersTable() {
  const { localeData } = React.useContext(LocalizationContext);
  const dispatch = useAppDispatch();
  const headers = useAppSelector(selectMappedHeaders);
  const rows: GridRowsProp = headers ?? [];
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    dispatch(
      setHeaders(rows.filter((row) => row.id !== id) as HeaderIdentityItem[])
    );
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      dispatch(
        setHeaders(rows.filter((row) => row.id !== id) as HeaderIdentityItem[])
      );
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    dispatch(
      setHeaders(
        rows.map((row) =>
          row.id === newRow.id ? updatedRow : row
        ) as HeaderIdentityItem[]
      )
    );
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const getActions = ({ id }: GridRowParams<GridValidRowModel>) => {
    const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

    if (isInEditMode) {
      return [
        <GridActionsCellItem
          key={`${id}Save`}
          icon={<SaveIcon />}
          label={localeData.headersSave}
          sx={{
            color: 'primary.main',
          }}
          onClick={handleSaveClick(id)}
          data-testid={dataTestId.headersSave}
        />,
        <GridActionsCellItem
          key={`${id}Cancel`}
          icon={<CancelIcon />}
          label={localeData.headersCancel}
          className="textPrimary"
          onClick={handleCancelClick(id)}
          color="inherit"
          data-testid={dataTestId.headersCancel}
        />,
      ];
    }

    return [
      <GridActionsCellItem
        key={`${id}Edit`}
        icon={<EditIcon />}
        label={localeData.headersEdit}
        className="textPrimary"
        onClick={handleEditClick(id)}
        color="inherit"
        data-testid={dataTestId.headersEdit}
      />,
      <GridActionsCellItem
        key={`${id}Delete`}
        icon={<DeleteIcon />}
        label={localeData.headersDelete}
        onClick={handleDeleteClick(id)}
        data-testid={dataTestId.headersDelete}
        color="inherit"
      />,
    ];
  };

  const columns = getColumnDefinition({ rows, getActions, localeData });

  return (
    <StyledBox
      sx={{
        height: 300,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        density="compact"
        hideFooterPagination
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { rows, dispatch, setRowModesModel },
        }}
      />
    </StyledBox>
  );
}
