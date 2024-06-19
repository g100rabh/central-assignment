import React, { useState } from "react";
import styles from "./SearchApp.module.css";

function SearchApp() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
      .then((response) => {
        console.log(response, "response");
        if (!response.ok) {
          throw new Error("Unable to serach");
        }
        return response.json();
      })
      .then((data) => {
        setResults(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleItemClick = (result) => {
    console.log(result, "result");
    alert(result.title);
  };

  return (
    <div className={styles.SearchApp}>
      <h1>Search</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h2>Results</h2>
        <ul className={styles.results}>
          {results.map((result) => (
            <li
              key={result.id}
              onClick={() => handleItemClick(result)}
              className={styles.resultItem}
            >
              <strong>{result.title}</strong> - {result.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchApp;
