import prettifyCode from './prettifyCode';

describe('prettifyCode', () => {
  it('should prettify the code correctly', () => {
    const input = '{asd}{}{}';

    const expectedOutput = `
{
  asd
}
{
}
{
}
`.trim();

    const result = prettifyCode(input);
    expect(result).toBe(expectedOutput);
  });
});
