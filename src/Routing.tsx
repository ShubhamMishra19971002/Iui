import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registaration from './Modules/Registration/Registaration'
import BrandManager from './Modules/BrandManagers/index'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Registaration />} />
        <Route path="/brandDashboard" element={< BrandManager />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing 