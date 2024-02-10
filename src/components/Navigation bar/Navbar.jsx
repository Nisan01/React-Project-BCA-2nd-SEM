import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import MyComponent1 from "../Body/sidemenu";
import "../Body/SearchBar.css";

import { SearchResultsList } from "./Searchbar/SearchResultsList";

export const Navbar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = (value) => {
    console.log("Fetching data...");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log("Data received:", json);

        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });

        console.log("Setting results:", results);
        setSearchResults(results);
        setResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <MyComponent1 />
      <div className="navbar">
        <img src="yt-logo.png" className="logo" alt="" />
        {/* Your existing JSX for the Navbar component */}
        <div className="searchbar-container">
          <div className="input-wrapper">
            <input
              type="textbox"
              placeholder="search                          (Content Creator's Portfolio)"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <a
              href="#"
              // onClick={(e) => {
              //   e.preventDefault();
              //   fetchData(input);
              // }}
            >
              <FaSearch id="search-icon" />
            </a>
          </div>
        </div>

        <div className="logo-icons">
          <a href="">
            <img className="upload" src="./upload png.png" alt="" />
          </a>
          <a href="">
            <img className="bell" src="./bell-icon.png" alt="" />
          </a>
          <a href="">
            {" "}
            <img className="logoo" src="./cha-logo.png" alt="" />
          </a>
        </div>
      </div>
      <SearchResultsList results={searchResults} />

      {/* Include the SearchResultsList component here */}
    </>
  );
};
