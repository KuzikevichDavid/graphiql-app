import { StyledControlPanelButton } from '@/components/styled';
import { selectQuery } from '@/store/gql/slice/gqlSelectors';
import { setQuery } from '@/store/gql/slice/gqlSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import prettifyCode from '@/utils/graphQL-edit/prettifyCode';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

function PrettifyButton() {
  const dispatch = useAppDispatch();
  const selectedQuery = useAppSelector(selectQuery);

  const prettifyQuery = () => {
    const formattedQuery = prettifyCode(selectedQuery);
    dispatch(setQuery(formattedQuery));
  };

  return (
    <StyledControlPanelButton onClick={prettifyQuery} variant="contained">
      <CleaningServicesIcon />
    </StyledControlPanelButton>
  );
}

export default PrettifyButton;
