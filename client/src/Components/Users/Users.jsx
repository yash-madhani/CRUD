import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


function Users() {

    const [users, setUsers] = useState([
        { Name: 'Yash', Email: 'yashmadhani@gmail.com', Age: '20' }
    ])

    return (
        <div className='p-4 text-center bg-blue-600 h-screen'>
            <div className='p-1 inline-block bg-white'>
                <Link  className='p-2 text-white bg-blue-900' to='/create' >ADD+</Link>
                <table className='p-1 bg-white'>
                    <thead>
                        <tr className='text-center p-2 m-2'>
                            <th className='p-3 text-center'>Name</th>
                            <th className='p-3 text-center'>Email</th>
                            <th className='p-3 text-center'>Age</th>
                            <th className='p-3 text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((users) => {
                                return <tr className='p-1 border-b'>
                                    <td>{users.Name}</td>
                                    <td>{users.Email}</td>
                                    <td>{users.Age}</td>
                                    <td>
                                        <button className='p-2 bg-green-500 rounded-md m-3'>Update</button>
                                        <button className='p-2 bg-red-500 rounded-md m-3'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users