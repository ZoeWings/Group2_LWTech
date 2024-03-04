//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { TableRoot } from "./table/TableRoot"
import { initializeIcons } from "@fluentui/react"
initializeIcons()

function App() {
  return (
    <div className="App">
      <TableRoot />
    </div>
  );
}

export default App;
