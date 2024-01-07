import { DEFAULT_LANG } from '@/constants/defaultLang';
import dataTestId from '@/tests/data-test';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import Header from './Header';

describe('Header component tests', () => {
  it('Header component exist', () => {
    const wrapper = wrappedRender(<Header />);

    const header = wrapper.getByTestId(dataTestId.header);
    expect(header).toBeInTheDocument();
  });

  it('Language input exist', () => {
    const wrapper = wrappedRender(<Header />);

    const input = wrapper.getByText(DEFAULT_LANG);
    expect(input).toBeInTheDocument();
  });
});
