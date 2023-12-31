import { Container } from '@mui/material';
import ApiInputSection from './components/apiInputSection/ApiInputSection';
import TabsSection from './components/tabsSection/TabsSection';
import DocumentationSection from './components/documentationSection/DocumentationSection';

function GraphiqlAppPage() {
  return (
    <Container>
      <ApiInputSection />
      <DocumentationSection />
      <Container>
        <TabsSection />
      </Container>
    </Container>
  );
}

export default GraphiqlAppPage;
