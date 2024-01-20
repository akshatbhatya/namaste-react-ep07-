import React from 'react'
import Header from './src/Header/Header'
import ProductBody from './src/Body/ProductBody'
import { createBrowserRouter } from 'react-router-dom'


function App() {

  
  return (
    <div>
      <Header/>
      <ProductBody/>
    </div>
  )
}
let route=createBrowserRouter([
  {
    path:"",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/about",
        
      },
      {
        path:"/contact",
        
      },
      {
        path:"/cart",
        
      }

    ]

  },
  


    
])

export default App