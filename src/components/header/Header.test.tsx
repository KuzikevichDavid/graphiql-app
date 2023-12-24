import App from '@/App';
import dataTestId from '@/tests/data-test';
import setupTestStore from '@/utils/testUtils/provider';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('Header component tests', () => {
  it('Header component exist', () => {
    const wrapper = render(
      <Provider store={setupTestStore()}>
        <App />
      </Provider>
    );
    const header = wrapper.getByTestId(dataTestId.header);
    expect(header).toBeInTheDocument();
  });
  it('Language input exist', () => {
    const wrapper = render(
      <Provider store={setupTestStore()}>
        <App />
      </Provider>
    );
    const input = wrapper.getByRole('checkbox');
    expect(input).toBeInTheDocument();
  });
});
