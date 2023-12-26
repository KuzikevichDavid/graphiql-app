import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Toolbar } from '@mui/material';
import resizeScreen from '@/utils/testUtils/mediaQueries/resizeScreen';
import dataTestId from '@/tests/data-test';
import BurgerMenu from './BurgerMenu';

describe('Render BurgerMenu', () => {
  it.each([900])('Desktope width >=%i', (size: number) => {
    resizeScreen(size);

    wrappedRender(
      <Toolbar>
        <BurgerMenu />
      </Toolbar>
    );

    const links = screen.getByTestId(dataTestId.burgerMenuDesktop);
    expect(links).toBeInTheDocument();
  });

  it.each([600])(
    'Tablet or momile width >= 0 and width <= %i',
    (size: number) => {
      resizeScreen(size);

      wrappedRender(
        <Toolbar>
          <BurgerMenu />
        </Toolbar>
      );

      const links = screen.getByTestId(dataTestId.burgerMenuDesktop);
      expect(links).toBeInTheDocument();
    }
  );
});

describe.each([600])(
  'Render BurgerMenu on tablet or momile width >= 0 and width <= %i',
  (size: number) => {
    it('Click on burger icon', async () => {
      const user = userEvent.setup();
      resizeScreen(size);
      wrappedRender(
        <Toolbar>
          <BurgerMenu />
        </Toolbar>
      );
      const burgerIcon = screen.getByTestId(dataTestId.burgerMenuMobile);

      await user.click(burgerIcon);

      const itemsWrapper = screen.getByTestId(dataTestId.burgerMenuMobileItems);
      expect(itemsWrapper).toBeInTheDocument();
      const item = screen.getByTestId(dataTestId.burgerMenuMobileItem);
      await user.click(item);
      expect(
        screen.getByTestId(dataTestId.burgerMenuMobileItems)
      ).not.toBeVisible();
    });
  }
);
