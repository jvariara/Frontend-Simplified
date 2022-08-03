import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import "./style.css"

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
