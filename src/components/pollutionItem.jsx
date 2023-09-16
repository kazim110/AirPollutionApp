import React from 'react';
import PropTypes from 'prop-types';

const PollutionItem = ({ item }) => (
  <li className="pollution-data flex justify-between px-4 shadow-md shadow-gray-800">
    <p className="text-base font-normal">{item.name}</p>
    <div className="pollution-value">
      <p className="text-base font-normal">
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
