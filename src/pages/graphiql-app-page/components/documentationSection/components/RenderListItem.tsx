import { KeyboardArrowDown } from '@mui/icons-material';
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { FullType } from '@/pages/graphiql-app-page/components/documentationSection/components/types';
import Fields from './Fields';
import InputValues from './InputValues';
import Row from './Row';
import { bold } from './styles';
import { getListItemStyles, itemNameTextSx } from './listItemStyles';

interface PropsType {
  data: FullType;
}

function RenderListItem({ data }: PropsType) {
  const [open, setOpen] = useState(false);

  const item: FullType = data;

  const { listItemSx, itemButtonSx, arrowDownSx } = getListItemStyles(open);

  return (
    <ListItem component="div" disablePadding sx={listItemSx}>
      <ListItemButton
        alignItems="flex-start"
        onClick={() => setOpen(!open)}
        sx={itemButtonSx}
      >
        <ListItemText sx={{ my: 0 }}>
          <Typography sx={{ display: 'inline' }} component="span">
            <Typography sx={itemNameTextSx} component="span">
              {item.name}
            </Typography>
            {`: ${item.kind}`}
          </Typography>
        </ListItemText>
        <KeyboardArrowDown sx={arrowDownSx} />
      </ListItemButton>

      {open ? (
        <>
          {item.description ? (
            <Row
              rowData={{
                desc: 'Description',
                descriptionSx: bold,
                children: item.description,
              }}
            />
          ) : null}
          <Fields fields={item.fields} title="Fields:" />
          <InputValues inputValues={item.inputFields} title="Input Fields:" />
        </>
      ) : null}
    </ListItem>
  );
}

export default RenderListItem;
