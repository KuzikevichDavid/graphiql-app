import { GraphQLRequestBody } from '@/store/gqlapi/graphQL/types';

export interface QueryArgs {
  endpoint: string;
  body: GraphQLRequestBody;
  headers?: Headers;
}

export enum QueryEndpoints {
  FetchGql = 'getGraphQL',
}
