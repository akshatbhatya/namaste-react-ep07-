import React from 'react'
import Header from './src/Header/Header'
import ProductBody from './src/Body/ProductBody'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import About from './src/About/About'


function App() {

  
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App