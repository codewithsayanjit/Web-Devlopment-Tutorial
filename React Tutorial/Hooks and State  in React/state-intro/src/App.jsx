// Import useState hook from React
import { useState } from 'react'

// Import CSS file for styling
import './App.css'

function App() {

  // useState creates a state variable named 'count'. Initial value is 0
  // setCount is used to update the count value
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Display the current value of count */}
      <div>The count is {count}</div>

      {/* 
        When the button is clicked:
        1. Current count value is taken
        2. 1 is added to it
        3. setCount updates the state
        4. Component re-renders with the new value
      */}
      <button onClick={()=>{setCount(count + 1)}}>
        Update count
      </button>
    </>
  )
}

export default App