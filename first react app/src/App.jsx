import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h2>COUNTER APP</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1></h1>
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <p></p>
        <button  onClick={() => setCount((count) => count * 0)}>Reset</button>
       
      </div>
      
      
    </>
  )
}

export default App