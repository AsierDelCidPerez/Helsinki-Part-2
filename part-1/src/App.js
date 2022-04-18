import logo from './logo.svg';
import './App.css';

const Header = props => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = props => {
  return (
    <>
      <p>
        {props.part} {props.numExercises}
      </p>
    </>
  )
}

const Total = props => {
  return (
    <>
      <p>Number of exercises {props.exs1 + props.exs2 + props.exs3}</p>
    </>
  );
}

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course}></Header>
      <Content part={part1} numExercises={exercises1}></Content>
      <Content part={part2} numExercises={exercises2}></Content>
      <Content part={part3} numExercises={exercises3}></Content>
      <Total exs1={exercises1} exs2={exercises2} exs3={exercises3}></Total>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}


export default App;
