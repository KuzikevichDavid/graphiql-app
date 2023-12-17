import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { Box, Container, Typography } from '@mui/material';
import { useContext } from 'react';
import DeveloperCard from './DeveloperCard';
import developersData from '../data/data.json';
import { DeveloperData } from '../data/types';
import { flexRowWrap, greySection } from './styles/styles';

function TeamSection() {
  const { localeData } = useContext(LocalizationContext);

  return (
    <Box component="section" sx={greySection}>
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
          ...flexRowWrap,
          justifyContent: 'center',
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
  );
}

export default TeamSection;
