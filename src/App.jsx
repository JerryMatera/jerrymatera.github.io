import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <p>
          Hi, I'm Jerry Matera
        </p>
      </div>
    </>
  )
}

export default App
