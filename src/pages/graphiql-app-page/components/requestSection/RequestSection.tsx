import { useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setQuery } from '@/store/gql/slice/gqlSlice';

function RequestSection() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.gql.body.query);
  const onChange = useCallback(
    (value?: string) => {
      if (value) dispatch(setQuery(value));
    },
    [dispatch]
  );

  return (
    <Editor
      height="600px"
      value={query}
      defaultLanguage="graphql"
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
