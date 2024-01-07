import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { DeveloperData } from '@/pages/welcome/data/types';
import { GitHub } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { gitCard } from './styles/styles';

interface PropType {
  data: DeveloperData;
}

export default function GitCard({ data }: PropType) {
  const { contacts, nameLocaleIndex } = data;
  const { localeData } = useContext(LocalizationContext);

  return (
    <IconButton sx={gitCard} href={contacts.gitHub} color="inherit">
      <GitHub />
      <Typography>{localeData[nameLocaleIndex]}</Typography>
    </IconButton>
  );
}
