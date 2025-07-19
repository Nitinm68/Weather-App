import './App.css';

import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="app-container" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌤️ WEATHER APP</h1>
      <Weather />
    </div>
  );
}

export default App;
