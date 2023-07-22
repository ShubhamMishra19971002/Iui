import React from 'react'
import Sidebar from './Side_bar'

const ButtonClick = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 pt-0 sm:ml-64">
                <div className="p-4 rounded-lg">
                    <div className="mb-[3%]">
                        <h3 className="text-black text-xl underline underline-offset-8 decoration-[6px] decoration-blue-600 font-medium mb-5" >Car Deekho</h3>
                    </div>
                    <p className='text-lg font-semibold'>Proposal Summary</p>
                    <div className='w-full h-[10rem] rounded-md p-[1%] my-[2%] font-sans bg-[#CDC1B9]'>
                        <p>12 June 2023</p>
                    </div>
                    <p className='text-lg font-semibold'>Where is your project</p>
                    <div className='h-2 w-full mt-16 bg-blue-300'>
                        <hr />
                    </div>
                    <div className='row-auto flex mt-[2%]'>
                        <div className='grid grid-cols-6 gap-2 '>
                            <div className='bg-blue-100 w-56  text-center rounded-3xl p-1 hover:bg-blue-600 hover:text-white'>
                                <p className=''>Proposal Accepted</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-6 gap-2'>
                            <div className='bg-blue-100 w-56  text-center rounded-3xl p-1 hover:bg-blue-600 hover:text-white'>
                                <p>Agreement Signed</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-6 gap-2'>
                            <div className='bg-blue-100 w-56 text-center rounded-3xl p-1 hover:bg-blue-600 hover:text-white'>
                                <p>Reel Recorded</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-6 gap-2'>
                            <div className='bg-blue-100 w-56 text-center rounded-3xl p-1 hover:bg-blue-600 hover:text-white'>
                                <p>Content Published</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-6 gap-2'>
                            <div className='bg-blue-100 w-56 text-center rounded-3xl p-1 hover:bg-blue-600 hover:text-white'>
                                <p>Deal Completed</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-6 gap-2'>
                            <div className='bg-blue-100 w-56 text-center rounded-3xl p-1 hover:bg-blue-600 hover:text-white'>
                                <p>Final Payment</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ButtonClick