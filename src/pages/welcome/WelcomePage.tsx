import LocalizationContext from '@/contexts/localization/LocalizationContext';
import Routes from '@/router/routes';
import {
  Button,
  Container,
  createSvgIcon,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import RsSchool from '@/assets/welcomePage/rs_school_js.svg?react';
import DeveloperCard from './components/DeveloperCard';
import developersData from './data/data.json';
import { DeveloperData } from './data/types';

const RSSchoolIcon = createSvgIcon(<RsSchool />, 'RSSchool');

function WelcomePage() {
  const { localeData } = useContext(LocalizationContext);

  return (
    <>
      <Box
        component="section"
        sx={{
          bgcolor: '#e0dee3',
          width: '100%',
        }}
      >
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
            </Container>
          </Box>
          <Box
            sx={{
              display: 'inline',
            }}
          >
            <Typography paragraph>
              {`${localeData.welcomeNotAuth} `}
              <Link
                href={Routes.SignUp}
                color="inherit"
                underline="none"
                variant="h6"
              >
                {localeData.signup}
              </Link>
              {' / '}
              <Link
                href={Routes.SignIn}
                color="inherit"
                underline="none"
                variant="h6"
              >
                {localeData.signin}
              </Link>
            </Typography>
          </Box>
          <Box>
            <Button
              href={Routes.Main}
              color="primary"
              variant="contained"
              sx={{
                '& hover': {
                  bgcolor: 'primary.main.lighter',
                },
              }}
            >
              <Typography component="h2" variant="h5">
                {localeData.welcomeAuth}
              </Typography>
            </Button>
          </Box>
        </Container>
      </Box>
      <Box component="section">
        <Container
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography component="h2" variant="h5" color="primary.main">
            {localeData.ourSchool}
          </Typography>
          <IconButton
            href="https://rs.school/js/"
            sx={{
              width: 350,
              height: 350,
            }}
          >
            <RSSchoolIcon
              sx={{
                width: '100%',
                height: '100%',
              }}
            />
          </IconButton>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          bgcolor: '#e0dee3',
          width: '100%',
        }}
      >
        <Container
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography component="h2" variant="h5" color="primary.main">
            {localeData.ourTeam}
          </Typography>
        </Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 4,
            maxWidth: '720px',
            padding: '10px',
          }}
        >
          {developersData.data.map((value: DeveloperData) => {
            return <DeveloperCard data={value} key={value.nameLocaleIndex} />;
          })}
        </Container>
      </Box>
    </>
  );
}

export default WelcomePage;
