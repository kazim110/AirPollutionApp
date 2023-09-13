import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPollutions } from '../features/pollutions/pollutionsSlice';
import MainPage from './MainPage';

const Pollutions = () => {
//   const pollutions = useSelector((state) => state.pollutions.pollutions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPollutions());
  }, [dispatch]);

  return (
    <>
      <MainPage />
    </>

  );
};

export default Pollutions;
