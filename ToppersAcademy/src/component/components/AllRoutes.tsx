import React from 'react'
import Body from './Body'
import Profile from '../pages/Profile'

import Teachers from '../pages/Teachers'
import { Route, Routes } from 'react-router-dom'
import Card1 from '../pages/Card1'
import Progress from '../pages/Progress'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/card" element={<Card1/>}/>
    <Route path="/profile" element={<Profile/>} />
    <Route path="/progress" element={<Progress />} />
    <Route path="/teachers" element={<Teachers />} />
  </Routes>
  )
}

export default AllRoutes
