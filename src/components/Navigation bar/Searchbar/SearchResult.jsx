import React from 'react';
import './SearchResult.css';
// import "../Body/SearchBar.css";

export const SearchResult = ({ result }) => {
  return (
    <div className="search-result" onClick={() => alert(`You selected ${result}!`)}>
      {result}
    </div>
  );
};
