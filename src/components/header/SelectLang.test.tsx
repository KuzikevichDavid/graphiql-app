import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { DEFAULT_LANG } from '@/constants/defaultLang';
import SelectLang from './SelectLang';

describe('Rendering with default language', () => {
  it('Change the language', async () => {
    const user = userEvent.setup();
    wrappedRender(<SelectLang />);

    const langElement = screen.getByText(DEFAULT_LANG);
    await user.click(langElement);
    const select = screen.getByRole('listbox');
    const options = screen.getAllByRole('option');
    const newLangOption = options.find(
      (v) => v.dataset.value !== DEFAULT_LANG
    )!;
    await user.selectOptions(select, newLangOption);

    await waitFor(() => {
      const listbox = screen.queryByRole('listbox');
      expect(listbox).not.toBeInTheDocument();
      const prevLang = screen.queryByText(DEFAULT_LANG);
      expect(prevLang).not.toBeInTheDocument();
    });
  });
});
