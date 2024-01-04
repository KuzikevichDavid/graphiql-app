import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useContext, useEffect, useState } from 'react';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { getGraphQL } from '@/store/gql/gqlapi';
import INTROSPECTION_QUERY from '@/constants/introspectionQuery';
import { setDocs } from '@/store/docs/docsSlice';
import CircularProgressBtn from '@/components/buttonActions/progress/CircularProgressBtn';
import getCircularProgressBtnStyle from '@/components/buttonActions/progress/getCircularProgressBtnStyle';
import { IntrospectionQuery } from '../types';

function DocsButtons() {
  const [loading, setLoading] = useState(false);
  const { localeData } = useContext(LocalizationContext);
  const { isError, isDefined } = useAppSelector((state) => state.docs);
  const docsEndpoint = useAppSelector((state) => state.docs.endpoint);
  const { endpoint, headers } = useAppSelector((state) => state.gql);
  const dispatch = useAppDispatch();

  const newVal = endpoint !== docsEndpoint;

  const disabled = !newVal && (loading || isError || isDefined);

  const buttonSx = getCircularProgressBtnStyle(
    !newVal && isError,
    !newVal && isDefined
  );

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
          dispatch(setDocs({ endpoint, isError: false, docs: schema }));
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

  const handleClick = () => {
    if (!endpoint) {
      // endpoint is null
      return;
    }
    setLoading(true);
  };

  return (
    <CircularProgressBtn
      buttonSx={buttonSx}
      disabled={disabled}
      onClick={handleClick}
      title={localeData.docs_load}
      isLoading={loading}
    >
      <DownloadForOfflineIcon />
    </CircularProgressBtn>
  );
}

export default DocsButtons;
