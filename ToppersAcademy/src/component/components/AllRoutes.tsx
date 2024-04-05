

import Teachers from '../../pages/Teachers'
import { Route, Routes } from 'react-router-dom'

import Progress from '../../pages/Progress'
import Profile from '../../pages/Profile'
import Card1 from '../Body'

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
