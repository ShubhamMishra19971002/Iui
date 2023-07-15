import React from 'react'
import Sidebar from "./Side_bar"
import { Link } from 'react-router-dom'

const BrandHomeScreen = () => {
  return (
    <>
      <Sidebar />
      <div className="p-4 pt-0 sm:ml-64">
        <div className="p-4 rounded-lg">
          <div className="mb-[3%]">
            <h3 className="text-black text-xl underline underline-offset-8 decoration-[6px] decoration-blue-600 font-medium mb-5" >Home</h3>
          </div>

          <form>
            <div className="relative mb-[4%]">

              <input type="text" name='search' className="block p-3 w-[75%] bg-[#F5F7FB] text-s border-none  hover:border-none rounded-3xl placeholder:text-black" placeholder="Search influencers by Categories" />
              <button type="submit" className="absolute items-center pointer right-[25%] bottom-2.5 font-medium rounded-lg text-sm px-4 py-2   "> <svg aria-hidden="true" className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
            </div>
          </form>

          <div className=" mb-[4%]">
            <h3 className="text-black text-xl font-medium mb-5" >Your Campaigns</h3>
            <form>
              <div className="flex items-center mb-4">
                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-5 h-5 text-blue-600" />
                <label htmlFor="default-radio-1" className="ml-2 text-base font-medium text-black mr-20">Open Bidding</label>

                <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-5 h-5 text-blue-600" />
                <label htmlFor="default-radio-2 " className="ml-2 text-base font-medium text-black mr-20">Custom Search</label>
              </div>
            </form>

            <div className='flex'>
              <button type='button' className='border pt-[2%] pb-[1%] w-[17%] mr-5 border-blue-500 rounded-lg bg-white'>
                <Link to="/brandDashboard/creatcampaing" >
                <div className='flex justify-center p-1' >
                  <img src="./../../Images/groupPlus.svg" />
                </div>
                <div className='text-center block'><p>Create New</p></div>
                </Link>
              </button>

              <div className='border p-[0.3%] pl-[1.5%] w-[17%] mr-5 border-[#B9CDC1] rounded-lg bg-[#B9CDC1]'>
                <div className='flex p-1 ' >
                  <p className='font-bold'>Zomato <br /><span className='text-sm font-normal line-clamp-none leading-3'>Reels</span></p>
                </div>
                <p className='mt-[20%] text-sm'>12 July 2023</p>
              </div>

              <div className='border p-[0.3%] pl-[1.5%] w-[17%] mr-5 border-[#C5B9CD] rounded-lg bg-[#C5B9CD]'>
                <div className='flex p-1 ' >
                  <p className='font-bold'>CSB <br /><span className='text-sm font-normal line-clamp-none leading-3'>Reels</span></p>
                </div>
                <p className='mt-[20%] text-sm'>12 July 2023</p>
              </div>

              <div className='border p-[0.3%] pl-[1.5%] w-[17%] mr-5 border-[#CDC1B9] rounded-lg bg-[#CDC1B9]'>
                <div className='flex p-1 ' >
                  <p className='font-bold'>Cars Deekho <br /><span className='text-sm font-normal line-clamp-none leading-3'>Reels</span></p>
                </div>
                <p className='mt-[20%] text-sm'>12 July 2023</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-[3%]">
              <h3 className="text-black text-xl font-medium mb-3" >Trending</h3>
            </div>

            <div className="mb-4 grid grid-cols-3">

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
      </div>
    </>
  )
}

export default BrandHomeScreen