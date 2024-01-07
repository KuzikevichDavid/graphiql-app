import developersData from '@/pages/welcome/data/data.json';
import { DeveloperData } from '@/pages/welcome/data/types';

import { Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';
import GitCard from './GitCard';
import RSSchoolIcon from '../icons/RSSchoolIcon';

import { flexGit, flexGitMobile, rsLogo } from './styles/styles';

const YEAR = '2024';
const COURSE_LINK = 'https://rs.school/react/';

export default function Footer() {
  const isXs = useMediaQuery('(max-width:900px)');

  return (
    <>
      <Divider />
      <Grid container sx={flexGitMobile}>
        <Grid item md={4} sm={12} sx={isXs ? flexGitMobile : flexGit}>
          {developersData.data.map((value: DeveloperData) => {
            return <GitCard data={value} key={value.nameLocaleIndex} />;
          })}
        </Grid>
        <Grid item md={4} sm={12} sx={{ textAlign: 'center' }}>
          <Typography variant="h5">{YEAR}</Typography>
        </Grid>
        <Grid item md={4} sm={12} sx={{ textAlign: 'center', height: '100px' }}>
          <IconButton href={COURSE_LINK} sx={rsLogo}>
            <RSSchoolIcon sx={rsLogo} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
