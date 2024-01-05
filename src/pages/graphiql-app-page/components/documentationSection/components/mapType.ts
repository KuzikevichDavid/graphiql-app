import { TypeRef } from './types';

export interface ParsedType {
  type: string;
  name: string;
}

const mapType = (type: TypeRef): ParsedType => {
  const ofType: ParsedType = type.ofType
    ? mapType(type.ofType)
    : { type: type.kind, name: type.name ?? '' };
  switch (type.kind) {
    case 'NON_NULL':
      return { name: ofType.name, type: `${ofType.type}!` };
    case 'LIST':
      return { name: ofType.name, type: `[${ofType.type}]` };
    default:
      return ofType;
  }
};

export default mapType;
