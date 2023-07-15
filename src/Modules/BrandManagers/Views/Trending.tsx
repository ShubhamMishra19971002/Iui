import React from 'react'
import Sidebar from "./Side_bar"

const Trending = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 pt-0 sm:ml-64">
                <div className="p-4 rounded-lg">
                    <div className="mb-[3%]">
                        <h3 className="text-black text-xl underline underline-offset-8 decoration-[6px] decoration-blue-600 font-medium mb-5" >Trending</h3>
                    </div>
                    <div className="mb-4 grid grid-cols-3 gap-3">

                        <div className="flex mr-[5%]">
                            <img src='./../../Images/person1.png' />
                            <div className='absolute mt-[15%] p-[1%] text-white' >
                                <h3 className='text-2xl font-medium'>Pablo Escobar</h3>
                                <p className='text-sm'>2.3M Followers</p>
                                <div className='flex mt-[12%]'>
                                    <div className=' mr-[5%]'>
                                        <img className='object-fill h-8' src='./../../Images/facebook.svg' />
                                    </div>
                                    <div className='mr-[5%]'>
                                        <img className='object-fill h-8' src='./../../Images/instagram.svg' />
                                    </div>
                                    <div className='mr-[5%]'>
                                        <img className='object-fill h-8' src='./../../Images/youtube.svg' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex  mr-[5%]">
                            <img src='./../../Images/person2.png' />
                            <div className='absolute mt-[15%] p-[1%] text-white' >
                                <h3 className='text-2xl font-medium'>Philip Huge</h3>
                                <p className='text-sm'>3.4M Followers</p>
                                <div className='flex mt-[12%]'>
                                    <div className=' mr-[5%]'>
                                        <img className='object-fill h-8' src='./../../Images/facebook.svg' />
                                    </div>
                                    <div className='mr-[5%]'>
                                        <img className='object-fill h-8' src='./../../Images/instagram.svg' />
                                    </div>
                                    <div className='mr-[5%]'>
                                        <img className='object-fill h-8' src='./../../Images/youtube.svg' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex mr-[5%]">
                            <img src='./../../Images/person3.png' />
                            <div className='absolute mt-[15%] p-[1%] text-white' >
                                <h3 className='text-2xl font-medium'>Nichola Josep</h3>
                                <p className='text-sm'>1.2M Followers</p>
                                <div className='flex mt-[12%]'>
                                    <div className=' mr-[5%]'>
                                        <img className='object-fill h-8' src='./../../Images/facebook.svg' />
                                    </div>
                                    <div className='mr-[5%]'>
                                        <img className='object-fill h-8' src='./../../Images/instagram.svg' />
                                    </div>
                                    <div className='mr-[5%]'>
                                        <img className='object-fill h-8' src='./../../Images/youtube.svg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trending