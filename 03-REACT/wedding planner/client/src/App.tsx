//import React from 'react';
//import { useState } from 'react'
import './dist/App.css';
import { Link } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';


function App() {
  
  return (
  <>
  <NavBar />
    <div className='App'>
      <h1>'welcome to the wedding planner site'</h1>
      <Link to='register'>Create a new wedding project</Link>
    </div>
  </>
  )
}

export default App;

