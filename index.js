import React from "react"
import ReactDom from "react-dom/client"
import App from "./App"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./src/About/About"
import ProductBody from "./src/Body/ProductBody"


let appRouter=createBrowserRouter([
    {
      path:"",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<ProductBody/>
        },
        {
          path:"/about",
          element:<About/>
        },
      ]

    },
  
  ])
  

let root =ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)