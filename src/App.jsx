import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

import DemoPage from './Pages/DemoPage'


function App() {
  
  return (
    <div className="main">
      
      <Sidebar />

      <div className="container">
        
        <Navbar/>
        
        <div className="content">
          
          <Routes>
              <Route path="/" element={<DemoPage title={"Home"} />}/>
              <Route path="/store" element={<DemoPage title={"Store"} />}/>
              <Route path="/settings" element={<DemoPage title={"Settings"} />}/>
          </Routes>
        
        </div>
      
      </div>
    </div>
  )

}

export default App
