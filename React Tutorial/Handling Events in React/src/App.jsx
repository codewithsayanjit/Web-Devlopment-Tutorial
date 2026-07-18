import { useState } from 'react'
import './App.css'

function App() {

  // Example of storing a single string in state (currently not used)
  // const [name, setName] = useState("Sayanjit")

  // State object to store multiple form fields like email and phone
  const [form, setForm] = useState({})

  // Runs when the button is clicked
  const handleClick = () => {
    alert("Hey I am clicked")
  }

  // Runs when the mouse pointer moves over the red div
  const handleMouseOver = () => {
    alert("Hey I am a mouse over")
  }

  // Runs whenever the user types in any input field
  const handleChange = (e) => {

    // Example for updating a single state value (currently not used)
    // setName(e.target.value)

    // Update only the changed field while keeping the previous values
    // ...form copies the existing object
    // [e.target.name] creates a dynamic key (email or phone)
    // e.target.value stores the current input value
    setForm({ ...form, [e.target.name]: e.target.value }) // ...form    This is the spread operator.

    // Print the current form object in the console
    // Note: Because state updates are asynchronous, this may show the previous state immediately after setForm().
    console.log(form)
  }

  return (
    <>
      <div className="button">
        {/* Call handleClick when the button is clicked */}
        <button onClick={handleClick}>Click me</button>
      </div>

      <div className="red" onMouseOver={handleMouseOver}>
        I am a red div
      </div>

      {/* Email Input */}
      <input
        type="text"
        name="email"                           // Key used inside the form object
        value={form.email ? form.email : ""}   // Controlled input (prevents undefined)
        onChange={handleChange}                // Update state while typing
      />

      {/* Phone Input */}
      <input
        type="text"
        name="phone"                           // Key used inside the form object
        value={form.phone ? form.phone : ""}   // Controlled input (prevents undefined)
        onChange={handleChange}                // Update state while typing
      />
    </>
  )
}

export default App