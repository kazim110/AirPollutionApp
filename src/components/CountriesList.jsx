import React, { useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import CountryItem from './CountryItem';
import EuropeCountries from './EuropeCountries';

const CountriesList = () => {
  const [search, setSearch] = useState('');
  const { searchFilter } = useSelector((state) => state.pollutions);

  return (
    <div className="container mw-100 p-0">
      <div className="d-flex p-2 main-list-title justify-content-between">
        <h4 className="bg-transparent">Details by Countries</h4>
        <form className="d-flex align-items-center bg-transparent">
          <input
            className="fw-bold border border-secondary p-1"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${searchFilter ? 'capitals' : 'countries'}`}
          />
          <CgSearch className="mx-3 bg-transparent mw-50" />
        </form>
      </div>
      <div className="row">
        {
          !searchFilter && EuropeCountries
            .filter((item) => (search.toLocaleLowerCase() === ''
              ? item
              : item.country.toLocaleLowerCase().includes(search)))
            .map((country) => (
              <CountryItem key={country.id} country={country} />
            ))
        }
      </div>
    </div>

  );
};
export default CountriesList;
