import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    onFilter(parseFloat(minPrice), parseFloat(maxPrice));
  };

  return (
    <div>
      <label>
        Min Price:
        <input
          type="text"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </label>
      <label>
        Max Price:
        <input
          type="text"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;