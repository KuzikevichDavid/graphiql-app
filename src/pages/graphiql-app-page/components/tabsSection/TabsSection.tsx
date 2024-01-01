import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { Paper } from '@mui/material';
import HeadersTab from './HeadersTab';
import VariablesTab from './VariablesTab';

interface TabPanelProps {
  index: number;
  value: number;
  children: React.ReactNode;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsSection() {
  const [value, setValue] = React.useState(0);
  const { localeData } = React.useContext(LocalizationContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} sx={{ mt: '10px' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="secondary"
            textColor="secondary"
            sx={{}}
          >
            <Tab label={localeData.appVariables} {...a11yProps(0)} />
            <Tab label={localeData.appHeaders} {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <HeadersTab />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <VariablesTab />
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}
