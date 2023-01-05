import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"
import "./App.css";

function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>404</h1>
        
        <p> Страница не найдена </p>
      </header>
    </div>
  );
}

export default NotFound;
