import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper/Paper';
import theme from '@/styles/theme';

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '420px',
  width: '100%',
  gap: '20px',
});

export const StyledMain = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const StyledErrorMessage = styled('p')({
  color: 'red',
  border: '1px solid red',
  padding: '5px',
});

export const StyledSuccessfullMessage = styled('p')({
  color: 'green',
  backgroundColor: 'lightgreen',
  border: '1px solid green',
  padding: '5px',
});

export const StyledControlPanel = styled(Paper)`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  background-color: ${theme.palette.action.disabledBackground};
`;

export const StyledControlPanelButton = styled(Button)`
  && {
    z-index: 100;
    min-width: 30px;
    width: 50px;
    height: 40px;

    &:hover {
      color: ${theme.palette.secondary.main};
    }
  }
`;
