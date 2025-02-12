import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
        // response.data.forEach((country) => {
        //   console.log(country.name.common); // Logs each country's common name
        // });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  return (
    <>
      <Filter
        search={search}
        setSearch={setSearch}
        countries={countries}
        filteredCountries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
      />
    </>
  );
};

export default App;
