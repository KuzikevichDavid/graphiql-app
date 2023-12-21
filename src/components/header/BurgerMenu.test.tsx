import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Toolbar } from '@mui/material';
import testIds from '@/utils/testUtils/constants/testIds';
import resizeScreen from '@/utils/testUtils/mediaQueries/resizeScreen';
import BurgerMenu from './BurgerMenu';

describe('Render BurgerMenu', () => {
  it.each([900])('Desktope width >=%i', (size: number) => {
    resizeScreen(size);

    wrappedRender(
      <Toolbar>
        <BurgerMenu />
      </Toolbar>
    );

    const links = screen.getByTestId(testIds.burgerMenuDesktop);
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

      const links = screen.getByTestId(testIds.burgerMenuDesktop);
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
      const burgerIcon = screen.getByTestId(testIds.burgerMenuMobile);

      await user.click(burgerIcon);

      const itemsWrapper = screen.getByTestId(testIds.burgerMenuMobileItems);
      expect(itemsWrapper).toBeInTheDocument();
      const item = screen.getByTestId(testIds.burgerMenuMobileItem);
      await user.click(item);
      expect(
        screen.getByTestId(testIds.burgerMenuMobileItems)
      ).not.toBeVisible();
    });
  }
);
