import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // Isame count->state hai , setCount->function ahi , useState->React Hooks
  const [count, setCount] = useState(0)

  return (
    <>
      <div>The count is{count}</div>
      <button onClick={() => { setCount(count + 1) }}>Update count</button>

    </>
  )
}

export default App
