import { useState } from 'react'
import './App.css'
import { Button } from '@material-tailwind/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        <Button>Click</Button>
      </p>
    </>
  )
}

export default App
