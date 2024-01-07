import { Box, Typography } from '@mui/material';
import dataTestId from '@/tests/data-test';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { useContext } from 'react';
import { InputValue } from './types';
import Row from './Row';
import Type from './Type';

interface PropsType {
  inputValues: InputValue[] | null;
  title: string;
}

function InputValues({ inputValues, title }: PropsType) {
  const { localeData } = useContext(LocalizationContext);

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
          <Row description={{ text: localeData.docsName }}>{input.name} </Row>
          <Row
            description={{
              text: localeData.docsDescription,
            }}
          >
            {input.description}
          </Row>
          <Row description={{ text: localeData.docsType }}>
            <Type type={input.type} />
          </Row>
        </Box>
      ))}
    </Box>
  ) : null;
}

export default InputValues;
