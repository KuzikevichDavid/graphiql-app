import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { Lang, Locales } from '@/localization/types';
import theme from '@/styles/theme';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useContext } from 'react';

const textColor = theme.palette.getContrastText(theme.palette.primary.main);

function SelectLang() {
  const { locale, setLocale, localeData } = useContext(LocalizationContext);

  async function handleChange(event: SelectChangeEvent<Locales>) {
    if (event.target.value !== locale.valueOf()) {
      await setLocale(event.target.value as Locales);
    }
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel sx={{ color: textColor }} id="demo-select-small-label">
        {localeData.language}
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={locale}
        label={localeData.language}
        onChange={(event: SelectChangeEvent<Locales>) => handleChange(event)}
      >
        {Object.entries(Locales).map((entry) => (
          <MenuItem
            value={entry[0]}
            key={entry[0]}
            sx={{
              bgcolor: theme.palette.primary.main,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
              },
            }}
          >
            <Typography color={textColor} variant="body1">
              {Lang[entry[1]]}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectLang;
