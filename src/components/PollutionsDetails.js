import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getPollutions } from '../features/pollutions/pollutionsSlice';
import PollutionItem from './pollutionItem';
import chartData from './Chart';
import '../index.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PollutionsDetails = () => {
  const {
    pollutions, country, capital, isLoading,
  } = useSelector((state) => state.pollutions);

  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const dispatch = useDispatch();
  const infoArr = useSelector((state) => state.pollutions.pollutions);

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
    <div className="">
      <div className="chart">
        <h2 className="display-6 text-start">Doughnut Chart</h2>
        <Doughnut data={chartData(infoArr)} />
      </div>
      <header>
        <div className="text-start">
          <h2 className="fw-bold">
            {`${country}/ `}
            <span className="">{`${capital} air pollution statistics`}</span>
          </h2>
        </div>
      </header>
      <ul className="px-0">
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
