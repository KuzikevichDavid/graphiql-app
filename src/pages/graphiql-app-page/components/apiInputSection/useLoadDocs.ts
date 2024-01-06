import INTROSPECTION_QUERY from '@/constants/introspectionQuery';
import { setDocs } from '@/store/docs/docsSlice';
import { getGraphQL } from '@/store/gql/gqlapi';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useEffect } from 'react';
import { IntrospectionQuery } from '../documentationSection/components/types';

function useLoadDocs([loading, setLoading]: [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
]) {
  const dispatch = useAppDispatch();
  const { endpoint, headers } = useAppSelector((state) => state.gql);

  function setError() {
    dispatch(setDocs({ endpoint, isError: true }));
    setLoading(false);
  }

  useEffect(() => {
    if (loading) {
      const data = dispatch(
        getGraphQL.initiate({ body: INTROSPECTION_QUERY, endpoint, headers })
      );
      data.then((value) => {
        if (value.isError) {
          setError();
          return;
        }
        if (value.data) {
          const queryData: IntrospectionQuery = JSON.parse(
            value.data
          ) as IntrospectionQuery;
          // eslint-disable-next-line no-underscore-dangle
          const schema = queryData.data.__schema;
          schema.types.sort((a, b) => -1 * a.kind.localeCompare(b.kind));
          dispatch(setDocs({ endpoint, isError: false, schema }));
          setLoading(false);
        }
      }, setError);
      return () => {
        data.abort();
      };
    }

    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
}

export default useLoadDocs;
