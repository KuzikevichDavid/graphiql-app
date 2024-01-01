import Editor from '@monaco-editor/react';
import { Paper } from '@mui/material';

function ResponseSection() {
  return (
    <Paper elevation={3} sx={{ height: '100%' }}>
      <Editor
        height="auto"
        defaultLanguage="graphql"
        defaultValue="// some comment"
        options={{ minimap: { enabled: false }, contextmenu: false }}
      />
    </Paper>
  );
}

export default ResponseSection;
