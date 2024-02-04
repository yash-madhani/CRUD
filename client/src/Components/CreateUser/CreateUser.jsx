import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function CreateUser() {
  return (
    <div className='p-4 text-center bg-blue-600 h-screen'>
      <div className='p-1 inline-block bg-white'>
        <form action="">
          <h2 className='p-2 text-lg'>Add User</h2>

          <div className='flex flex-col'>
            <label className='p-4 text-lg' htmlFor="">Name: <input className='m-2 w-96 border-2 rounded-lg' placeholder='Enter Name' type="text" /></label>
            <label className='p-4 text-lg' htmlFor="">Email: <input className='m-2 w-96 border-2 rounded-lg' placeholder='Enter Email' type="email" /></label>
            <label className='p-4 text-lg' htmlFor="">Age: <input className='m-2 w-96 border-2 rounded-lg' placeholder='Enter Age' type="number" /></label>
            <button className='p-2 bg-green-500 rounded-md m-3' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser