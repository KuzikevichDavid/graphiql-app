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

interface FullType {
  kind: string;
  name: string;
  description: string;
  fields: Field[] | null;
}

interface Field {
  name: string;
  description: string;
  args: InputValue[];
  types: TypeRef;
}

interface InputValue {
  name: string;
  description: string;
  type: TypeRef;
  defaultValue?: string | number | boolean | null;
}

interface TypeRef {
  kind: string;
  name: string;
  ofType: TypeRef | null;
}
