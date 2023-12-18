import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { routes } from '@/router/router';
import { NOT_FOUND_TITLES } from './NotFound';

describe('NotFoundPage tests', () => {
  it('the 404 page is displayed when navigating to an invalid route', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/404'],
    });

    render(<RouterProvider router={router} />);

    const title = screen.getByText(NOT_FOUND_TITLES.title);
    expect(title).toBeInTheDocument();

    const button = screen.getByRole('link', {
      name: NOT_FOUND_TITLES.button,
    });
    expect(button).toBeInTheDocument();
  });
});
