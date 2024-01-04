import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useGetGraphQLQuery } from '@/store/gql/gqlapi';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect, useState } from 'react';
import getCircularProgressBtnStyle from '@/components/buttonActions/progress/getCircularProgressBtnStyle';
import CircularProgressBtn from '@/components/buttonActions/progress/CircularProgressBtn';
import { QueryArgs } from '@/store/gql/types';
import { setData } from '@/store/responseData/responseDataSlice';

function RequestButton() {
  const [args, setArgs] = useState<QueryArgs>();
  const dispatch = useAppDispatch();

  const gqlBody = useAppSelector((state) => state.gql.body);
  const gqlEndpoint = useAppSelector((state) => state.gql.endpoint);
  const { data, error, isError, isLoading, isSuccess } = useGetGraphQLQuery(
    args ?? skipToken
  );

  const handleQuery = () => {
    setArgs({ body: gqlBody, endpoint: gqlEndpoint });
  };

  const buttonSx = Object.assign(
    getCircularProgressBtnStyle(isError, !isError && isSuccess),
    {
      zIndex: '100',
      minWidth: '30px',
      width: '50px',
      height: '40px',
      '&:hover': { color: 'secondary.main' },
    }
  );

  useEffect(() => {
    if (data) {
      dispatch(setData(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (isError) {
      // TODO error msg
    }
  }, [error, isError]);

  return (
    <CircularProgressBtn
      buttonSx={buttonSx}
      onClick={handleQuery}
      isLoading={isLoading}
    >
      <PlayArrowIcon />
    </CircularProgressBtn>
  );
}

export default RequestButton;
