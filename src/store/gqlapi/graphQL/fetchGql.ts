import { GraphQLRequestBody } from './types';

const CONTENT_JSON = 'application/json';

const JSON_INDENTATION = 4;

export default async function fetchGql(
  url: string,
  body: GraphQLRequestBody,
  headers: Headers = new Headers()
) {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      Accept: CONTENT_JSON,
      'Content-Type': CONTENT_JSON,
      ...headers,
    },
    body: new Blob([JSON.stringify(body, null, 2)], { type: CONTENT_JSON }),
  };
  const response = await fetch(url, options);

  return JSON.stringify(await response.json(), null, JSON_INDENTATION);
}
