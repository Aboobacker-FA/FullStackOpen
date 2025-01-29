import { useState } from "react";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [array, setArray] = useState(Array(8).fill(0));

  const handleVote = () => {
    const copy = [...array];
    copy[selected] += 1;
    setArray(copy);
  };

  const handleRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * 8);
    setSelected(randomIndex);
  };

  return (
    <>
      <h1 className="title">Anecdote of the Day</h1>
      <h2 className="anecdote">{anecdotes[selected]}</h2>
      <p className="votes">Has {array[selected]} votes</p>
      <Button onClick={handleVote}>Vote</Button>
      <Button onClick={handleRandomAnecdote}>Next Anecdote</Button>

      <h1 className="title">Anecdote with most votes</h1>
      <h2 className="anecdote">
        {anecdotes[array.indexOf(Math.max(...array))]}
      </h2>
    </>
  );
};

export default App;
