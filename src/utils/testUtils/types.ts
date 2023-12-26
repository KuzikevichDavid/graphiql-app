import { RenderOptions } from '@testing-library/react';

export interface IExtendedRenderOptions extends RenderOptions {
  initialEntries?: string[];
}
