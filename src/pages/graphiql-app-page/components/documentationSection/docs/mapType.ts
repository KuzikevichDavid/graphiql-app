import { TypeRef } from '../../types';

export interface ParsedType {
  type: string;
  name: string;
}

const mapType = (type: TypeRef): ParsedType => {
  const res: ParsedType = type.ofType
    ? mapType(type.ofType)
    : { type: type.kind, name: type.name ?? '' };
  switch (type.kind) {
    case 'NON_NULL':
      res.type = `${res.type}!`;
      break;
    case 'LIST':
      res.type = `[${res.type}]`;
      break;
    default:
      break;
  }
  return res;
};

export default mapType;
