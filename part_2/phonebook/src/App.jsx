import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect } from "react";
import numService from "./services/num";
import Noti from "./components/Noti";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [search, setSearch] = useState("");
  const [noti, setNoti] = useState(null);
  useEffect(() => {
    numService
      .getAll()
      .then((persons) => {
        setPersons(persons);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const sameName = persons.find((person) => person.name === newName);
    if (
      sameName &&
      window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      )
    ) {
      setPersons(
        persons.map((person) =>
          person.name === newName ? { ...person, number: newNum } : person
        )
      );
      numService
        .update(persons.find((person) => person.name === newName).id, {
          name: newName,
          number: newNum,
        })
        .then((person) => {
          setPersons(persons.map((p) => (p.id !== person.id ? p : person)));
          setNoti({ type: "success", message: `Updated ${newName}` });
          setTimeout(() => {
            setNoti(null);
          }, 5000);
        })
        .catch((error) => {
          setNoti({ type: "error", message: `Cannot update ${newName}` });
          setTimeout(() => {
            setNoti(null);
          }, 5000);
        });
      return;
    }
    const personObject = {
      name: newName,
      number: newNum,
    };

    numService
      .create(personObject)
      .then((person) => {
        setPersons(persons.concat(person));
        setNoti({ type: "success", message: `Added ${newName}` });
        setTimeout(() => {
          setNoti(null);
        }, 5000);
      })
      .catch((error) => {
        setNoti({ type: "error", message: error.response.data.error });
        setTimeout(() => {
          setNoti(null);
        }, 50000);
      });

    setNewName("");
    setNewNum("");
  };

  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);
    if (person && window.confirm(`Delete ${person.name}?`)) {
      numService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== id));
          setNoti({ type: "success", message: `Deleted ${person.name}` });
          setTimeout(() => {
            setNoti(null);
          }, 5000);
        })
        .catch((error) => {
          setNoti({ type: "error", message: `Cannot delete ${person.name}` });
          setTimeout(() => {
            setNoti(null);
          }, 5000);
        });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumChange = (event) => {
    setNewNum(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Noti message={noti} />
      <Filter search={search} setSearch={setSearch} persons={persons} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNum={newNum}
        handleNumChange={handleNumChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
