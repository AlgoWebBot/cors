import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout.jsx';
import Phones from './Components/Phones.jsx';
import Phone from './Components/Phone.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/phones',
        element: <Phones />,
        loader: () => fetch('http://localhost:5000/data/')
      },
      {
        path: '/phone/:id',
        element: <Phone />,
        loader: ({ params }) => fetch(`http://localhost:5000/data/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
