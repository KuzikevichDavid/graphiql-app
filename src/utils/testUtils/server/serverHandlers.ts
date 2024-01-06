import { GraphQLRequestBody } from '@/store/gql/types';
import { http, HttpResponse } from 'msw';
import FAKE_DOCS_DATA from './fakeDocsData';
import { FakeResponse } from './types';

const FAKE_DATA = 'response data';
const FAKE_DATA_VARIABLES = 'response data variables';

const gqlResolver = async ({ request }: { request: Request }) => {
  const body = (await request.json()) as GraphQLRequestBody;

  const data: FakeResponse = {
    data: body.variables ? FAKE_DATA_VARIABLES : FAKE_DATA,
  };
  return HttpResponse.json(data);
};

const FAKE_DOCS_URL = 'https://fake_endpoint.com';

const gqlDocsResolver = () => {
  return HttpResponse.text(FAKE_DOCS_DATA);
};

const handlers = [
  http.post(FAKE_DOCS_URL, gqlDocsResolver),
  http.post('*', gqlResolver),
];

export { handlers, FAKE_DATA, FAKE_DATA_VARIABLES, FAKE_DOCS_URL };
