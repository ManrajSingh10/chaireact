import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  function addValue() {
    setCounter(counter + 1);
    if(counter == 20) setCounter(counter = 20);
  }

  function removeValue() {
    setCounter(counter - 1);
    if(counter == 0) setCounter(counter = 0);
  }
  
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}> Increase value </button>
      <br></br>
      <button onClick={removeValue}> Decrease value </button>
      <p> footer:{counter} </p>
    </>
  )
}

export default App;