import React from "react";

const Filter = ({ search, setSearch, persons }) => {
  return (
    <div>
      Filter shown with:{" "}
      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search === ""
        ? null
        : persons
            .filter((person) =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((person) => {
              return (
                <li key={person.name}>
                  {person.name} : {person.number}
                </li>
              );
            })}
    </div>
  );
};

export default Filter;
