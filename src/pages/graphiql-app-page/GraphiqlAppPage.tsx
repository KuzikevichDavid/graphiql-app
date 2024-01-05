import { Container, Grid, Paper } from '@mui/material';
import { useAppSelector } from '@/store/store';
import ApiInputSection from './components/apiInputSection/ApiInputSection';
import TabsSection from './components/tabsSection/TabsSection';
import DocumentationSection from './components/documentationSection/DocumentationSection';
import RequestSection from './components/requestSection/RequestSection';
import ResponseSection from './components/responseSection/ResponseSection';
import ControlPanel from './components/requestSection/ControlPanel';

function GraphiqlAppPage() {
  const isDefined = useAppSelector((state) => state.docs.isDefined);
  const docsEndpoint = useAppSelector((state) => state.docs.endpoint);
  const curEndpoint = useAppSelector((state) => state.gql.endpoint);
  const isNewEnpoint = curEndpoint !== docsEndpoint;

  const shouldShowDocumentation = !isNewEnpoint && isDefined;

  return (
    <Container sx={{ my: '10px' }}>
      <ApiInputSection />
      {shouldShowDocumentation ? <DocumentationSection /> : null}
      <Grid container columns={{ xs: 12, md: 12 }} sx={{ maxWidth: '100%' }}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{ position: 'relative', maxWidth: '100%' }}
        >
          <Paper elevation={4} sx={{ p: '10px' }}>
            <Grid container spacing={2} sx={{ width: '100%' }}>
              <Grid item xs={10}>
                <RequestSection />
              </Grid>
              <Grid item xs={2}>
                <ControlPanel />
              </Grid>
            </Grid>
          </Paper>
          <Paper elevation={4} sx={{ p: '10px', mt: '10px' }}>
            <TabsSection />
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper
            elevation={4}
            sx={{ p: '10px', height: '100%', maxWidth: '100%' }}
          >
            <ResponseSection />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GraphiqlAppPage;
