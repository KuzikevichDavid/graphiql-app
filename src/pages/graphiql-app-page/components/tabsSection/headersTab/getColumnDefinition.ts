import { LocaleData } from '@/localization/types';
import {
  GridColDef,
  GridPreProcessEditCellProps,
  GridActionsCellItemProps,
  GridRowParams,
  GridValidRowModel,
  GridRowsProp,
} from '@mui/x-data-grid';
import renderEditName from './renderEditName';

interface ColumnsProps {
  getActions: (
    params: GridRowParams<GridValidRowModel>
  ) => React.ReactElement<GridActionsCellItemProps>[];
  localeData: LocaleData;
  rows: GridRowsProp;
}

export default ({ getActions, localeData, rows }: ColumnsProps) => {
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: localeData.headersName,
      width: 150,
      editable: true,
      preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
        const headerName: string = params?.props?.value as string;
        const existingHeaders = rows?.map((row) =>
          (row?.name as string).toLowerCase()
        );
        const exists = existingHeaders?.includes(headerName?.toLowerCase());
        const isExists = exists
          ? `${headerName} ${localeData.headersNameExistMessage}`
          : null;
        const isPresent =
          headerName?.length < 1 || headerName?.match(/\s+/)
            ? localeData.headersNameMessage
            : null;
        const errorMsg = isPresent ?? isExists;
        const hasError = !!errorMsg;
        return { ...params.props, error: hasError, errorMsg };
      },
      renderEditCell: renderEditName,
    },
    {
      field: 'value',
      headerName: localeData.headersValue,
      width: 200,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: localeData.headersActions,
      width: 100,
      cellClassName: 'actions',
      getActions,
    },
  ];
  return columns;
};
