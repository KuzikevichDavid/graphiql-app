export interface GraphQLRequestBody {
  query: string;
  variables: string;
}

export interface QueryArgs {
  endpoint: string;
  body: GraphQLRequestBody;
  headers?: Headers;
}

export enum QueryEndpoints {
  FetchGql = 'getGraphQL',
}
