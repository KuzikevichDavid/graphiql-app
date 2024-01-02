import { useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { Paper } from '@mui/material';

function RequestSection() {
  const onChange = useCallback((value?: string) => {
    console.log('value:', value);
  }, []);

  return (
    <Paper elevation={3}>
      <Editor
        height="600px"
        defaultLanguage="graphql"
        defaultValue="// some comment"
        onChange={onChange}
        options={{ minimap: { enabled: false }, contextmenu: false }}
      />
    </Paper>
  );
}

export default RequestSection;
