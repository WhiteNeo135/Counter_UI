import { Routes, Route, Link } from "react-router-dom"
import "./App.css";

import Counter1 from './Counter1';
import Counter2 from './Counter2';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <menu>
        <Link to="/">Первый счётчик</Link> |
        <Link to="/c2">Второй счётчик</Link> |
        <Link to="/dsfgl">404 тест</Link>
      </menu>
        <Routes>
          <Route path="/" element={<Counter1/>} />
          <Route path="/c2" element={<Counter2/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      </header>
    </div>
  );
}

export default App;
