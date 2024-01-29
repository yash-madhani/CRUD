import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import CreateUser from './Components/CreateUser/CreateUser.jsx'
import UpdateUser from './Components/UpdateUser/UpdateUser.jsx';
import Users from './Components/Users/Users.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Users />} />
      <Route path='create' element={<CreateUser />} />
      <Route path='update' element={<UpdateUser />} />
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
