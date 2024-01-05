export const itemNameTextSx = {
  fontSize: 15,
  fontStyle: 'italic',
  fontWeight: 'medium',
  lineHeight: '20px',
  mb: '2px',
};

export const getListItemStyles = (open: boolean) => ({
  listItemSx: {
    width: '100%',
    flexDirection: 'column',
    bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
    pb: open ? 2 : 0,
  },

  itemButtonSx: {
    width: '100%',
    px: 3,
    pt: 2.5,
    pb: open ? 0 : 2.5,
    '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
  },

  arrowDownSx: {
    mr: -1,
    opacity: 0,
    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
    transition: '0.2s',
  },
});
