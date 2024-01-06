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
      description={{
        text: mapped.name,
        styles: italic,
      }}
      wrapperStyles={inline}
    >
      {mapped.type}
    </Row>
  );
}

export default Type;
