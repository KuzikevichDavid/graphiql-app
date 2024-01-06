import { RootState } from '@/store/store';

export const selectEndpoint = ({ gql }: RootState) => gql.endpoint;
export const selectQuery = ({ gql }: RootState) => gql.body.query;
export const selectVariables = ({ gql }: RootState) => gql.body.variables;
export const selectHeaders = ({ gql }: RootState) => gql.headers;
export const selectMappedHeaders = ({ gql }: RootState) => gql.mappedHeaders;
