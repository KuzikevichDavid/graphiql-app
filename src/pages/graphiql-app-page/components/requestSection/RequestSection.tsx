import { selectQuery } from '@/store/gql/slice/gqlSelectors';
import { setQuery } from '@/store/gql/slice/gqlSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import Editor from '@monaco-editor/react';
import { debounce } from '@mui/material';

function RequestSection() {
  const dispatch = useAppDispatch();
  const selectedQuery = useAppSelector(selectQuery);

  const onChange = (value?: string) => {
    dispatch(setQuery(value ?? ''));
  };

  const debouncedOnChange = debounce(onChange, 300);

  return (
    <Editor
      height="600px"
      defaultLanguage="graphql"
      defaultValue="// some comment"
      onChange={debouncedOnChange}
      value={selectedQuery}
      options={{
        minimap: { enabled: false },
        contextmenu: false,
        overviewRulerBorder: false,
        renderLineHighlight: 'none',
        formatOnPaste: false,
        formatOnType: false,
      }}
    />
  );
}

export default RequestSection;
