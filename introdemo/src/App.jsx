const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part1 part={props.part1} exercises={props.exercises1} />
      <Part2 part={props.part2} exercises={props.exercises2} />
      <Part3 part={props.part3} exercises={props.exercises3} />
    </div>
  );
};

const Part1 = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Part2 = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Part3 = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using  to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} />
      <Content part2={part2} exercises2={exercises2} />
      <Content part3={part3} exercises3={exercises3} />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
