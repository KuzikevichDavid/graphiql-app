import WelcomePage from '@/pages/welcome/WelcomePage';
import dataTestId from '@/tests/data-test';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
import RootLayout from './RootLayout';

describe('RootLayout', () => {
  it('renders layout components and children', () => {
    wrappedRender(
      <RootLayout>
        <WelcomePage />
      </RootLayout>
    );
    const header = screen.getByTestId(dataTestId.header);
    const footer = screen.getByText('Footer');
    const welcomePageHeader = screen.getByRole('heading', {
      name: 'You Are Welcome',
    });
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(welcomePageHeader).toBeInTheDocument();
  });
});
