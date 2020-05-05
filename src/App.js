import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [page] = useState(1);
  useEffect(() => {
    fetch(
      `https://maricarmen-app.herokuapp.com/`,
      {
        method: "GET",
        headers: new Headers({
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
