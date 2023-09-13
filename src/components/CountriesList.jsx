import React from 'react';
import EuropeCountries from './EuropeCountries';
import CountryItem from './CountryItem';

const CountriesList = () => (
  <div className="container">
    <h1>Europe Countries</h1>
    <div className="row">
      {EuropeCountries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </div>
  </div>

);

export default CountriesList;
