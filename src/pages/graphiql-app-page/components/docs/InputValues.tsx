import { Box, Typography } from '@mui/material';
import { InputValue } from '../types';
import Row from './Row';

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
      <Typography> {title} </Typography>
      {inputValues.map((input) => (
        <Box
          key={input.name}
          sx={{
            width: '100%',
            border: 'solid 1px',
          }}
        >
          <Row rowData={{ desc: 'Name', value: input.name }} />
          <Row rowData={{ desc: 'Description', value: input.description }} />
          <Row rowData={{ desc: 'Type', value: input.type?.kind }} />
        </Box>
      ))}
    </Box>
  ) : null;
}

export default InputValues;
