import React from 'react'
import Sidebar from "./Side_bar"

const InfluencersList = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 pt-0 sm:ml-64">
                <div className="p-4 rounded-lg">
                    <div className="mb-[3%]">
                        <h3 className="text-black text-xl underline underline-offset-8 decoration-[6px] decoration-blue-600 font-medium mb-5" >My Influencer List</h3>
                    </div>

                    <div className="relative overflow-x-auto shadow-md">
                        <table className="text-sm w-full text-left  ">
                            <thead className="text-sm text-[#5B5B5B] bg-[#D9D9D9]">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Profile
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Followers
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Avg. Views
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Avg. Likes
                                    </th>
                                    <th scope="col" className="px-3 py-3">
                                        ER

                                    </th>
                                </tr>
                            </thead>
                            <tbody className=' text-[#000]' >
                                <tr className="bg-white border text-base">
                                    <td className=" flex px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                                        <img src='./../../Images/Ellipse.png' />
                                        <div className=' m-3 -mt-0'>
                                            <span>Palak</span>
                                            <p className='absolute font-normal text-xs'>@palak223</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        22k
                                    </td>
                                    <td className="px-6 py-4">
                                        100k
                                    </td>
                                    <td className="px-6 py-4">
                                        1.4k
                                    </td>
                                    <td className="px-3 py-4">
                                        3%
                                        <button type="button" className="text-white bg-blue-700 rounded text-sm px-3 ml-3 -mr-12 ">Talk</button>
                                    </td>
                                </tr>



                                <tr className="bg-white border border-slate-300 m-10 text-base">
                                    <td className=" flex px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                                        <img src='./../../Images/Ellipse.png' />
                                        <div className=' m-3 -mt-0'>
                                            <span>Palak</span>
                                            <p className='absolute font-normal text-xs'>@palak223</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        22k
                                    </td>
                                    <td className="px-6 py-4">
                                        100k
                                    </td>
                                    <td className="px-6 py-4">
                                        1.4k
                                    </td>
                                    <td className="px-3 py-4">
                                        3%
                                        <button type="button" className="text-white bg-blue-700 rounded text-sm px-3 ml-3 -mr-12 ">Talk</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>


                    </div>

                </div>
            </div>
        </>
    )
}

export default InfluencersList