import React from "react"
import ReactDom from "react-dom/client"
import App from "./App"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./src/About/About"
import ProductBody from "./src/Body/ProductBody"
import Contact from "./src/Contact/Contact"
import Error from "./src/Error/Error"


let appRouter=createBrowserRouter([
    {
      path:"",
      element:<App/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<ProductBody/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
          }
      ]
    }

  ])
  

let root =ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)