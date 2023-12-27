import { Container } from '@mui/material';
import ApiInputSection from './components/apiInputSection/ApiInputSection';
import TabsSection from './components/tabsSection/TabsSection';

function GraphiqlAppPage() {
  return (
    <Container>
      <ApiInputSection />
      <Container>
        <TabsSection />
      </Container>
    </Container>
  );
}

export default GraphiqlAppPage;
