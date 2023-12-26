import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/router/router';
import { LocalizationContextType } from '@/contexts/localization/types';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import { Lang, Locales } from '@/localization/types';
import dataTestId from '@/tests/data-test';
import TestProvider from '@/utils/testUtils/provider';

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
    const router = createMemoryRouter(routes, {
      initialEntries: ['/404'],
    });

    const wrapper = render(
      <TestProvider>
        <LocalizationContext.Provider value={testContext}>
          <RouterProvider router={router} />
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
