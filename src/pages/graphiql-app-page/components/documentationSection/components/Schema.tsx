import { useAppSelector } from '@/store/store';
import { Box } from '@mui/material';
import { Virtuoso } from 'react-virtuoso';
import { FullType } from '@/pages/graphiql-app-page/components/documentationSection/components/types';
import dataTestId from '@/tests/data-test';
import { DOC_SECTION_HEIGHT, DOC_SECTION_WIDTH } from '../docsSection';
import RenderListItem from './RenderListItem';

function Schema() {
  const docs = useAppSelector((state) => state.docs.schema);
  const renderItem = (_: number, data: FullType) => (
    <RenderListItem data={data} />
  );

  if (!docs) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: DOC_SECTION_HEIGHT,
        maxWidth: DOC_SECTION_WIDTH,
        overflowWrap: 'anywhere',
        bgcolor: 'background.paper',
      }}
      data-testid={dataTestId.docsSchema}
    >
      <Virtuoso
        style={{ height: DOC_SECTION_HEIGHT }}
        data={docs.types}
        itemContent={renderItem}
      />
    </Box>
  );
}

export default Schema;
