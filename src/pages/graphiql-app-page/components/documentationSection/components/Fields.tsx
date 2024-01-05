import { Box, Typography } from '@mui/material';
import dataTestId from '@/tests/data-test';
import { Field } from './types';
import InputValues from './InputValues';
import Row from './Row';
import Type from './Type';

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
      <Typography variant="h6">{title}</Typography>
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
            data-testid={dataTestId.docsListItemField}
          >
            <Row rowData={{ desc: 'Name', children: itemValue.name }} />
            <Row
              rowData={{ desc: 'Description', children: itemValue.description }}
            />
            <Row
              rowData={{
                desc: 'Type',
                children: <Type type={itemValue.type} />,
              }}
            />
            <InputValues inputValues={itemValue.args} title="Args:" />
          </Box>
        ))}
      </Box>
    </Box>
  ) : null;
}

export default Fields;
