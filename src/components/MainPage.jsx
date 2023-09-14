import React from 'react';
import image from '../europe-map.png';
import CountriesList from './CountriesList';

const MainPage = () => (
  <div>
    <img src={image} alt="Europe Map" className="w-100" />
    <CountriesList />
  </div>
);

export default MainPage;
