import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"
import "./App.css";

function Counter1() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <header className="App-header">
        <div className="round no-select">
                <h1>{count}</h1>
            </div>

        <div className="button-wrapper no-select">
            <button className="btn1" onClick={() => setCount(count - 1)}>-</button>
            <button className="btn2" onClick={() => setCount(count + 1)}>+</button>
        </div>
        <p>
            Жми на рычаг, Кронк.
        </p>
      </header>
    </div>
  );
}

export default Counter1;
