import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';


const Boton = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Display = ({left, right}) => <span>Left: {left} & Right: {right}</span>

const App = () => {
  const [clicks, setClicks] = useState({
    left : 0, right: 0
  });
  const [registroClicks, setRegistroClicks] = useState([]);

  const increasedLeft = () => setClicks({...clicks, left : clicks.left+1});

  const increasedRight = () => setClicks({...clicks, right : clicks.right+1});

  const updateReport = report => setRegistroClicks(registroClicks.concat(report));

  const clickLeft = () => {
    increasedLeft();
    updateReport("L");
  }

  const clickRight = () => {
    increasedRight();
    updateReport("R");
  }
  
  return (
    <div align="center">
      <Display left={clicks.left} right={clicks.right}/><br/>
      <span>Registro: {registroClicks.join(", ")}</span><br/>
      <Boton handleClick={clickLeft} text="<-"/><br/>
      <Boton handleClick={clickRight} text="->"/>
    </div>
  )
}


export default App;
