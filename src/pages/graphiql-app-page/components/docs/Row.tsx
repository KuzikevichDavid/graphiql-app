import { Box, Typography } from '@mui/material';

interface PropsType {
  rowData: {
    desc: string;
    value: string;
  };
}

function Row({ rowData: { desc, value } }: PropsType) {
  return (
    <Box>
      <Typography component="span">
        {`${desc}: `}
        <Typography component="span" sx={{ fontStyle: 'italic' }}>
          {`${value}`}
        </Typography>
      </Typography>
    </Box>
  );
}

export default Row;
