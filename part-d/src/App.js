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

const Display = ({left, right}) => <span>Left: {left} & Right: {right}</span>


const App = () => {
  const [clicks, setClicks] = useState({
    left : 0, right: 0
  });

  const increasedLeft = () => setClicks({...clicks, left : clicks.left+1});

  const increasedRight = () => setClicks({...clicks, right : clicks.right+1});
  
  return (
    <div align="center">
      <Display left={clicks.left} right={clicks.right}/><br/>
      <Boton handleClick={increasedLeft} text="<-"/><br/>
      <Boton handleClick={increasedRight} text="->"/>
    </div>
  )
}


export default App;
