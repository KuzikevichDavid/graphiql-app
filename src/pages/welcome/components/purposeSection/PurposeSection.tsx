import LocalizationContext from '@/contexts/localization/LocalizationContext';
import important from '@/utils/muiStyles/important';
import { Box, Container, Typography } from '@mui/material';
import { useContext } from 'react';
import { greySection } from '../styles/styles';
import SignButtons from './SignButtons';

function PurposeSection() {
  const { localeData } = useContext(LocalizationContext);
  return (
    <Box
      component="section"
      sx={{ ...greySection, display: 'flex', flexDirection: 'column' }}
    >
      <Container
        sx={{
          alignSelf: 'flex-end',
          width: important('auto'),
          marginRight: 0,
          marginTop: 1,
        }}
      >
        <SignButtons />
      </Container>
      <Container
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '720px',
          padding: '10px',
        }}
      >
        <Box sx={{ margin: '10px' }}>
          <Container sx={{ margin: '10px' }}>
            <Typography component="h1" variant="h3" color="primary.main">
              {localeData.welcome}
            </Typography>
          </Container>
          <Container>
            <Typography component="h2" variant="h5" color="secondary.main">
              {localeData.purpose}
            </Typography>
            <Typography paragraph>{localeData.welcomePurpose}</Typography>
            <Container sx={{ display: 'inline' }}>
              <Typography sx={{ display: 'inline' }}>
                {`${localeData.welcomeNotAuth} `}
              </Typography>
              <SignButtons />
            </Container>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}

export default PurposeSection;
