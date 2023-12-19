import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { Box, Container, Typography } from '@mui/material';
import { useContext } from 'react';
import developersData from '@/pages/welcome/data/data.json';
import DeveloperCard from './DeveloperCard';
import { DeveloperData } from '../../data/types';
import { greySection, flexRowWrap } from '../styles/styles';

function TeamSection() {
  const { localeData } = useContext(LocalizationContext);

  return (
    <Box component="section" sx={greySection}>
      <Container
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          color="primary.main"
          sx={{
            padding: '10px',
          }}
        >
          {localeData.ourTeam}
        </Typography>
      </Container>
      <Container
        sx={{
          ...flexRowWrap,
          justifyContent: 'center',
          gap: 4,
          maxWidth: '720px',
          paddingTop: '10px',
          paddingBottom: '10px',
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
