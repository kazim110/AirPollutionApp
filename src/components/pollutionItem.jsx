import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const PollutionItem = ({ item }) => (
  <li className="pollution-data d-flex justify-content-between px-5">
    <p className="mb-0 fs-6">{item.name}</p>
    <div className="pollution-value">
      <p className="mb-0 fs-6">
        {item.value}
        μg/m3
      </p>
    </div>
  </li>
);

PollutionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default PollutionItem;
