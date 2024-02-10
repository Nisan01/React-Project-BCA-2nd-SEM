import React from 'react';
// import "../Body/SearchBar.css";
import { SearchResult } from './SearchResult';
import './SearchResultsList.css';

export const SearchResultsList = ({ results }) => {
  return (
    <div className="result-list-wrapper">
      <div className="results-list">
        {results.map((result, id) => (
          <SearchResult result={result.name} key={id} />
        ))}
      </div>
    </div>
  );
};
