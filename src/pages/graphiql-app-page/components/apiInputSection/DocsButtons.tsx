import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { Box, Button, CircularProgress } from '@mui/material';
import { green, red } from '@mui/material/colors';
import { useContext, useEffect, useState } from 'react';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { getGraphQL } from '@/store/gql/gqlapi';
import INTROSPECTION_QUERY from '@/constants/introspectionQuery';
import { setDocs } from '@/store/docs/docsSlice';
import important from '@/utils/muiStyles/important';
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

  const buttonSx = {
    ...(!newVal &&
      isError && {
        bgcolor: important(red[500]),
        '&:hover': {
          bgcolor: important(red[700]),
        },
      }),
    ...(!newVal &&
      isDefined && {
        bgcolor: important(green[500]),
        '&:hover': {
          bgcolor: important(green[700]),
        },
      }),
  };

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
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={disabled}
          onClick={handleClick}
          title={localeData.docs_load}
        >
          <DownloadForOfflineIcon />
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}

export default DocsButtons;
