import testIds from '@/utils/testUtils/constants/testIds';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { describe, it, expect } from 'vitest';
import PurposeSection from './components/purposeSection/PurposeSection';
import SchoolSection from './components/SchoolSection';
import TeamSection from './components/teamSection/TeamSection';
import WelcomePage from './WelcomePage';

describe('Rendering "Welcome" page', () => {
  it.each([
    ['School', <SchoolSection key="School" />, testIds.schoolSection],
    ['Purpose', <PurposeSection key="Purpose" />, testIds.purposeSection],
    ['Team', <TeamSection key="Team" />, testIds.teamSection],
  ])('Rendering "%s" section', async (_, ui: ReactElement, testId: string) => {
    wrappedRender(ui);

    const element = await screen.findByTestId(testId);
    expect(element).toBeInTheDocument();
  });

  it('Render the page', () => {
    wrappedRender(<WelcomePage />);

    const schoolSection = screen.queryByTestId(testIds.schoolSection);
    const purposeSection = screen.queryByTestId(testIds.purposeSection);
    const teamSection = screen.queryByTestId(testIds.teamSection);

    expect(schoolSection).toBeInTheDocument();
    expect(purposeSection).toBeInTheDocument();
    expect(teamSection).toBeInTheDocument();
  });
});
