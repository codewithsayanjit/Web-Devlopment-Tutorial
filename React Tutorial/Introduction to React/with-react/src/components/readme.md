# ES7 React Snippets Shortcuts

## Install Extension

1. Open VS Code
2. Go to Extensions (`Ctrl + Shift + X`)
3. Search for:
   "ES7+ React/Redux/React-Native snippets"
4. Install the extension by dsznajder

---

## Most Used Shortcuts

| Shortcut | Description |
|-----------|-------------|
| rafce | React Arrow Function Component Export |
| rafc | React Arrow Function Component |
| rfce | React Function Component Export |
| rfc | React Function Component |
| rconst | React Constructor |
| useState | React useState Hook |
| useEffect | React useEffect Hook |
| useContext | React useContext Hook |
| useRef | React useRef Hook |
| useReducer | React useReducer Hook |
| useMemo | React useMemo Hook |
| useCallback | React useCallback Hook |
| imr | Import React |
| imp | Import Module |
| ime | Import Everything |
| clg | console.log() |
| clo | console.log(object) |
| setState | React setState Function |
| prom | Promise |
| desc | Describe Block (Testing) |

---

## Examples

### rafce

Type:

```jsx
rafce
```

Press `Tab`

Generated Code:

```jsx
import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
```

---

### useState

Type:

```jsx
useState
```

Press `Tab`

Generated Code:

```jsx
const [state, setState] = useState(initialState)
```

---

### useEffect

Type:

```jsx
useEffect
```

Press `Tab`

Generated Code:

```jsx
useEffect(() => {
  
}, [])
```

---

## Useful VS Code Shortcuts

| Shortcut | Action |
|-----------|---------|
| Ctrl + Space | Trigger Suggestions |
| Tab | Accept Snippet |
| Ctrl + Shift + P | Command Palette |
| Ctrl + P | Quick Open File |
| Ctrl + / | Toggle Comment |

---

## Official Extension

https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets