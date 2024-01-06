import dataTestId from '@/tests/data-test';
import wrappedRender from '@/utils/testUtils/wrappedRender';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CircularProgressBtn from './CircularProgressBtn';

describe('Render "CircularProgressBtn" ', () => {
  it('Property "isLoading" is set to "true"', () => {
    wrappedRender(
      <CircularProgressBtn buttonSx={{}} isLoading>
        child
      </CircularProgressBtn>
    );

    const progressIndicator = screen.getByTestId(dataTestId.circularProgress);
    expect(progressIndicator).toBeInTheDocument();
  });

  it('Property "isLoading" is set to "false"', () => {
    wrappedRender(
      <CircularProgressBtn buttonSx={{}} isLoading={false}>
        child
      </CircularProgressBtn>
    );

    const progressIndicator = screen.queryByTestId(dataTestId.circularProgress);
    expect(progressIndicator).not.toBeInTheDocument();
  });
});
