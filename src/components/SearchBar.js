import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
