import React from 'react'
import Contact from './components/Pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Services from './components/Pages/Services'
const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/services' Component={Services}/>

      </Routes>
    </>
      
  )
}

export default App