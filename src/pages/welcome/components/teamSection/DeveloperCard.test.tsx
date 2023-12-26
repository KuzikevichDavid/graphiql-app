import dataTestId from '@/tests/data-test';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { DeveloperData } from '../../data/types';
import DeveloperCard from './DeveloperCard';

const fakeDeveloperData: DeveloperData = {
  image: { altLocaleIndex: 'fake', src: 'fake' },
  contacts: { email: 'fake', gitHub: 'fake' },
  nameLocaleIndex: 'fake',
  positionLocaleIndex: 'fake',
  quickBioLocaleIndex: 'fake',
};

describe('Developer card with fake data', () => {
  it('Click on expand icon', async () => {
    const user = userEvent.setup();
    wrappedRender(<DeveloperCard data={fakeDeveloperData} />);

    const expand = screen.getByTestId(dataTestId.expandMore);
    await user.click(expand);
    const expandData = screen.getByTestId(dataTestId.expandMoreData);

    expect(expandData, 'Expand does not open').toBeInTheDocument();

    await user.click(expand);

    expect(expandData, 'Expand does not close').not.toBeInTheDocument();
  });
});
