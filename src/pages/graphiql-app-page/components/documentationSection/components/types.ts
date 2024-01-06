type GeneralType = {
  name: string;
} | null;

export interface IntrospectionQuery {
  data: {
    __schema: Schema;
  };
}

export interface Schema {
  queryType: GeneralType;
  mutationType: GeneralType;
  subscriptionType: GeneralType;
  types: FullType[];
}

export interface FullType {
  kind: string;
  name: string;
  description: string;
  fields: Field[] | null;
  inputFields: InputValue[] | null;
  enumValues: EnumValue[] | null;
}

export interface Field {
  name: string;
  description: string;
  args: InputValue[];
  type: TypeRef;
}

export interface InputValue {
  name: string;
  description: string;
  type: TypeRef;
  defaultValue?: string | number | boolean | null;
}

export interface TypeRef {
  kind: string;
  name: string | null;
  ofType: TypeRef | null;
}

export interface EnumValue {
  name: string;
  description: string;
}
