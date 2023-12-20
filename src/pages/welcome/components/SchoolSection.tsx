import RSSchoolIcon from '@/components/icons/RSSchoolIcon';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import theme from '@/styles/theme';
import testIds from '@/utils/testUtils/constants/testIds';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { useContext } from 'react';
import { flexRowWrap } from './styles/styles';

function SchoolSection() {
  const { localeData } = useContext(LocalizationContext);

  return (
    <Box component="section">
      <Container
        sx={{
          textAlign: 'center',
          padding: 2,
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          color="primary.main"
          sx={{ paddingBottom: '20px' }}
        >
          {localeData.ourSchool}
        </Typography>
        <Container sx={{ ...flexRowWrap, gap: 2, justifyContent: 'center' }}>
          <IconButton
            href="https://rs.school/react/"
            sx={{
              width: 230,
              height: 230,
            }}
          >
            <RSSchoolIcon
              sx={{
                width: '100%',
                height: '100%',
                color: 'black',
                '&:hover': {
                  color: theme.palette.secondary.main,
                },
              }}
            />
          </IconButton>
          <Typography
            sx={{ maxWidth: 320, textAlign: 'justify' }}
            data-testid={testIds.schoolSection}
          >
            {localeData.schoolBio}
          </Typography>
        </Container>
      </Container>
    </Box>
  );
}

export default SchoolSection;
