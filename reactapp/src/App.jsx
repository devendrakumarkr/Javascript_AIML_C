import React, { useState } from 'react'
import './App.css'
import Menu from './component/Menu'
import Article from './component/Article'
import Homepage from './component/Homepage'
import Contact from './component/Contact'

function App() {
  const[data,setData]=useState("Sample data")
  return (
    <>
      <Homepage/>
      <Menu/>
      <Article data={data}/>
      <Contact/>
    </>
  )
}

export default App
