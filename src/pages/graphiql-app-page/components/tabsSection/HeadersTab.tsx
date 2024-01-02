import { Editor } from '@monaco-editor/react';

function HeadersTab() {
  return (
    <Editor
      height="300px"
      defaultLanguage="javascript"
      defaultValue="//Headers section"
      options={{
        minimap: { enabled: false },
        contextmenu: false,
        overviewRulerBorder: false,
        renderLineHighlight: 'none',
      }}
    />
  );
}

export default HeadersTab;
