import { useAppSelector } from '@/store/store';
import { Box } from '@mui/material';
import { Virtuoso } from 'react-virtuoso';
import { DOC_SECTION_HEIGHT, DOC_SECTION_WIDTH } from '../docsSection';
import { FullType } from '../../types';
import RenderListItem from './RenderListItem';

function Schema() {
  const docs = useAppSelector((state) => state.docs.docs);
  const callback = (index: number, data: FullType) => (
    <RenderListItem data={data} index={index} />
  );

  return docs ? (
    <Box
      sx={{
        width: '100%',
        height: DOC_SECTION_HEIGHT,
        maxWidth: DOC_SECTION_WIDTH,
        overflowWrap: 'anywhere',
        bgcolor: 'background.paper',
      }}
    >
      <Virtuoso
        style={{ height: DOC_SECTION_HEIGHT }}
        data={docs.types}
        itemContent={callback}
      />
    </Box>
  ) : null;
}

export default Schema;
