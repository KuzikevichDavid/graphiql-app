import testIds from '@/utils/testUtils/constants/testIds';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExpandMore from './ExpandMore';

describe('Rendered "ExpandMore" element', () => {
  it('Rendered expanded', () => {
    wrappedRender(<ExpandMore expand />);

    const expand = screen.getByTestId(testIds.expandMore);

    const computedStyle = getComputedStyle(expand);
    expect(computedStyle.transform).toBe('rotate(180deg)');
    expect(computedStyle.marginLeft).toBe('auto');
  });
});
