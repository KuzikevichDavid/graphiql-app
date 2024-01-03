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
  let result = '';

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (trimmedLine.includes('}')) {
      indentLevel -= 1;
    }

    const indent = '  '.repeat(indentLevel);
    result += `${indent + trimmedLine}\n`;

    if (trimmedLine.includes('{')) {
      indentLevel += 1;
    }
  });
  return result.trim();
}

export default prettifyCode;
