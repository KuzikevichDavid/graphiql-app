interface GraphQLRequestBody {
  query: string;
  variables: string;
}

const CONTENT_JSON = 'application/json';

export default function fetchGql(
  url: URL,
  body: GraphQLRequestBody,
  headers: Headers
) {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': CONTENT_JSON,
      ...headers,
    },
    body: new Blob([JSON.stringify(body, null, 2)], { type: CONTENT_JSON }),
  };
  return fetch(url, options);
}
