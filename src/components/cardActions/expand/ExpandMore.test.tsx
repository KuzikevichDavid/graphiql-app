import dataTestId from '@/tests/data-test';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExpandMore from './ExpandMore';

describe('Rendered "ExpandMore" element', () => {
  it('Rendered expanded', () => {
    wrappedRender(<ExpandMore expand />);

    const expand = screen.getByTestId(dataTestId.expandMore);

    const computedStyle = getComputedStyle(expand);
    expect(computedStyle.transform).toBe('rotate(180deg)');
    expect(computedStyle.marginLeft).toBe('auto');
  });
});
