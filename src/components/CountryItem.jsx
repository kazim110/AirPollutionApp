import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const CountryItem = ({ country }) => (
  <div className="col-6 country-item">
    <div className="d-flex justify-content-around">
      <span className="">{`Lat: ${country.latitude}`}</span>
      <span className="">{`Lon: ${country.longitude}`}</span>
      <NavLink className="country-data" to={`/stats?lat=${country.latitude}&lon=${country.longitude}`}>
        <BsArrowRightCircle className=" text-2xl" />
      </NavLink>
    </div>
    <div>
      <img src={`${country.image}`} alt={`${country.country}`} className="img-fluid" />
    </div>
    <div>
      <h3 className="">{country.country}</h3>
      <p className="">{country.capital}</p>
    </div>
  </div>
);

CountryItem.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryItem;
