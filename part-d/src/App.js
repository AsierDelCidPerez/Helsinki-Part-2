import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Boton = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Calculated = ({valoraciones, calcularTotal}) => {
  const puntuacion = valoraciones.good - valoraciones.bad;
  const total = calcularTotal(valoraciones);

  return (
    <>
    <tr><td>Average: {puntuacion/total}</td></tr>
    <tr><td>Positive: {valoraciones.good*100/total}%</td></tr>
    </>
  )
}

const Statistics = ({valoraciones}) => {
  const calcularTotal = valores => Object.keys(valores)
                                          .map(elem => valores[elem])
                                          .reduce((prev, curr) => prev+curr);
  if(valoraciones.good+valoraciones.bad+valoraciones.neutral === 0){
    return <p>No feedback given</p>
  }
  return (
    <>
    <table>
      <tbody>
        <tr><td>Good: {valoraciones.good}</td></tr>
        <tr><td>Neutral: {valoraciones.neutral}</td></tr>
        <tr><td>Bad: {valoraciones.bad}</td></tr>
        <tr><td>All: {calcularTotal(valoraciones)}</td></tr>
        <Calculated valoraciones={valoraciones} calcularTotal={calcularTotal}/>
      </tbody>
    </table>
    </>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [valoraciones, setValoraciones] = useState({
    good : 0, neutral: 0, bad: 0
  })

  const getIncrement = value => {
    if(value === 1){
      return () => setValoraciones({...valoraciones, good: valoraciones.good+1});
    }else if(value === 0){
      return () => setValoraciones({...valoraciones, neutral: valoraciones.neutral+1});
    }else{
      return () => setValoraciones({...valoraciones, bad: valoraciones.bad+1});
    }
  }



  return (
    <div align="center">
      <h1>Give feedback</h1>
      <Boton handleClick={getIncrement(1)} text="Good"/>
      <Boton handleClick={getIncrement(0)} text="Neutral"/>
      <Boton handleClick={getIncrement(-1)} text="Bad"/>
      <h3>Statistics</h3>
      <Statistics valoraciones={valoraciones}/>
    </div>
  )
}


export default App;
