import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { useAppSelector } from '@/store/store';
import { Box, Button, CircularProgress, Fab } from '@mui/material';
import { green, red } from '@mui/material/colors';
import { useContext, useEffect, useState } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

function DocsButtons() {
  const [loading, setLoading] = useState(false);
  const { localeData } = useContext(LocalizationContext);
  const { isError, isDefined } = useAppSelector((state) => state.docs);

  const disabled = loading || isError;

  const buttonSx = {
    ...(isError && {
      bgcolor: red[500],
      '&:hover': {
        bgcolor: red[700],
      },
    }),
    ...(isDefined && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    if (loading) {
      // TODO do query
    }
    return () => {
      // TODO abort not finished query
    };
  }, [loading]);

  const handleClick = () => {
    if (!loading) {
      setLoading(true);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          // TODO onClick={handleButtonClick}
          disabled={disabled}
          title={localeData.docs_show}
        >
          <DescriptionIcon />
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>

      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading || isError}
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
