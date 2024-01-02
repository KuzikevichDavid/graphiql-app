import { useCallback } from 'react';
import Editor from '@monaco-editor/react';

function RequestSection() {
  const onChange = useCallback((value?: string) => {
    console.log('value:', value);
  }, []);

  return (
    <Editor
      height="600px"
      defaultLanguage="graphql"
      defaultValue="// some comment"
      onChange={onChange}
      options={{
        minimap: { enabled: false },
        contextmenu: false,
        overviewRulerBorder: false,
        renderLineHighlight: 'none',
      }}
    />
  );
}

export default RequestSection;
