import React from "react";

const Persons = ({ persons, handleDelete }) => {
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
