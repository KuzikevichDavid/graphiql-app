import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { routes } from '@/router/router';
import dataTestId from '@/tests/data-test';
import { LocalizationContextType } from '@/contexts/localization/types';
import LocalizationContext from '@/contexts/localization/LocalizationContext';

const testContext: LocalizationContextType = {
  locale: 'en',
  localeData: {
    lang: 'English',
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
      <LocalizationContext.Provider value={testContext}>
        <RouterProvider router={router} />
      </LocalizationContext.Provider>
    );
    console.log(wrapper);
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
