import { KeyboardArrowDown } from '@mui/icons-material';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useContext, useState } from 'react';
import { FullType } from '@/pages/graphiql-app-page/components/documentationSection/components/types';
import dataTestId from '@/tests/data-test';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import Fields from './Fields';
import InputValues from './InputValues';
import Row from './Row';
import { bold } from './styles';
import { getListItemStyles, itemNameTextSx } from './listItemStyles';
import Enums from './EnumValues';

interface PropsType {
  data: FullType;
}

function RenderListItem({ data }: PropsType) {
  const { localeData } = useContext(LocalizationContext);
  const [open, setOpen] = useState(false);

  const item: FullType = data;

  const { listItemSx, itemButtonSx, arrowDownSx } = getListItemStyles(open);

  return (
    <ListItem component="div" disablePadding sx={listItemSx}>
      <ListItemButton
        alignItems="flex-start"
        onClick={() => setOpen(!open)}
        sx={itemButtonSx}
        data-testid={dataTestId.documentationListItem}
      >
        <ListItemText sx={{ my: 0 }}>
          <Row
            description={{ text: item.name, styles: itemNameTextSx }}
            wrapperStyles={{ display: 'inline' }}
          >
            {item.kind}
          </Row>
        </ListItemText>
        <KeyboardArrowDown sx={arrowDownSx} />
      </ListItemButton>

      {open ? (
        <>
          {item.description ? (
            <Row
              description={{
                text: localeData.docsDescription,
                styles: bold,
              }}
            >
              {item.description}
            </Row>
          ) : null}
          <Fields fields={item.fields} title={`${localeData.docsFields}:`} />
          <InputValues
            inputValues={item.inputFields}
            title={`${localeData.docsInputs}:`}
          />
          <Enums enums={item.enumValues} title={`${localeData.docsEnums}:`} />
        </>
      ) : null}
    </ListItem>
  );
}

export default RenderListItem;
