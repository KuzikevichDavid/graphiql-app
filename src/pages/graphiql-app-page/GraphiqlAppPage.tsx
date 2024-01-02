import { Container, Grid } from '@mui/material';
import ApiInputSection from './components/apiInputSection/ApiInputSection';
import TabsSection from './components/tabsSection/TabsSection';
import DocumentationSection from './components/documentationSection/DocumentationSection';
import RequestSection from './components/requestSection/RequestSection';
import ResponseSection from './components/responseSection/ResponseSection';
import RequestButton from './components/requestSection/RequestButton';

function GraphiqlAppPage() {
  return (
    <Container sx={{ my: '20px' }}>
      <ApiInputSection />
      <DocumentationSection />
      <Grid container spacing={2} sx={{ mt: '10px' }}>
        <Grid item xs={6} sx={{ position: 'relative' }}>
          <RequestSection />
          <TabsSection />
          <RequestButton />
        </Grid>
        <Grid item xs={6}>
          <ResponseSection />
        </Grid>
      </Grid>
    </Container>
  );
}

export default GraphiqlAppPage;
