import Editor from '@monaco-editor/react';
import { Paper } from '@mui/material';

function ResponseSection() {
  return (
    <Paper elevation={3} sx={{ height: '100%', borderRadius: '4px' }}>
      <Editor
        height="100%"
        language="json"
        value="Response"
        options={{ minimap: { enabled: false }, contextmenu: false }}
      />
    </Paper>
  );
}

export default ResponseSection;
