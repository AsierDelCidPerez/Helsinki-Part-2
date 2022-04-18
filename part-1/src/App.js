import logo from './logo.svg';
import './App.css';

const Header = props => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = props => {
  return (
    <>
      <p>
        {props.part} {props.numEx}
      </p>
    </>
  )
}

const Content = props => {
  return (
    <>
    <div>
      <Part part={props.parts[0]} numEx={props.numExercises[0]}/>
      <Part part={props.parts[1]} numEx={props.numExercises[1]}/>
      <Part part={props.parts[2]} numEx={props.numExercises[2]}/>
      <Total exs1={props.numExercises[0]} exs2={props.numExercises[1]} exs3={props.numExercises[2]}></Total>
    </div>
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
      <Content parts={[part1, part2, part3]} numExercises={[exercises1, exercises2, exercises3]}></Content>
    </div>
  )
}


export default App;
