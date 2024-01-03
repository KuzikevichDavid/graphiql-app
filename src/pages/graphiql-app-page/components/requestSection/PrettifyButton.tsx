import { Button } from '@mui/material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { selectQuery } from '@/store/gql/slice/gqlSelectors';
import { setQuery } from '@/store/gql/slice/gqlSlice';
import prettifyCode from '@/utils/graphQL-edit/prettifyCode';

function PrettifyButton() {
  const dispatch = useAppDispatch();
  const selectedQuery = useAppSelector(selectQuery);

  const prttifyQuery = () => {
    const formattedQuery = prettifyCode(selectedQuery);
    dispatch(setQuery(formattedQuery));
  };

  return (
    <Button
      onClick={prttifyQuery}
      variant="contained"
      sx={{
        zIndex: '100',
        minWidth: '30px',
        width: '50px',
        height: '40px',
        '&:hover': { color: 'secondary.main' },
      }}
    >
      <CleaningServicesIcon />
    </Button>
  );
}

export default PrettifyButton;
