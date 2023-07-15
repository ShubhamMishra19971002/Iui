import React from 'react'
import Sidebar from './Side_bar'

const CreateCampaigns = () => {
  return (
    <>
      <Sidebar />
      <div className="p-4 pt-0 sm:ml-64">
        <div className="p-4 rounded-lg">
          <div className="mb-[3%]">
            <h3 className="text-black text-xl underline underline-offset-8 decoration-[6px] decoration-blue-600 font-medium mb-5" >Create New Campaign</h3>
          </div>
          <div>
            <div className="grid grid-cols-12">
            <div className='border box-border text-center w-12 h-12 align-middle py-2 rounded-3xl text-white text-lg bg-blue-500'>01</div>
            <div className='border box-border text-center w-12 h-12 align-middle py-2 rounded-3xl text-white text-lg bg-blue-500'>01</div>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateCampaigns