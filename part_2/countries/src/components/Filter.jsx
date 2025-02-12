import React, { useEffect } from "react";

const Filter = ({
  search,
  setSearch,
  countries,
  filteredCountries,
  setFilteredCountries,
}) => {
  useEffect(() => {
    if (search === "") {
      setFilteredCountries([]); // Reset when search is empty
    } else {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, countries, setFilteredCountries]); // Runs only when search/countries change

  return (
    <div>
      Find Countries:{" "}
      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search === "" ? null : filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length === 1 ? (
        <div>
          <h1>{filteredCountries[0].name.common}</h1>
          <p>Capital: {filteredCountries[0].capital}</p>
          <p>Population: {filteredCountries[0].population}</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(filteredCountries[0].languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img
            src={filteredCountries[0].flags.png}
            alt={filteredCountries[0].name.common}
            width="100"
          />
        </div>
      ) : (
        filteredCountries.map((country) => (
          <div key={country.name.common}>
            <h3>{country.name.common}</h3>
            <button onClick={() => setSearch(country.name.common)}>Show</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Filter;
