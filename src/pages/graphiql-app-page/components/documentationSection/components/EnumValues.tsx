import LocalizationContext from '@/contexts/localization/LocalizationContext';
import dataTestId from '@/tests/data-test';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import Row from './Row';
import { EnumValue } from './types';

interface PropsType {
  enums: EnumValue[] | null;
  title: string;
}

function Enums({ enums, title }: PropsType) {
  const { localeData } = useContext(LocalizationContext);

  return enums && enums.length > 0 ? (
    <Box
      sx={{
        width: '100%',
        m: '2px',
      }}
      data-testid={dataTestId.docsListItemEnumValue}
    >
      <Typography variant="h6">{title}</Typography>
      <Box
        sx={{
          paddingLeft: '5px',
        }}
      >
        {enums.map((enumValue) => (
          <Box
            key={enumValue.name}
            sx={{
              width: '100%',
              border: 'solid 1px',
              p: '2px',
            }}
          >
            <Row description={{ text: localeData.docsName }}>
              {enumValue.name}{' '}
            </Row>
            <Row description={{ text: localeData.docsDescription }}>
              {enumValue.description}{' '}
            </Row>
          </Box>
        ))}
      </Box>
    </Box>
  ) : null;
}

export default Enums;
