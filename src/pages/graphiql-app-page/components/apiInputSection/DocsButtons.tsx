import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { useAppSelector } from '@/store/store';
import { useContext, useState } from 'react';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CircularProgressBtn from '@/components/buttonActions/progress/CircularProgressBtn';
import { getCircularProgressBtnStyle } from '@/components/buttonActions/progress/circularProgressStyles';
import useLoadDocs from './useLoadDocs';

function DocsButtons() {
  const loadState = useState(false);
  const [loading, setLoading] = loadState;
  const { localeData } = useContext(LocalizationContext);
  const { isError, isDefined } = useAppSelector((state) => state.docs);
  const docsEndpoint = useAppSelector((state) => state.docs.endpoint);
  const endpoint = useAppSelector((state) => state.gql.endpoint);

  const isNewEndpoint = endpoint !== docsEndpoint;

  const disabled = !isNewEndpoint && (loading || isError || isDefined);

  const buttonSx = getCircularProgressBtnStyle(
    (!isNewEndpoint && isError && 'error') ||
      (!isNewEndpoint && isDefined && 'success') ||
      'default'
  );

  const handleClick = () => {
    if (!endpoint) {
      // TODO msg `endpoint is null`
      return;
    }
    setLoading(true);
  };

  useLoadDocs(loadState);

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
