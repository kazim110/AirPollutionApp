import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPollutions } from '../features/pollutions/pollutionsSlice';

const Pollutions = () => {
//   const pollutions = useSelector((state) => state.pollutions.pollutions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPollutions());
  }, [dispatch]);

  return (
    <>
      <h3>Pollutions page</h3>
    </>

  );
};

export default Pollutions;
