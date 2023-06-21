import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Registaration from './Modules/Registration/Registaration'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup"  element={<Registaration/>}>
      </Route>
    </Routes>
    </BrowserRouter>    
  )
}

export default  Routing 