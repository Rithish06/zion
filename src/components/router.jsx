import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Contact from '../pages/Contact'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<Contact />} />
    </Routes>
  )
}

export default Router
