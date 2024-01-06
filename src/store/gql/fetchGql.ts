import { GraphQLRequestBody } from './types';

const CONTENT_JSON = 'application/json';

export const JSON_INDENTATION = 4;

export default async function fetchGql(
  url: string,
  body: GraphQLRequestBody,
  headers: Headers = new Headers(),
  signal?: AbortSignal
) {
  headers.set('Accept', CONTENT_JSON);
  headers.set('Content-Type', CONTENT_JSON);

  const options: RequestInit = {
    method: 'POST',
    headers,
    body: JSON.stringify(body, null, 2),
    signal,
  };
  const response = await fetch(url, options);

  return JSON.stringify(await response.json(), null, JSON_INDENTATION);
}
