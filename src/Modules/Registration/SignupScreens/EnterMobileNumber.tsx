import React from "react";
import OtpScreen from "../OtpScreen";
import Navbar from "../../../Common/Component/Navbar/Navbar";
import Button from "../../../Common/Component/Button/Button";
import { EnterPhoneButtonName } from "../Constants";

const EnterMobileNumber = () => {
  return (
    <>
    <Navbar />
    <div className=' container flex h-fit '>
        <div className=" mt-60 w-full">
            <img src="./../../Images/phonenumber.png"></img>
        </div>
        <div className="mr-96">
            <div className="text-2xl w-60 h-3 font-sans mt-16 ml-28 font-black">Phone Number</div>
            <div className=" flex flex-col  w-72 ">
                <p className="   text-base w-96 ml-10 mt-12 ring-gray-600 ">
                    Providing your phone number helps us keeping your account secure .
                    We take Your privacy seriously
                </p>
            </div>
            <div className=" w-96 ml-5 mt-20 text-center">
                <div className="grid md:grid-cols-2 md:gap-6 ">
                    <div className=" relative z-0  w-80 mb-6 group ">
                        <input
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            name="floating_phone"
                            id="floating_phone"
                            className=" m-10 w-80 block py-2.5 px-0  text-sm text-black bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            value="+ 91  "
                            placeholder=" "
                            required
                        />
                    </div>


                    {/* <OtpScreen/> */}
                </div>
                <div>
        <button type="button" onClick={()=>{}} className="text-white text-center ml-10 w-80 bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5  inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
            <span className='text-center ml-20'>Join Us</span>
        </button>
    </div>
            </div>
        </div>

    </div>


</>
  );
};

export default EnterMobileNumber;
