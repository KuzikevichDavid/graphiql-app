import dataTestId from '@/tests/data-test';
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
    ['School', <SchoolSection key="School" />, dataTestId.schoolSection],
    ['Purpose', <PurposeSection key="Purpose" />, dataTestId.purposeSection],
    ['Team', <TeamSection key="Team" />, dataTestId.teamSection],
  ])('Rendering "%s" section', async (_, ui: ReactElement, testId: string) => {
    wrappedRender(ui);

    const element = await screen.findByTestId(testId);
    expect(element).toBeInTheDocument();
  });

  it('Render the page', () => {
    wrappedRender(<WelcomePage />);

    const schoolSection = screen.queryByTestId(dataTestId.schoolSection);
    const purposeSection = screen.queryByTestId(dataTestId.purposeSection);
    const teamSection = screen.queryByTestId(dataTestId.teamSection);

    expect(schoolSection).toBeInTheDocument();
    expect(purposeSection).toBeInTheDocument();
    expect(teamSection).toBeInTheDocument();
  });
});
