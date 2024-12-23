import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [location, setLocation] = useState("");

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    alert(`Searching for: ${location}`);
};

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Enter location"
        value={location}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;