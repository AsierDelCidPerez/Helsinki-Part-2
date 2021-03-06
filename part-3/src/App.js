import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

const Hello = props => {

  const {name: myName, age: myAge} = props;

  const bornYear = () => {
    return new Date().getFullYear() - myAge;
  }

  return (
    <div>
      <p>
        Hello {myName}, you are {myAge} years old
      </p>
      <p>
        So, you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const Boton = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Display = ({left, right}) => {
  return (
    <span>Left: {left} & Right: {right}</span>
  )
}


const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const increasedLeft = () => setLeft(left+1);
  const increasedRight = () => setRight(right+1);
  return (
    <div align="center">
      <Display left={left} right={right}/><br/>
      <Boton handleClick={increasedLeft} text="<-"/><br/>
      <Boton handleClick={increasedRight} text="->"/>
    </div>
  )
}


export default App;
