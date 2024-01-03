import { useAppSelector } from '@/store/store';
import { Box } from '@mui/material';
import { Virtuoso } from 'react-virtuoso';
import { FullType } from '../types';
import RenderRow from './RenderRow';

function Schema() {
  const docs = useAppSelector((state) => state.docs.docs);
  const callback = (index: number, data: FullType) => (
    <RenderRow data={data} index={index} />
  );

  return docs ? (
    <Box
      sx={{
        width: '100%',
        height: 400,
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <Virtuoso
        style={{ height: 400 }}
        data={docs.types}
        itemContent={callback}
      />
    </Box>
  ) : null;
}

export default Schema;
