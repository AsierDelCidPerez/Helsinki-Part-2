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

const App = () => {

  const [counter, setCounter] = useState(0);

  const increasedByOne = () => setCounter(counter+1);
  const setToZero = () => setCounter(0);

  return (
    <div align="center">
      <h1>Contador de clicks en React</h1>
      <span>{counter} clicks</span><br/>
      <button onClick={increasedByOne}>Plus</button>&nbsp;
      <button onClick={setToZero}>Zero</button>
    </div>
  )
}


export default App;
