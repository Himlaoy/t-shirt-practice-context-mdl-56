import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Review from './components/Review/Review';

const router =createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'about',
        element: <About></About>,
        loader: ()=>fetch('tshirts.json')
      },
      {
        path:'/review',
        element:<Review></Review>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
