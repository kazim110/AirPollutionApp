import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getPollutions } from '../features/pollutions/pollutionsSlice';
import PollutionItem from './pollutionItem';

const PollutionsDetails = () => {
  const {
    pollutions, country, capital, isLoading,
  } = useSelector((state) => state.pollutions);

  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!lat && !lon) {
      return;
    }

    dispatch(getPollutions({ lat, lon }));
  }, [dispatch, lat, lon]);

  if (!lat || !lon) {
    return <div>Latitude and longitude unavilable.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-dark">
      <header>
        <div className="bg-blue font-bold">
          <h2>
            {`${country}/ `}
            <span className="text-sm font-bold">{`${capital} air pollution statistics`}</span>
          </h2>
        </div>
      </header>
      <ul className="text-lg">
        {pollutions && pollutions.length > 0 ? (
          pollutions.map((item) => (
            <PollutionItem key={item.name} item={item} />
          ))
        ) : (
          <li>No details available.</li>
        )}
      </ul>
    </div>
  );
};

export default PollutionsDetails;
