import { useAppSelector } from '@/store/store';
import { Editor } from '@monaco-editor/react';

function VariablesTab() {
  const variables = useAppSelector((state) => state.gql.body.variables);
  return (
    <Editor
      height="300px"
      defaultLanguage="javascript"
      value={variables}
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
