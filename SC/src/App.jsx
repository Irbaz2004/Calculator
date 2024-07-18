import React from 'react'
import Nav from './Nav'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Calculate from './Calculate'
import BMI from './BMI'
import Temperature from './Temperature'
export default function App() {
  return (
    <>
     <Nav/> 
     <Routes>
      <Route path="/" element={<Calculate/>}/>
      <Route path="bdm" element={<BMI/>}/>
      <Route path="temperature" element={<Temperature/>}/>
     </Routes>
     
    </>
  )
}
