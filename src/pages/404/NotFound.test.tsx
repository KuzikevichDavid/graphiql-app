import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { LocalizationContextType } from '@/contexts/localization/types';
import { Lang, Locales } from '@/localization/types';
import AppRoutes from '@/router/router';
import dataTestId from '@/tests/data-test';
import TestProvider from '@/utils/testUtils/provider';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

const testContext: LocalizationContextType = {
  locale: Locales.en,
  localeData: {
    lang: Lang.en,
    notFound_Title: 'test_title',
    notFound_Button: 'test_button',
  },
  setLocale: vi.fn(() => Promise.resolve()),
};

describe('NotFoundPage tests', () => {
  it('the 404 page is displayed when navigating to an invalid route', () => {
    const wrapper = render(
      <TestProvider>
        <LocalizationContext.Provider value={testContext}>
          <MemoryRouter initialEntries={['/404']}>
            <AppRoutes />
          </MemoryRouter>
        </LocalizationContext.Provider>
      </TestProvider>
    );
    const page = wrapper.getByTestId(dataTestId.notFound);
    expect(page).toBeInTheDocument();

    const title = wrapper.getByText(testContext.localeData.notFound_Title);
    expect(title).toBeInTheDocument();

    const button = wrapper.getByRole('link', {
      name: testContext.localeData.notFound_Button,
    });
    expect(button).toBeInTheDocument();
  });
});
