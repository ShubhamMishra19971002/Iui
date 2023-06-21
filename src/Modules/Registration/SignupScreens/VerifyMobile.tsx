import React from 'react'

const VerifyMobile = () => {
  return (
    <>
    <div className=' container grid grid-cols-2 h-fit divide-x-reverse"'>
      <div className="text-center">
        <div className="text-xl ml-48 w-60 h-3font-sans mt-52 font-black">Verify Phone Number</div>
        <div className=" flex flex-col  w-72 ">
          <p className="  ml-32 text-base w-96 mt-5 ring-gray-600 ">
            Providing your phone number helps us keeping your account secure .
            We take Your privacy seriously
          </p>
        </div>
        <div className=" w-96 ml-32 mt-20 text-center">
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
        </div>
      </div>
      <div className="float-right m-16 ">
        <img src="./../../Images/otpscreen.png"></img>
      </div>
    </div>
  </>
  )
}

export default VerifyMobile