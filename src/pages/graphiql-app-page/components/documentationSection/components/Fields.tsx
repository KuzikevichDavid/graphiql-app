import { Box, Typography } from '@mui/material';
import dataTestId from '@/tests/data-test';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { useContext } from 'react';
import { Field } from './types';
import InputValues from './InputValues';
import Row from './Row';
import Type from './Type';

interface PropsType {
  fields: Field[] | null;
  title: string;
}

function Fields({ fields, title }: PropsType) {
  const { localeData } = useContext(LocalizationContext);

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
              p: '2px',
            }}
            data-testid={dataTestId.docsListItemField}
          >
            <Row description={{ text: localeData.docsName }}>
              {itemValue.name}{' '}
            </Row>
            <Row description={{ text: localeData.docsDescription }}>
              {itemValue.description}{' '}
            </Row>
            <Row
              description={{
                text: localeData.docsType,
              }}
            >
              <Type type={itemValue.type} />
            </Row>
            <InputValues
              inputValues={itemValue.args}
              title={`${localeData.docsArgs}:`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  ) : null;
}

export default Fields;
