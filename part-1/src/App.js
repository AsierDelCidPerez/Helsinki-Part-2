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
      <Part part={props.parts[0].name} numEx={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} numEx={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} numEx={props.parts[2].exercises}/>
      <Total exs={props.parts}></Total>
    </div>
    </>
  )
}

const Total = props => {
  console.log(props);
  return (
    <>
      <p>Number of exercises {props.exs[0].exercises + props.exs[1].exercises + props.exs[2].exercises}</p>
    </>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
    </div>
  )
}


export default App;
