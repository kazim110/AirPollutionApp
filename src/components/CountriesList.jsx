import React from 'react';
import EuropeCountries from './EuropeCountries';

const CountriesList = () => (
  <div>
    <h1>Europe Countries</h1>
    <div>
      {EuropeCountries.map((state) => (
        <h4 key={state.id}>{state.country}</h4>
      ))}
    </div>
  </div>

);

export default CountriesList;
