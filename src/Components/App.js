import { useState, useEffect } from 'react'
import './App.css'
import CurrencyInput from 'react-currency-input'

const formatNumber = num =>
  num.toLocaleString('en-us', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

function App() {
  const [state, setState] = useState({
    bill: 0,
    tipAmount: 0,
    percentage: 0,
  })

  useEffect(() => console.log('Current State:', state), [state])

  const updateTip = tip => {
    setState({
      ...state,
      percentage: tip,
      tipAmount: formatNumber(state.bill * tip),
    })
  }

  return (
    <div className="App">
      <h1>
        Spli
        <br />
        tter
      </h1>
      <label htmlFor="bill">
        Bill
        <CurrencyInput
          value={state.bill}
          name="bill"
          id="bill"
          autoFocus="true"
          onChangeEvent={e => setState({ ...state, bill: e.target.value })}
        />
      </label>
      <input
        id="five-percent"
        type="button"
        value="5%"
        onClick={() => updateTip(0.05)}
      />
      <input
        id="ten-percent"
        type="button"
        value="10%"
        onClick={() => updateTip(0.1)}
      />
      <input
        id="fifteen-percent"
        type="button"
        value="15%"
        onClick={() => updateTip(0.15)}
      />
      <input
        id="twenty-five-percent"
        type="button"
        value="25%"
        onClick={() => updateTip(0.25)}
      />
      <input
        id="fifty-percent"
        type="button"
        value="50%"
        onClick={() => updateTip(0.5)}
      />
    </div>
  )
}

export default App
