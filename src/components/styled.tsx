import styled from '@emotion/styled';

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
