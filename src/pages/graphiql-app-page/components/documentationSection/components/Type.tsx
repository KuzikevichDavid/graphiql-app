import { TypeRef } from './types';
import mapType from './mapType';
import Row from './Row';
import { inline, italic } from './styles';

interface PropsType {
  type: TypeRef;
}

function Type({ type }: PropsType) {
  const mapped = mapType(type);

  return (
    <Row
      rowData={{
        desc: mapped.name,
        descriptionSx: italic,
        children: mapped.type,
      }}
      sx={inline}
    />
  );
}

export default Type;
