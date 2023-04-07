import { useState } from 'react'
import './App.css'
import { Test } from './Components/Test'

function App() {
  const [changeInput, setChangeInput] = useState("")
  const helloMsg= 'Hello';

  return (
      <Test helloMsg={helloMsg} changeInput={changeInput} setChangeInput={setChangeInput}/>
  )
}

export default App
