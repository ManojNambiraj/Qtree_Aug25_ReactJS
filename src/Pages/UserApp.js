import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserManagement from '../UserManagement'
import CreateUser from './CreateUser'

function UserApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserManagement />} />
        <Route path='/create' element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default UserApp
