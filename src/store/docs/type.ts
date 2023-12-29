import { Schema } from '@/pages/graphiql-app-page/components/types';

export type DocsState = {
  isDefined: boolean;
} & DocsData;

export interface DocsData {
  endpoint: string;
  docs?: Schema;
  isError: boolean;
}
