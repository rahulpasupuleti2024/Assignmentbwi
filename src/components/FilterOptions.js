import React from "react";

const FilterOptions = ({ onFilter }) => {
  const handleFilter = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div>
      <h2>Filter by Price</h2>
      <select onChange={handleFilter}>
        <option value="all">All Prices</option>
        <option value="100">$100 and below</option>
        <option value="500">$500 and below</option>
        <option value="1000">$1000 and below</option>
        <option value="2000">$2000 and below</option>
      </select>
    </div>
  );
};

export default FilterOptions;
