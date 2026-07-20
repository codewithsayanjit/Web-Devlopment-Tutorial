import { memo } from 'react'

// Navbar component receives props
const Navbar = ({ adjective, getAdjective }) => {

  // Runs whenever Navbar re-renders
  console.log("Navbar is rendered")

  return (
    <div>
      {/* Displays the adjective */}
      I am a {adjective} Navbar

      {/* Calls and displays the memoized function result */}
      <button onClick={() => { getAdjective() }}>
        {getAdjective()}
      </button>
    </div>
  )
}

// Prevents unnecessary re-renders if props don't change
export default memo(Navbar)