//import React from 'react';
//import { useState } from 'react'
import './dist/App.css';
import { Link } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Button from './components/button/Button';

function App() {
  
  return (
  <>
  <NavBar />
    <div className='App'>
      <h1>'welcome to the wedding planner site'</h1>
      <Link to='register'>Create a new wedding project</Link>
      <br/>
      <Link to='login'>My account</Link>
      <br/>
      <Button text={"login"}></Button>
    </div>
  </>
  )
}

export default App;

