import { Box, Typography } from '@mui/material';
import { Field } from '../types';
import InputValues from './InputValues';
import Row from './Row';

interface PropsType {
  fields: Field[] | null;
  title: string;
}

function Fields({ fields, title }: PropsType) {
  return fields && fields.length > 0 ? (
    <Box
      sx={{
        width: '100%',
        m: '2px',
      }}
    >
      <Typography>{title}</Typography>
      <Box
        sx={{
          paddingLeft: '5px',
        }}
      >
        {fields.map((itemValue) => (
          <Box
            key={itemValue.name}
            sx={{
              width: '100%',
              border: 'solid 1px',
              m: '2px',
            }}
          >
            <Row rowData={{ desc: 'Name', value: itemValue.name }} />
            <Row
              rowData={{ desc: 'Description', value: itemValue.description }}
            />
            <Row rowData={{ desc: 'Type', value: itemValue.types?.kind }} />
            <InputValues inputValues={itemValue.args} title="Args:" />
          </Box>
        ))}
      </Box>
    </Box>
  ) : null;
}

export default Fields;
