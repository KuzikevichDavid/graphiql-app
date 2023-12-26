import App from '@/App';
import { DEFAULT_LANG } from '@/constants/defaultLang';
import dataTestId from '@/tests/data-test';
import TestProvider from '@/utils/testUtils/provider';
import { render } from '@testing-library/react';

describe('Header component tests', () => {
  it('Header component exist', () => {
    const wrapper = render(
      <TestProvider>
        <App />
      </TestProvider>
    );

    const header = wrapper.getByTestId(dataTestId.header);
    expect(header).toBeInTheDocument();
  });

  it('Language input exist', () => {
    const wrapper = render(
      <TestProvider>
        <App />
      </TestProvider>
    );

    const input = wrapper.getByText(DEFAULT_LANG);
    expect(input).toBeInTheDocument();
  });
});
