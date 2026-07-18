import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too"
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but I am grocery todo"
    },

  ])

  // const Todo = ({todo}) => {
  //   return (<>
  //   <div className="m-4 border border-1 border-purple-400">

  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //   </div>
  //     </>)
  // }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* Ternary Operation Rendering. It shows both True or False */}
      {showbtn ? <button>Showbtn is true</button> : <button>Showbtn is false</button>}

      {/* Conditional Rendering .It is only shows showbtn is true  */}
      {/* {showbtn && <button>showbtn is true</button>} */}

      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>
        return <div key={todo.title} className="m-4 bg-amber-300 border-purple-400">

          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle Showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App