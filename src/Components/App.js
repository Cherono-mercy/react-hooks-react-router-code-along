import React from 'react'
import NavBar from './Navbar'
import About from './About'
import Login from './Login'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
    <NavBar /> 
    <Routes>
      <Route exact path="/about" element= {<About/>}/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/" element= {<Home/>}/>
      </Routes> 
      </div>
  )
}

export default App;