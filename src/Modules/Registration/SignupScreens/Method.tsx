import React from 'react'
import Navbar from '../../../Common/Component/Navbar/Navbar'
import Tabs from '../../../Common/Component/Tabs/Tabs'
import { MethodTabList } from '../Constants'

const Method = () => {
    return (
        <>
            <Navbar />
            <div className=' container flex h-fit '>
                <div className=" mt-56 w-full">
                    <img src="./../../Images/method.png"></img>
                </div>
                <div className="mr-96 ">
                    <div className="mr-10 text-2xl w-60 h-3 font-sans mt-12 ml-28 font-black">Signup as </div>
                    <div className="  mt-24 w-80">
                        <Tabs tabList={MethodTabList}/>                       
                    </div>
                </div>

            </div>


        </>
    )
}

export default Method