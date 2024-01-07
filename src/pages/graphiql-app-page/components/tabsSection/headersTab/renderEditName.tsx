import { GridRenderEditCellParams, GridEditInputCell } from '@mui/x-data-grid';
import StyledTooltip from './StyledTooltip';

function NameEditInputCell(props: GridRenderEditCellParams) {
  const { error } = props;
  const { errorMsg, ...cellProps } = props;
  const title = (errorMsg as string) ?? null;

  return (
    <StyledTooltip open={!!error} title={title}>
      <GridEditInputCell {...cellProps} />
    </StyledTooltip>
  );
}

function renderEditName(params: GridRenderEditCellParams) {
  return <NameEditInputCell {...params} />;
}

export default renderEditName;
