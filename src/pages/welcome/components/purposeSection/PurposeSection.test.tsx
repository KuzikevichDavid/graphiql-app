import testIds from '@/utils/testUtils/constants/testIds';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PurposeSection from './PurposeSection';

describe('', () => {
  it('', async () => {
    wrappedRender(<PurposeSection />);

    const element = await screen.findByTestId(testIds.purposeSection);
    expect(element).toBeInTheDocument();
  });
});
