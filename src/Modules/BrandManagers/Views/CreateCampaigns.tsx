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
                <p className='mt-[0.7%] text-lg font-semibold'>Proposal for Influencers</p>
                <div>
                  <div className="relative">
                    <input type="text" id="outlined_success" aria-describedby="outlined_success_help" className="block px-2.5 pb-2.5 pt-4 w-3/2 text-sm text-gray-900 bg-transparent rounded-lg border hover:border-dashed border-black appearance-none  focus:outline-none focus:ring-0" placeholder="Qty" />
                    <label htmlFor="outlined_success" className="absolute text-sm duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Outlined success</label>
                  </div>
                </div>


                <div></div>


                <div>
                  <p className='text-lg font-semibold'>Other Detail</p>
                  <input className='border w-full border-black rounded-md h-[8rem]' type='text' />
                </div>
                <div className='flex my-[4%]'>
                  <span className='text-lg font-semibold'>Project Agreement</span>
                  <label className="ml-5 relative items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 border border-gray-600 bg-white peer-focus:outline-none peer-focus:ring-4  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-600  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:bg-blue-600"></div>
                  </label>
                </div>

              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className='border box-border text-center w-12 h-12 py-1 rounded-3xl text-white text-2xl bg-blue-500'>04</div>
              <div className='-ml-[90%]'>
                <p className='text-lg font-semibold'>Project Agreement</p>

                <div className='border border-black h-[60%] rounded-md p-[2%] my-[2%] font-sans overflow-y-scroll '>
                  <pre className=' whitespace-pre-line' >Dear [Recipient's Name],<br />
                    This agreement (hereinafter referred to as the "Agreement") is entered into by and between [Your Name/Organization Name] (hereinafter referred to as "Party A") and [Recipient's Name/Organization Name] (hereinafter referred to as "Party B") collectively referred to as the "Parties."
                    <div className='pl-7'>
                      <ol className='list-decimal'>
                        <li>
                          Purpose and Scope: This Agreement outlines the terms and conditions under which Party A agrees to provide [specific goods/services] to Party B, and Party B agrees to accept and pay for the same.

                        </li>
                        <li>
                          Term: This Agreement shall commence on [start date] and shall continue until [end date] unless terminated earlier in accordance with the provisions stated herein.

                        </li>
                        <li>
                          Deliverables: Party A agrees to provide the following deliverables to Party B as per the agreed-upon specifications, timeline, and any other relevant details, as outlined in Exhibit A attached hereto.
                        </li>
                      </ol>
                    </div>
                  </pre>
                </div>
                <button className='mt-9 border border-blue-500 bg-blue-500 px-7 p-2 text-white font-medium rounded-md hover:bg-blue-700'>Save Project</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default CreateCampaigns