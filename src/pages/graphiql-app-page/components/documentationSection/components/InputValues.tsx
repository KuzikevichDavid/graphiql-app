import { Box, Typography } from '@mui/material';
import dataTestId from '@/tests/data-test';
import { InputValue } from './types';
import Row from './Row';
import Type from './Type';

interface PropsType {
  inputValues: InputValue[] | null;
  title: string;
}

function InputValues({ inputValues, title }: PropsType) {
  return inputValues && inputValues.length > 0 ? (
    <Box
      sx={{
        width: '100%',
        paddingLeft: '5px',
      }}
    >
      <Typography variant="h6"> {title} </Typography>
      {inputValues.map((input) => (
        <Box
          key={input.name}
          sx={{
            width: '100%',
            border: 'solid 1px',
          }}
          data-testid={dataTestId.docsListItemInputValue}
        >
          <Row rowData={{ desc: 'Name', children: `${input.name}` }} />
          <Row
            rowData={{ desc: 'Description', children: `${input.description}` }}
          />
          <Row
            rowData={{ desc: 'Type', children: <Type type={input.type} /> }}
          />
        </Box>
      ))}
    </Box>
  ) : null;
}

export default InputValues;
