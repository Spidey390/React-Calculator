import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  
  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {["1", "2", "3", "+"].map((symbol) => (
          <button key={symbol} onClick={() => handleClick(symbol)}>
            {symbol}
          </button>
        ))}
        {["4", "5", "6", "-"].map((symbol) => (
          <button key={symbol} onClick={() => handleClick(symbol)}>
            {symbol}
          </button>
        ))}
        {["7", "8", "9", "*"].map((symbol) => (
          <button key={symbol} onClick={() => handleClick(symbol)}>
            {symbol}
          </button>
        ))}
        {["0", "/"].map((symbol) => (
          <button key={symbol} onClick={() => handleClick(symbol)}>
            {symbol}
          </button>
        ))}
        <button onClick={calculate}>=</button>
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
}

export default App
