import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

{/* data + component #1 */}
const groceryItems = [
  {name: 'Milk', quantity: 2},
  {name: 'Bread', quantity: 1},
  {name: 'Eggs', quantity: 1},
  {name: 'Apples', quantity: 6},
  {name: 'Bananas', quantity: 4}
]

function GroceryList() {
  return (
    <div className="grocery-list">
      <h3>Grocery List</h3>
      <ul>
        {groceryItems.map((item, index) => (
          <li key={index}>
            {item.name} - Qty: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

{/* component #2 w/ conditional statements */}
function OnOffButton() {
const [isOn, setIsOn] = useState(false)
  
  return (
    <div style={{
      backgroundColor: isOn ? '#409746' : '#d77070',
      color: isOn ? '#000000' : '#000000',
      padding: '20px',
      borderRadius: '8px',
      transition: 'all 0.3s'
    }}>
      <h3>On/Off</h3>
      <p>Current state: {isOn ? 'On' : 'Off'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  )
}

{/* component #3 */}
function Counter() {
  const [clicks, setClicks] = useState(0)
  
  return (
    <div>
      <h3>How many times you have clicked the button: {clicks}</h3>
      <button onClick={() => setClicks(clicks + 1)}>Click Me</button>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Anika Balakrishnan</h2>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Unit 6 Components */}
      <GroceryList />
      <OnOffButton />
      <Counter />
    </>
  )
}

export default App
