import { useAppSelector } from '@/store/store';
import Editor from '@monaco-editor/react';

function ResponseSection() {
  const responseData = useAppSelector((state) => state.response.responseData);
  return (
    <Editor
      height="100%"
      language="json"
      value={responseData}
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
