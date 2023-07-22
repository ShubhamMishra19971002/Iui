import React from 'react'
import Sidebar from './Side_bar'

const CreateNewProject = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 pt-0 sm:ml-64">
                <div className="p-4 rounded-lg">
                    <div className="mb-[3%]">
                        <h3 className="text-black text-xl underline underline-offset-8 decoration-[6px] decoration-blue-600 font-medium mb-5" >Create New Project</h3>
                    </div>
                    <div>
                        <div className="grid grid-cols-12">
                            <div className='border box-border text-center w-12 h-12 py-1 rounded-3xl text-white text-2xl bg-blue-500'>01</div>
                            <div className='-ml-10'>
                                <p className='mt-[5%] text-lg font-semibold'>Project Name</p>
                                <input className='border border-black rounded my-[10%] w-64 h-10' type='text' />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mt-[3%]">
                            <div className='border box-border text-center w-12 h-12 py-1 rounded-3xl text-white text-2xl bg-blue-500'>02</div>
                            <div className='-ml-[90%]'>
                                <p className='mt-[0.7%] text-lg font-semibold'>Influencer Search Method</p>
                                <div className="flex items-center mt-4">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-5 h-5 text-blue-600" />
                                    <label htmlFor="default-radio-1" className="ml-2 text-base font-normal text-black mr-20">Open Bidding</label>

                                    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-5 h-5 text-blue-600" />
                                    <label htmlFor="default-radio-2 " className="ml-2 text-base font-normal text-black mr-20">Custom Search</label>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mt-[3%]">
                            <div className='border box-border text-center w-12 h-12 py-1 rounded-3xl text-white text-2xl bg-blue-500'>03</div>
                            <div className='-ml-[90%]'>
                                <p className='mt-[0.7%] text-lg font-semibold'>Influencers List</p>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="w-12 h-6  bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white  after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateNewProject