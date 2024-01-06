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
          <Row description={{ text: 'Name' }}>{input.name} </Row>
          <Row
            description={{
              text: 'Description',
            }}
          >
            {input.description}
          </Row>
          <Row description={{ text: 'Type' }}>
            <Type type={input.type} />
          </Row>
        </Box>
      ))}
    </Box>
  ) : null;
}

export default InputValues;
