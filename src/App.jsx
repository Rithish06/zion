import React, { useEffect } from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Router from './components/router'
import { useLocation } from 'react-router-dom'

const App = () => {


  const pathName = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior : "smooth"
    })
  },[pathName])

  return (
    <div>
        <Navbar />
            <Router />
        <Footer />
    </div>
  )
}

export default App
