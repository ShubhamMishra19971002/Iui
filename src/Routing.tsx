import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registaration from './Modules/Registration/Registaration'
import BrandManager from './Modules/BrandManagers/index'
import BrandHomeScreen from './Modules/BrandManagers/Views/BrandHomeScreen'
import Trending from './Modules/BrandManagers/Views/Trending'
import InfluencersList from './Modules/BrandManagers/Views/InfluencersList'
import CreateCampaigns from './Modules/BrandManagers/Views/CreateCampaigns'
import ButtonClick from './Modules/BrandManagers/Views/ButtonClick'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Registaration />} />
        <Route path="/brandDashboard" element={< BrandManager />} />
        <Route path="/brandDashboard/" element={<BrandHomeScreen />} />
        <Route path="/brandDashboard/trending" element={<Trending />} />
        <Route path="/brandDashboard/influencerlist" element={<InfluencersList />} />
        <Route path="/brandDashboard/creatcampaing" element={<CreateCampaigns />} />
        <Route path="/brandDashboard/cardeekho" element={<ButtonClick />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing 