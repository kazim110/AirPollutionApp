import React from 'react';
import image from '../europe-map.png';
import CountriesList from './CountriesList';
import '../index.css';

const MainPage = () => (
  <div>
    <img src={image} alt="Europe Map" className="w-100" />
    <div className="d-flex p-2 main-list-title"><span className="bg-transparent">Europe Countreis With Its Location</span></div>
    <CountriesList />
  </div>
);

export default MainPage;
