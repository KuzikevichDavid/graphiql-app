import { KeyboardArrowDown } from '@mui/icons-material';
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { FullType } from '@/pages/graphiql-app-page/components/types';
import Fields from './Fields';
import InputValues from './InputValues';
import Row from './Row';
import { bold } from './styles';

interface PropsType {
  index: number;
  data: FullType;
}

function RenderListItem({ index, data }: PropsType) {
  const [open, setOpen] = useState(false);

  const item: FullType = data;

  return (
    <ListItem
      key={index}
      component="div"
      disablePadding
      sx={{
        width: '100%',
        flexDirection: 'column',
        bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
        pb: open ? 2 : 0,
      }}
    >
      <ListItemButton
        alignItems="flex-start"
        onClick={() => setOpen(!open)}
        sx={{
          width: '100%',
          px: 3,
          pt: 2.5,
          pb: open ? 0 : 2.5,
          '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
        }}
      >
        <ListItemText sx={{ my: 0 }}>
          <Typography sx={{ display: 'inline' }} component="span">
            <Typography
              sx={{
                fontSize: 15,
                fontStyle: 'italic',
                fontWeight: 'medium',
                lineHeight: '20px',
                mb: '2px',
              }}
              component="span"
            >
              {`${item.name}`}
            </Typography>
            {`: ${item.kind}`}
          </Typography>
        </ListItemText>
        <KeyboardArrowDown
          sx={{
            mr: -1,
            opacity: 0,
            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
            transition: '0.2s',
          }}
        />
      </ListItemButton>

      {open ? (
        <>
          {item.description ? (
            <Row
              rowData={{
                desc: 'Description',
                sxDesc: bold,
                value: item.description,
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
