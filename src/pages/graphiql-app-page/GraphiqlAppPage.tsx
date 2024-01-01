import { Container, Grid } from '@mui/material';
import ApiInputSection from './components/apiInputSection/ApiInputSection';
import TabsSection from './components/tabsSection/TabsSection';
import DocumentationSection from './components/documentationSection/DocumentationSection';
import RequestSection from './components/requestSection/RequestSection';
import ResponseSection from './components/responseSection/ResponseSection';

function GraphiqlAppPage() {
  return (
    <Container sx={{ my: '20px' }}>
      <ApiInputSection />
      <DocumentationSection />
      <Grid container spacing={2} sx={{ mt: '10px' }}>
        <Grid item xs={6}>
          <RequestSection />
          <TabsSection />
        </Grid>
        <Grid item xs={6}>
          <ResponseSection />
        </Grid>
      </Grid>
    </Container>
  );
}

export default GraphiqlAppPage;
