import { describe, it, expect } from 'vitest';
import important from './important';

describe('String with some value', () => {
  it('Add "!important" to end', () => {
    const propertyValue = 'red';

    const newColor = important(propertyValue);

    expect(newColor).toBe(`${propertyValue} !important`);
  });
});
