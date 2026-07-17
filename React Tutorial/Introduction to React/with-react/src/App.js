import { useState } from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  // State variable for counter value
  const [value, setValue] = useState(0)

  return (
    <div className="App">   {/*We don't use class because class is reserved keyword in JS*/}

      {/* Navbar component */}
      <Navbar logoText="Code With Sayanjit" />

      {/* Display counter value */}
      <div className='value'> {value}</div>

      {/* Increment value on button click */}
      <button onClick={() => { setValue(value + 1) }}>Click me</button>

      {/* Footer component */}
      <Footer />

    </div>
  );
}

export default App;