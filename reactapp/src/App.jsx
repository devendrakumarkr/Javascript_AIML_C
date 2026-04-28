import React, { useState } from 'react'
import './App.css'
import Menu from './component/Menu'
import Article from './component/Article'
import Homepage from './component/Homepage'
import Contact from './component/Contact'
import { Route, Routes } from 'react-router-dom'
import Profile from './component/Profile'
import { UserContext } from './UserContext'

function App() {
  const[data,setData]=useState("Sample data")

  const name="Alex"
  return (
    <>

      <UserContext.Provider value={name}>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/article" element={<Article/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
        </Routes>
      </UserContext.Provider>
      
    </>
  )
}

export default App
