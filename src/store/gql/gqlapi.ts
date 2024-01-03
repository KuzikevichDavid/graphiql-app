import fetchGql from '@/store/gql/fetchGql';
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
} from '@reduxjs/toolkit/query/react';
import { QueryArgs, QueryEndpoints } from './types';

const customBaseQuery: BaseQueryFn<QueryArgs, string> = async (
  args: QueryArgs,
  api: BaseQueryApi
) => {
  try {
    switch (api.endpoint as QueryEndpoints) {
      case QueryEndpoints.FetchGql:
        return {
          data: await fetchGql(args.endpoint, args.body, args.headers),
        };
      default:
        return {
          error: {
            status: 500,
            statusText: 'Internal Server Error',
            data: 'wrong dispatch endpoint',
          },
        };
    }
  } catch (error) {
    return { error };
  }
};

export const gqlapi = createApi({
  baseQuery: customBaseQuery,
  reducerPath: 'gqlapi',
  tagTypes: [],
  endpoints: (builder) => ({
    [QueryEndpoints.FetchGql]: builder.query<string, QueryArgs>({
      query: (args: QueryArgs) => args,
      keepUnusedDataFor: 360,
    }),
  }),
});

export const { getGraphQL } = gqlapi.endpoints;
export const { useGetGraphQLQuery } = gqlapi;
