import { useMediaQuery, useTheme } from '@mui/material';
import { screen, render } from '@testing-library/react';
import resizeScreen from './resizeScreen';

const mobileText = 'Mobile';
const tabletText = 'Tablet';
const desktopeText = 'Desktop';

function FakeApp() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('xs')); // between 0 and 600px
  const isTablet = useMediaQuery(theme.breakpoints.only('sm')); // between 600px and 900px
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // above 900px

  return (
    <>
      {isMobile && <span>{mobileText}</span>}
      {isTablet && <span>{tabletText}</span>}
      {isDesktop && <span>{desktopeText}</span>}
    </>
  );
}

describe('Render Fake Component', () => {
  it.each([
    ['mobile', 400, mobileText],
    ['tablet', 600, tabletText],
    ['desktop', 900, desktopeText],
  ])('Render on %s screen', (_, size: number, searchText: string) => {
    resizeScreen(size);

    render(<FakeApp />);

    const element = screen.getByText(searchText);
    expect(element).toBeInTheDocument();
  });
});
