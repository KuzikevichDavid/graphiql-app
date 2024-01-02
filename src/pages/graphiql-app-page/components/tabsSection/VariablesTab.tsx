import { Editor } from '@monaco-editor/react';

function VariablesTab() {
  return (
    <Editor
      height="300px"
      defaultLanguage="javascript"
      defaultValue="//Variables section"
      options={{
        minimap: { enabled: false },
        contextmenu: false,
        overviewRulerBorder: false,
        renderLineHighlight: 'none',
      }}
    />
  );
}

export default VariablesTab;
