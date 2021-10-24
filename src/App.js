import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
function App() {
  return (
    <div className="App">
      <div className="header">
      <Navbar></Navbar>
      </div>
 <Products></Products>
    </div>
  );
}

export default App;
