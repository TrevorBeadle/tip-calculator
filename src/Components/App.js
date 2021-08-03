import { useState } from 'react'
import './App.css'

const percentages = ['5%', '10%', '15%', '25%', '50%']

function App() {
  const [bill, setBill] = useState(0)

  const onChange = e => {
    const re = /^[0-9\b]+$/

    if (e.target.value === '' || re.test(e.target.value)) {
      setBill(e.target.value)
    }
  }

  return (
    <div className="App">
      <h1>
        Spli
        <br />
        tter
      </h1>
      <div className="container">
        <label htmlFor="bill">
          Bill
          <input
            id="bill"
            value={bill}
            name="bill"
            type="text"
            onChange={onChange}
          />
        </label>
        {percentages.map(i => (
          <button>{i}</button>
        ))}
      </div>
    </div>
  )
}

export default App
