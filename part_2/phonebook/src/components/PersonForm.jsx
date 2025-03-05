import React from "react";

const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNum,
  handleNumChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        Name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        Number:{" "}
        <input
          value={newNum}
          onChange={handleNumChange}
          placeholder="Format: XX-XXXXXX or XXX-XXXXX"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
