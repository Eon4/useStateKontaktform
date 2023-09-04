import { useState } from 'react'
import './App.css'
import { UncontrolledForm } from './components/UncontrolledForm/uncontrolledForm'
import { HookForm } from './components/HookForm/hookForm'


function App() {
  
  return (
    <>
    <h1>Uncontrolled Input</h1>
    <UncontrolledForm/>
    <HookForm/>


    </>
  )
}

export default App
