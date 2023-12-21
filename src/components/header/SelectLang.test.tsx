import wrappedRender from '@/utils/testUtils/wrappedRender';
import {
  screen,
  waitForElementToBeRemoved,
  logDOM,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { DEFAULT_LANG } from '@/constants/defaultLang';
import SelectLang from './SelectLang';

describe('Rendering with default language', () => {
  it.skip('Change the language', async () => {
    const user = userEvent.setup();
    wrappedRender(<SelectLang />);

    const langElement = screen.getByText(DEFAULT_LANG);
    await user.click(langElement);
    const select = screen.getByRole('listbox');
    const option = screen.getAllByRole('option');
    logDOM(select);
    const promise = user.selectOptions(select, option[0]);
    await waitForElementToBeRemoved(() => screen.queryByRole('listbox'), {
      interval: 2000,
    });
    await promise;

    logDOM(screen.queryByRole('listbox') ?? undefined);
    const listbox = screen.queryByRole('listbox');
    expect(listbox).not.toBeInTheDocument();
    const prevLang = screen.queryByText(DEFAULT_LANG);
    expect(prevLang).not.toBeInTheDocument();
  });
});
