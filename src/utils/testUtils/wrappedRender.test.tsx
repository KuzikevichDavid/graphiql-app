import { screen } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import wrappedRender from './wrappedRender';

const content = 'content';

function FakeElement() {
  const location = useLocation();
  return (
    <>
      <div>{content}</div>
      <div>{location.pathname}</div>
    </>
  );
}

describe('JSX element with content', () => {
  it('Wrapped render without params', async () => {
    wrappedRender(<FakeElement />);

    const element = await screen.findByText(content);
    expect(element).toBeInTheDocument();
  });

  it('Wrapped render with initial entrie', async () => {
    const route = 'route';

    wrappedRender(<FakeElement />, { initialEntries: [route] });

    const element = await screen.findByText(route);
    expect(element).toBeInTheDocument();
  });
});
