function prettifyCode(input: string): string {
  const lines = input
    .replace(/\r\n/g, '\n')
    .replace(/^\s+/gm, '')
    .replace(/{/g, ' {\n')
    .replace(/}/g, '\n}\n')
    .replace(/\n\s*\n/g, '\n')
    .replace(/:\s*/g, ': ')
    .split('\n')
    .map((line) => {
      return line.replace(/\s+/g, ' ');
    });
  let indentLevel = 0;

  const result = lines.reduce((acc, line) => {
    if (line.includes('}')) {
      indentLevel -= 1;
    }

    const indent = '  '.repeat(indentLevel);
    const newLine = `${indent}${line}\n`;

    if (line.includes('{')) {
      indentLevel += 1;
    }

    return acc + newLine;
  }, '');
  return result.trim();
}

export default prettifyCode;
