import loadLocale from '@/localization/loader';
import { Locales } from '@/localization/types';
import { useContext, useMemo, useState } from 'react';
import LocalizationContext from './LocalizationContext';
import { LocalizationContextType } from './types';

interface PropType {
  children: React.ReactNode;
}

function LocalizationContextProvider({ children }: PropType) {
  const context = useContext(LocalizationContext);
  const [locale, setLocale] = useState(context.locale);
  const [localeData, setLocaleData] = useState(context.localeData);

  const contextValue = useMemo<LocalizationContextType>(() => {
    return {
      locale,
      localeData,
      setLocale: async (newLocale: Locales) => {
        const data = await loadLocale(newLocale);
        setLocale(newLocale);
        setLocaleData(data);
      },
    };
  }, [locale, localeData]);

  return (
    <LocalizationContext.Provider value={contextValue}>
      {children}
    </LocalizationContext.Provider>
  );
}

export default LocalizationContextProvider;
