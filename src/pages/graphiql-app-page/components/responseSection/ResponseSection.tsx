import Editor from '@monaco-editor/react';

function ResponseSection() {
  return (
    <Editor
      height="100%"
      language="json"
      value="//Response section"
      options={{
        minimap: { enabled: false },
        contextmenu: false,
        readOnly: true,
        overviewRulerBorder: false,
        renderLineHighlight: 'none',
      }}
    />
  );
}

export default ResponseSection;
