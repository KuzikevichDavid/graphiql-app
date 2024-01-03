import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderIcon from '@mui/icons-material/Folder';
import { Typography } from '@mui/material';
import LocalizationContext from '@/contexts/localization/LocalizationContext';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function DocumentationSection() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { localeData } = React.useContext(LocalizationContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          borderRadius: '10px 10px 0px 0px',
          width: '160px',
          mr: 2,
          ...(open && { display: 'none' }),
          transform: 'rotate(90deg)',
          position: 'fixed',
          top: '150px',
          left: '-48px',
          backgroundColor: 'primary.main',
          color: 'primary.light',
          zIndex: '1000',
          '&:hover': { backgroundColor: 'primary.main' },
        }}
      >
        <FolderIcon />
        <Typography>{localeData.documentation}</Typography>
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        PaperProps={{ elevation: 12 }}
      >
        <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>{localeData.documentation}</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography>Documentation</Typography>
      </Drawer>
    </Box>
  );
}

// function DocumentationSection() {
//   return <p>Documentation</p>;
// }

// export default DocumentationSection;
