// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'
import Posts from './Post'



function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2=()=>{
    alert('button 2 clicked')
  }


  const addToFive=(num)=>{
    alert(num+5)
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>event handler</li>
        <li>State</li>
        <li>Use effect</li>
      </ol>
      <hr/>
      <Posts></Posts>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Clicked 2</button>
      <button onClick={()=>{alert('third clicked')}}>third</button>
      <button onClick={()=>{addToFive(3)}}>four</button>
      
    </>
  )
}

export default App
