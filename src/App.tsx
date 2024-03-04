import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TableRoot } from "./table/TableRoot"
import { initializeIcons } from "@fluentui/react"
import RootLayout from './layout';
initializeIcons()

function App() {
  return (
    <RootLayout>
      <div className="App">
        <TableRoot />
      </div>
    </RootLayout>
  );
}

export default App;
