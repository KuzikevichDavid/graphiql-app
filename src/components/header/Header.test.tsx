import App from '@/App';
import { DEFAULT_LANG } from '@/constants/defaultLang';
import testIds from '@/utils/testUtils/constants/testIds';
import { render } from '@testing-library/react';

describe('Header component tests', () => {
  it('Header component exist', () => {
    const wrapper = render(<App />);
    const header = wrapper.getByTestId(testIds.header);
    expect(header).toBeInTheDocument();
  });
  it('Language input exist', () => {
    const wrapper = render(<App />);
    const input = wrapper.getByText(DEFAULT_LANG);
    expect(input).toBeInTheDocument();
  });
});
