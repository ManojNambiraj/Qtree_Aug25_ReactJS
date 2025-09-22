import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserManagement from '../UserManagement'
import CreateUser from './CreateUser'
import EditUser from './EditUser'

function UserApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserManagement />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default UserApp
