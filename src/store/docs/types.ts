import { Schema } from '@/pages/graphiql-app-page/components/documentationSection/components/types';

export type DocsState = {
  isDefined: boolean;
} & DocsData;

export interface DocsData {
  endpoint: string;
  schema?: Schema;
  isError: boolean;
}
