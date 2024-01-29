import React from 'react'
import CreateUser from './Components/CreateUser/CreateUser'
import UpdateUser from './Components/UpdateUser/UpdateUser'
import Users from './Components/Users/Users'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Outlet />
    </>
  )
}

export default Layout