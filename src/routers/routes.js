import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
              path:'/',
              element:<Home/>  
            },
            {
              path:'/about',
              element:<About/>  
            }
        ]
    }
])