import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
     <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
     <Card username="hitesh" btntext="click me"/>
     <Card username="chai" btntext="visit me"/>
    </>
  )
}

export default App