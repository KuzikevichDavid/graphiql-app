import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
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
    const option = screen.getAllByRole('option');
    await user.selectOptions(select, option[0]);

    expect(screen.queryByText(DEFAULT_LANG)).toBeNull();
  });
});
