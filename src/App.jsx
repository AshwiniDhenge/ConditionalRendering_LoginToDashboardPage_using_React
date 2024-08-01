import { useState } from 'react'
import ConditionalRendering from './assets/Component/ConditionalRendering'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ConditionalRendering/>
    </>
  )
}

export default App
