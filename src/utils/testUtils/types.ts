import { RenderOptions } from '@testing-library/react';
import { TestRootState } from './provider';

export interface IExtendedRenderOptions extends RenderOptions {
  initialEntries?: string[];
  initialState?: TestRootState;
}
