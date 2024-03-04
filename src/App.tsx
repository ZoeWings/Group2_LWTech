import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import { TableRoot } from "./table/TableRoot"
import { initializeIcons } from "@fluentui/react"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  initializeIcons()
  return (
    <div className="App">
      <TableRoot />
    </div>
  );
}

export default App;
