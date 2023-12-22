import App from '@/App';
import dataTestId from '@/tests/data-test';
import { render } from '@testing-library/react';

describe('Header component tests', () => {
  it('Header component exist', () => {
    const wrapper = render(<App />);
    const header = wrapper.getByTestId(dataTestId.header);
    expect(header).toBeInTheDocument();
  });
  it('Language input exist', () => {
    const wrapper = render(<App />);
    const input = wrapper.getByRole('checkbox');
    expect(input).toBeInTheDocument();
  });
});
