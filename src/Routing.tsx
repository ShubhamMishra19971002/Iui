import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Registaration from './Modules/Registration/Registaration'
import BrandHomeScreen from './Modules/BrandManagers/Views/BrandHomeScreen'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup"  element={<Registaration/>}>
      <Route path="/brandDashboard"  element={<BrandHomeScreen />}>

      </Route>
    </Routes>
    </BrowserRouter>    
  )
}

export default  Routing 