import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const InfuencerHomeScreen =()=>{
    return( 
        <>
        <Sidebar/>
        <div className="pt-0 sm:ml-[228px]">
            <div className="p-4 rounded-lg">
                <div className="mb-[3%]">
                    <h3 className="text-black text-xl font-medium" >Find Influencer</h3>
                    <div className="w-16 h-2 bg-blue-500" />

                </div>

                <form>
                    <div className="relative mb-[4%]">

              <input type="text" name='search' className="block p-3 w-[75%] bg-[#F5F7FB] text-s border-none  hover:border-none rounded-3xl placeholder:text-black" placeholder="Search influencers by Categories" />
              <button type="submit" className="absolute items-center pointer right-[25%] bottom-2.5 font-medium rounded-lg text-sm px-4 py-2  "> <svg aria-hidden="true" className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
            </div>
                </form>

            <div className="flex space-x-4">
                <button type="button" className="inline-flex items-center p-2 w-32 h-7 relative rounded-lg border border-black">
                    <svg className="pr-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path d="M12.25 0.258301H3.75C1.67893 0.258301 0 1.88307 0 3.88733V12.1131C0 14.1174 1.67893 15.7422 3.75 15.7422H12.25C14.3211 15.7422 16 14.1174 16 12.1131V3.88733C16 1.88307 14.3211 0.258301 12.25 0.258301Z" fill="url(#paint0_radial_459_42071)"/>
                    <path d="M12.25 0.258301H3.75C1.67893 0.258301 0 1.88307 0 3.88733V12.1131C0 14.1174 1.67893 15.7422 3.75 15.7422H12.25C14.3211 15.7422 16 14.1174 16 12.1131V3.88733C16 1.88307 14.3211 0.258301 12.25 0.258301Z" fill="url(#paint1_radial_459_42071)"/>
                    <path d="M8.00056 1.95166C6.30319 1.95166 6.09013 1.95886 5.4235 1.98819C4.75813 2.01771 4.30394 2.11962 3.90656 2.2692C3.49544 2.42368 3.14675 2.63035 2.79938 2.96664C2.45169 3.30287 2.23813 3.64031 2.078 4.03799C1.923 4.42267 1.81756 4.86239 1.78762 5.50599C1.75781 6.15118 1.75 6.35743 1.75 8.00011C1.75 9.64279 1.7575 9.84831 1.78775 10.4934C1.81838 11.1373 1.92369 11.5769 2.07812 11.9614C2.23787 12.3593 2.45144 12.6967 2.79894 13.0329C3.14625 13.3694 3.49494 13.5765 3.90575 13.731C4.30344 13.8806 4.75769 13.9825 5.42294 14.012C6.08962 14.0414 6.3025 14.0486 7.99981 14.0486C9.69738 14.0486 9.90975 14.0414 10.5764 14.012C11.2417 13.9825 11.6964 13.8806 12.0941 13.731C12.5051 13.5765 12.8532 13.3694 13.2005 13.0329C13.5482 12.6967 13.7617 12.3593 13.9219 11.9616C14.0755 11.5769 14.181 11.1372 14.2122 10.4936C14.2422 9.84843 14.25 9.64279 14.25 8.00011C14.25 6.35743 14.2422 6.1513 14.2122 5.50612C14.181 4.8622 14.0755 4.42273 13.9219 4.03817C13.7617 3.64031 13.5482 3.30287 13.2005 2.96664C12.8529 2.63023 12.5052 2.42356 12.0938 2.26926C11.6953 2.11962 11.2409 2.01765 10.5755 1.98819C9.90881 1.95886 9.69656 1.95166 7.99862 1.95166H8.00056ZM7.43988 3.04164C7.60631 3.0414 7.792 3.04164 8.00056 3.04164C9.66938 3.04164 9.86712 3.04745 10.5261 3.07642C11.1355 3.10339 11.4663 3.20192 11.6866 3.28472C11.9783 3.39432 12.1862 3.52539 12.4048 3.73714C12.6236 3.94884 12.7589 4.15043 12.8725 4.43271C12.9581 4.64561 13.06 4.96569 13.0878 5.55541C13.1177 6.19303 13.1242 6.38452 13.1242 7.99872C13.1242 9.61291 13.1177 9.80446 13.0878 10.442C13.0599 11.0317 12.9581 11.3518 12.8725 11.5648C12.7593 11.8471 12.6236 12.0481 12.4048 12.2596C12.1861 12.4713 11.9784 12.6023 11.6866 12.712C11.4665 12.7951 11.1355 12.8934 10.5261 12.9204C9.86725 12.9494 9.66938 12.9557 8.00056 12.9557C6.33169 12.9557 6.13387 12.9494 5.47506 12.9204C4.86569 12.8932 4.53494 12.7947 4.31444 12.7119C4.02281 12.6022 3.81444 12.4712 3.59569 12.2595C3.37694 12.0478 3.24156 11.8467 3.128 11.5643C3.04244 11.3513 2.9405 11.0313 2.91275 10.4415C2.88281 9.80392 2.87681 9.61243 2.87681 7.9972C2.87681 6.38204 2.88281 6.19152 2.91275 5.5539C2.94062 4.96418 3.04244 4.6441 3.128 4.43089C3.24131 4.14862 3.37694 3.94702 3.59575 3.73533C3.8145 3.52364 4.02281 3.39257 4.3145 3.28273C4.53481 3.19956 4.86569 3.10128 5.47506 3.07418C6.05162 3.04896 6.27506 3.0414 7.43988 3.04013V3.04164ZM11.3368 4.04591C10.9228 4.04591 10.5868 4.37071 10.5868 4.77148C10.5868 5.17218 10.9228 5.49729 11.3368 5.49729C11.7509 5.49729 12.0868 5.17218 12.0868 4.77148C12.0868 4.37077 11.7509 4.04567 11.3368 4.04567V4.04591ZM8.00056 4.89396C6.22806 4.89396 4.79094 6.28473 4.79094 8.00011C4.79094 9.71549 6.22806 11.1056 8.00056 11.1056C9.77312 11.1056 11.2098 9.71549 11.2098 8.00011C11.2098 6.28479 9.773 4.89396 8.00044 4.89396H8.00056ZM8.00056 5.98394C9.15112 5.98394 10.0839 6.88654 10.0839 8.00011C10.0839 9.11356 9.15112 10.0163 8.00056 10.0163C6.84994 10.0163 5.91725 9.11356 5.91725 8.00011C5.91725 6.88654 6.84994 5.98394 8.00056 5.98394Z" fill="white"/>
                    <defs>
                        <radialGradient id="paint0_radial_459_42071" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.25 16.9347) rotate(-90) scale(15.3457 14.7484)">
                        <stop stop-color="#FFDD55"/>
                        <stop offset="0.1" stop-color="#FFDD55"/>
                        <stop offset="0.5" stop-color="#FF543E"/>
                        <stop offset="1" stop-color="#C837AB"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial_459_42071" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-2.68006 1.37368) rotate(78.3139) scale(6.86855 29.1799)">
                        <stop stop-color="#3771C8"/>
                        <stop offset="0.128" stop-color="#3771C8"/>
                        <stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    Instagram
                    <svg className="px-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 9" fill="none">
                    <path d="M7.33978 8.72578C7.74083 9.10549 8.37375 9.0882 8.75347 8.68716L14.9412 2.15176C15.321 1.75071 15.3037 1.11779 14.9026 0.738073C14.5016 0.35836 13.8686 0.375653 13.4889 0.776698L7.98869 6.58594L2.17944 1.0857C1.7784 0.705984 1.14547 0.723277 0.765758 1.12432C0.386045 1.52537 0.403338 2.1583 0.804383 2.53801L7.33978 8.72578ZM7.00037 7.02731L7.02769 8.02694L9.02694 7.97231L8.99963 6.97269L7.00037 7.02731Z" fill="black"/>
                    </svg>
                    </button>

                    <button type="button" className="inline-flex items-center p-2 pr-0 w-32 h-7 relative rounded-lg border border-black">
                    <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 14 18" fill="none">
                    <path d="M0.65625 3.375H13.3438C13.5178 3.375 13.6847 3.46389 13.8078 3.62213C13.9309 3.78036 14 3.99497 14 4.21875C14 4.44253 13.9309 4.65714 13.8078 4.81537C13.6847 4.97361 13.5178 5.0625 13.3438 5.0625H0.65625C0.482202 5.0625 0.315282 4.97361 0.192211 4.81537C0.0691404 4.65714 0 4.44253 0 4.21875C0 3.99497 0.0691404 3.78036 0.192211 3.62213C0.315282 3.46389 0.482202 3.375 0.65625 3.375ZM2.625 8.71875C2.625 8.49497 2.69414 8.28036 2.81721 8.12213C2.94028 7.96389 3.1072 7.875 3.28125 7.875H10.7188C10.8928 7.875 11.0597 7.96389 11.1828 8.12213C11.3059 8.28036 11.375 8.49497 11.375 8.71875C11.375 8.94253 11.3059 9.15714 11.1828 9.31537C11.0597 9.4736 10.8928 9.5625 10.7188 9.5625H3.28125C3.1072 9.5625 2.94028 9.4736 2.81721 9.31537C2.69414 9.15714 2.625 8.94253 2.625 8.71875ZM5.25 13.2188C5.25 12.995 5.31914 12.7804 5.44221 12.6221C5.56528 12.4639 5.7322 12.375 5.90625 12.375H8.09375C8.2678 12.375 8.43472 12.4639 8.55779 12.6221C8.68086 12.7804 8.75 12.995 8.75 13.2188C8.75 13.4425 8.68086 13.6571 8.55779 13.8154C8.43472 13.9736 8.2678 14.0625 8.09375 14.0625H5.90625C5.7322 14.0625 5.56528 13.9736 5.44221 13.8154C5.31914 13.6571 5.25 13.4425 5.25 13.2188Z" fill="black"/>
                    </svg>
                    Category
                    </button>

                    <button type="button" className="inline-flex items-center p-2 w-32 h-7 relative rounded-lg border-[1px] border-black text-lg">
                    Location
                    <svg className="ml-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 9" fill="none">
                    <path d="M7.33978 8.72578C7.74083 9.10549 8.37375 9.0882 8.75347 8.68716L14.9412 2.15176C15.321 1.75071 15.3037 1.11779 14.9026 0.738073C14.5016 0.35836 13.8686 0.375653 13.4889 0.776698L7.98869 6.58594L2.17944 1.0857C1.7784 0.705984 1.14547 0.723277 0.765758 1.12432C0.386045 1.52537 0.403338 2.1583 0.804383 2.53801L7.33978 8.72578ZM7.00037 7.02731L7.02769 8.02694L9.02694 7.97231L8.99963 6.97269L7.00037 7.02731Z" fill="black"/>
                    </svg>
                    </button>

                    <button type="button" className="inline-flex items-center p-2 w-32 h-7 relative rounded-lg border-[1px] border-black text-lg">
                    Gender
                    <svg className="ml-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 9" fill="none">
                    <path d="M7.33978 8.72578C7.74083 9.10549 8.37375 9.0882 8.75347 8.68716L14.9412 2.15176C15.321 1.75071 15.3037 1.11779 14.9026 0.738073C14.5016 0.35836 13.8686 0.375653 13.4889 0.776698L7.98869 6.58594L2.17944 1.0857C1.7784 0.705984 1.14547 0.723277 0.765758 1.12432C0.386045 1.52537 0.403338 2.1583 0.804383 2.53801L7.33978 8.72578ZM7.00037 7.02731L7.02769 8.02694L9.02694 7.97231L8.99963 6.97269L7.00037 7.02731Z" fill="black"/>
                    </svg>
                    </button>

                    <button type="button" className="inline-flex items-center p-2 w-34 h-8 relative rounded-lg border-[1px] border-black text-lg">
                    Avg. Post Like
                    <svg className="ml-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 9" fill="none">
                    <path d="M7.33978 8.72578C7.74083 9.10549 8.37375 9.0882 8.75347 8.68716L14.9412 2.15176C15.321 1.75071 15.3037 1.11779 14.9026 0.738073C14.5016 0.35836 13.8686 0.375653 13.4889 0.776698L7.98869 6.58594L2.17944 1.0857C1.7784 0.705984 1.14547 0.723277 0.765758 1.12432C0.386045 1.52537 0.403338 2.1583 0.804383 2.53801L7.33978 8.72578ZM7.00037 7.02731L7.02769 8.02694L9.02694 7.97231L8.99963 6.97269L7.00037 7.02731Z" fill="black"/>
                    </svg>
                    </button>

                    <button type="button" className="inline-flex items-center p-2 w-32 h-7 relative rounded-lg border-[1px] border-black text-lg">
                    Followers
                    <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 9" fill="none">
                    <path d="M7.33978 8.72578C7.74083 9.10549 8.37375 9.0882 8.75347 8.68716L14.9412 2.15176C15.321 1.75071 15.3037 1.11779 14.9026 0.738073C14.5016 0.35836 13.8686 0.375653 13.4889 0.776698L7.98869 6.58594L2.17944 1.0857C1.7784 0.705984 1.14547 0.723277 0.765758 1.12432C0.386045 1.52537 0.403338 2.1583 0.804383 2.53801L7.33978 8.72578ZM7.00037 7.02731L7.02769 8.02694L9.02694 7.97231L8.99963 6.97269L7.00037 7.02731Z" fill="black"/>
                    </svg>
                    </button>
            </div>
            </div>

            <div className="mt-[45px] ml-4"><span className="text-black text-xl font-normal leading-normal">12K+ </span><span className="text-zinc-700 text-xl font-normal leading-normal">Profiles</span></div>

            <div className=" flex items-center justify-end mr-[169px] mt-0">
                <div className="w-6 h-6 relative mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z" fill="#4169E1"/>
                    </svg>
                </div>
                <div className="text-black text-xl font-normal leading-normal mr-4">Registered Influencer </div>
                <div className="w-12 h-8 relative">
                    <div className="w-12 h-8 left-0 top-0 absolute bg-purple-50 rounded-full border border-black" />
                    <div className="w-12 h-12 left-[-8px] top-[-8px] absolute">
                        <div className="w-4 h-4 left-[16px] top-[16px] absolute bg-black rounded-full" />
                    </div>
                </div>
                
            </div>

            {/* card */}
            <div className=" grid grid-rows-3 grid-cols-3">
            <div className="w-[265px] h-[273px] mt-11 px-4 py-2 mr-11 ml-4 bg-white rounded-md shadow flex-col justify-start items-start gap-5 inline-flex">
                <div className="justify-start items-center gap-3 inline-flex">
                    <img className="w-16 h-16 rounded-full" src="./../Images/Ellipse 9.png" />
                    <div className="p-2 bg-white rounded-lg border border-blue-600 justify-start items-start gap-2 flex">
                        <div className="w-3 h-3.5 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                                <path d="M2 11.25H10M2 3.75H10H2ZM2 7.5H6H2Z" stroke="#4169E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="text-blue-600 text-xs font-medium tracking-tight">Add to the list</div>
                    </div>
                    <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 left-0 top-0 absolute bg-slate-50 rounded-full" />
                        <div className="w-4 h-4 left-[8.72px] top-[8px] absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M10.3075 2.8999C10.0762 2.8999 9.8545 2.98419 9.69101 3.13422C9.52752 3.28425 9.43567 3.48773 9.43567 3.6999C9.43567 3.91208 9.52752 4.11556 9.69101 4.26559C9.8545 4.41562 10.0762 4.4999 10.3075 4.4999H12.5619L7.07572 9.5343C6.99245 9.6081 6.92604 9.69638 6.88035 9.79398C6.83466 9.89158 6.81061 9.99656 6.8096 10.1028C6.8086 10.209 6.83066 10.3143 6.87449 10.4127C6.91832 10.511 6.98306 10.6003 7.06491 10.6754C7.14677 10.7505 7.24411 10.8099 7.35125 10.8502C7.45839 10.8904 7.57318 10.9106 7.68894 10.9097C7.8047 10.9088 7.91909 10.8867 8.02546 10.8448C8.13182 10.8029 8.22802 10.7419 8.30844 10.6655L13.7946 5.6311V7.6999C13.7946 7.91208 13.8865 8.11556 14.05 8.26559C14.2135 8.41562 14.4352 8.4999 14.6664 8.4999C14.8976 8.4999 15.1194 8.41562 15.2829 8.26559C15.4464 8.11556 15.5382 7.91208 15.5382 7.6999V3.6999C15.5382 3.48773 15.4464 3.28425 15.2829 3.13422C15.1194 2.98419 14.8976 2.8999 14.6664 2.8999H10.3075Z" fill="#4169E1"/>
                                <path d="M5.0766 4.5C4.61417 4.5 4.17068 4.66857 3.84369 4.96863C3.51671 5.26869 3.33301 5.67565 3.33301 6.1V12.5C3.33301 12.9243 3.51671 13.3313 3.84369 13.6314C4.17068 13.9314 4.61417 14.1 5.0766 14.1H12.051C12.5134 14.1 12.9569 13.9314 13.2839 13.6314C13.6108 13.3313 13.7945 12.9243 13.7945 12.5V10.1C13.7945 9.88783 13.7027 9.68434 13.5392 9.53431C13.3757 9.38429 13.154 9.3 12.9228 9.3C12.6915 9.3 12.4698 9.38429 12.3063 9.53431C12.1428 9.68434 12.051 9.88783 12.051 10.1V12.5H5.0766V6.1H7.69198C7.9232 6.1 8.14494 6.01571 8.30843 5.86569C8.47193 5.71566 8.56378 5.51217 8.56378 5.3C8.56378 5.08783 8.47193 4.88434 8.30843 4.73431C8.14494 4.58429 7.9232 4.5 7.69198 4.5H5.0766Z" fill="#4169E1"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="justify-start items-end gap-2 inline-flex">
                        <div className="text-black text-xl font-medium tracking-wide">Shradha Kapoor</div>
                        <div className="w-7 h-7 py-px bg-white rounded-3xl border border-blue-600 justify-center items-center flex">
                            <div className="w-4 h-4 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3996 10.8999V4.4999C14.3996 4.07556 14.231 3.66859 13.931 3.36853C13.6309 3.06847 13.224 2.8999 12.7996 2.8999H3.19961C2.77526 2.8999 2.3683 3.06847 2.06824 3.36853C1.76818 3.66859 1.59961 4.07556 1.59961 4.4999V10.8999C1.59961 11.3242 1.76818 11.7312 2.06824 12.0313C2.3683 12.3313 2.77526 12.4999 3.19961 12.4999H5.59961L7.99961 14.8999L10.3996 12.4999H12.7996C13.224 12.4999 13.6309 12.3313 13.931 12.0313C14.231 11.7312 14.3996 11.3242 14.3996 10.8999ZM3.99961 6.0999C3.99961 5.88773 4.08389 5.68425 4.23392 5.53422C4.38395 5.38419 4.58744 5.2999 4.79961 5.2999H11.1996C11.4118 5.2999 11.6153 5.38419 11.7653 5.53422C11.9153 5.68425 11.9996 5.88773 11.9996 6.0999C11.9996 6.31208 11.9153 6.51556 11.7653 6.66559C11.6153 6.81562 11.4118 6.8999 11.1996 6.8999H4.79961C4.58744 6.8999 4.38395 6.81562 4.23392 6.66559C4.08389 6.51556 3.99961 6.31208 3.99961 6.0999ZM4.79961 8.4999C4.58744 8.4999 4.38395 8.58419 4.23392 8.73422C4.08389 8.88425 3.99961 9.08773 3.99961 9.2999C3.99961 9.51208 4.08389 9.71556 4.23392 9.86559C4.38395 10.0156 4.58744 10.0999 4.79961 10.0999H7.19961C7.41178 10.0999 7.61527 10.0156 7.76529 9.86559C7.91532 9.71556 7.99961 9.51208 7.99961 9.2999C7.99961 9.08773 7.91532 8.88425 7.76529 8.73422C7.61527 8.58419 7.41178 8.4999 7.19961 8.4999H4.79961Z" fill="#4169E1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-2xl border border-blue-600 justify-start items-center gap-1 inline-flex">
                        <div className="w-4 h-4 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M13.2812 7.3125C13.2812 5.96984 12.7775 4.68217 11.8809 3.73277C10.9842 2.78337 9.76807 2.25 8.5 2.25C7.23193 2.25 6.0158 2.78337 5.11915 3.73277C4.22249 4.68217 3.71875 5.96984 3.71875 7.3125C3.71875 9.38925 5.28806 12.096 8.5 15.3383C11.7119 12.096 13.2812 9.38925 13.2812 7.3125ZM8.5 16.875C4.60381 13.1254 2.65625 9.93713 2.65625 7.3125C2.65625 5.67147 3.27193 4.09766 4.36784 2.93728C5.46376 1.7769 6.95014 1.125 8.5 1.125C10.0499 1.125 11.5362 1.7769 12.6322 2.93728C13.7281 4.09766 14.3438 5.67147 14.3438 7.3125C14.3438 9.93713 12.3962 13.1254 8.5 16.875Z" fill="#4169E1"/>
                                <path d="M8.5 9C8.92269 9 9.32807 8.82221 9.62695 8.50574C9.92584 8.18928 10.0938 7.76005 10.0938 7.3125C10.0938 6.86495 9.92584 6.43572 9.62695 6.11926C9.32807 5.80279 8.92269 5.625 8.5 5.625C8.07731 5.625 7.67193 5.80279 7.37305 6.11926C7.07416 6.43572 6.90625 6.86495 6.90625 7.3125C6.90625 7.76005 7.07416 8.18928 7.37305 8.50574C7.67193 8.82221 8.07731 9 8.5 9ZM8.5 10.125C7.79552 10.125 7.11989 9.82868 6.62175 9.30124C6.1236 8.77379 5.84375 8.05842 5.84375 7.3125C5.84375 6.56658 6.1236 5.85121 6.62175 5.32376C7.11989 4.79632 7.79552 4.5 8.5 4.5C9.20448 4.5 9.88011 4.79632 10.3783 5.32376C10.8764 5.85121 11.1562 6.56658 11.1562 7.3125C11.1562 8.05842 10.8764 8.77379 10.3783 9.30124C9.88011 9.82868 9.20448 10.125 8.5 10.125Z" fill="#4169E1"/>
                            </svg>
                        </div>
                        <div className="text-blue-600 text-xs font-medium tracking-tight">London, Great Britain</div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="justify-start items-start gap-3.5 inline-flex">
                        <div className="rounded-full flex-col justify-center items-center gap-2 inline-flex">
                            <div className="px-3 py-2.5 bg-slate-500 bg-opacity-10 justify-center items-center gap-2 inline-flex rounded-full">
                                <div className="text-center text-black text-xs font-medium leading-tight tracking-tight rounded-full">Food Blogging</div>
                            </div>
                        </div>
                        <div className="rounded-full flex-col justify-center items-center gap-2 inline-flex">
                            <div className="px-3 py-2.5 bg-slate-500 bg-opacity-10 justify-center items-center gap-2 inline-flex rounded-full">
                                <div className="text-center text-black text-xs font-medium leading-tight tracking-tight rounded-full">Travel & Tourism</div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-7 inline-flex">
                        <div className="w-12 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">16K <br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Followers</span></div>
                        <div className="w-12 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">232<br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Posts</span></div>
                        <div className="w-16 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">1.34%<br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Engagement</span></div>
                    </div>
                </div>
            </div>

            <div className="w-[265px] h-[273px] mt-11 px-4 py-2 mr-11 bg-white rounded-md shadow flex-col justify-start items-start gap-5 inline-flex">
                <div className="justify-start items-center gap-3 inline-flex">
                    <img className="w-16 h-16 rounded-full" src="./../Images/Ellipse 9.png" />
                    <div className="p-2 bg-white rounded-lg border border-blue-600 justify-start items-start gap-2 flex">
                        <div className="w-3 h-3.5 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                                <path d="M2 11.25H10M2 3.75H10H2ZM2 7.5H6H2Z" stroke="#4169E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="text-blue-600 text-xs font-medium tracking-tight">Add to the list</div>
                    </div>
                    <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 left-0 top-0 absolute bg-slate-50 rounded-full" />
                        <div className="w-4 h-4 left-[8.72px] top-[8px] absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M10.3075 2.8999C10.0762 2.8999 9.8545 2.98419 9.69101 3.13422C9.52752 3.28425 9.43567 3.48773 9.43567 3.6999C9.43567 3.91208 9.52752 4.11556 9.69101 4.26559C9.8545 4.41562 10.0762 4.4999 10.3075 4.4999H12.5619L7.07572 9.5343C6.99245 9.6081 6.92604 9.69638 6.88035 9.79398C6.83466 9.89158 6.81061 9.99656 6.8096 10.1028C6.8086 10.209 6.83066 10.3143 6.87449 10.4127C6.91832 10.511 6.98306 10.6003 7.06491 10.6754C7.14677 10.7505 7.24411 10.8099 7.35125 10.8502C7.45839 10.8904 7.57318 10.9106 7.68894 10.9097C7.8047 10.9088 7.91909 10.8867 8.02546 10.8448C8.13182 10.8029 8.22802 10.7419 8.30844 10.6655L13.7946 5.6311V7.6999C13.7946 7.91208 13.8865 8.11556 14.05 8.26559C14.2135 8.41562 14.4352 8.4999 14.6664 8.4999C14.8976 8.4999 15.1194 8.41562 15.2829 8.26559C15.4464 8.11556 15.5382 7.91208 15.5382 7.6999V3.6999C15.5382 3.48773 15.4464 3.28425 15.2829 3.13422C15.1194 2.98419 14.8976 2.8999 14.6664 2.8999H10.3075Z" fill="#4169E1"/>
                                <path d="M5.0766 4.5C4.61417 4.5 4.17068 4.66857 3.84369 4.96863C3.51671 5.26869 3.33301 5.67565 3.33301 6.1V12.5C3.33301 12.9243 3.51671 13.3313 3.84369 13.6314C4.17068 13.9314 4.61417 14.1 5.0766 14.1H12.051C12.5134 14.1 12.9569 13.9314 13.2839 13.6314C13.6108 13.3313 13.7945 12.9243 13.7945 12.5V10.1C13.7945 9.88783 13.7027 9.68434 13.5392 9.53431C13.3757 9.38429 13.154 9.3 12.9228 9.3C12.6915 9.3 12.4698 9.38429 12.3063 9.53431C12.1428 9.68434 12.051 9.88783 12.051 10.1V12.5H5.0766V6.1H7.69198C7.9232 6.1 8.14494 6.01571 8.30843 5.86569C8.47193 5.71566 8.56378 5.51217 8.56378 5.3C8.56378 5.08783 8.47193 4.88434 8.30843 4.73431C8.14494 4.58429 7.9232 4.5 7.69198 4.5H5.0766Z" fill="#4169E1"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="justify-start items-end gap-2 inline-flex">
                        <div className="text-black text-xl font-medium tracking-wide">Shradha Kapoor</div>
                        <div className="w-7 h-7 py-px bg-white rounded-3xl border border-blue-600 justify-center items-center flex">
                            <div className="w-4 h-4 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3996 10.8999V4.4999C14.3996 4.07556 14.231 3.66859 13.931 3.36853C13.6309 3.06847 13.224 2.8999 12.7996 2.8999H3.19961C2.77526 2.8999 2.3683 3.06847 2.06824 3.36853C1.76818 3.66859 1.59961 4.07556 1.59961 4.4999V10.8999C1.59961 11.3242 1.76818 11.7312 2.06824 12.0313C2.3683 12.3313 2.77526 12.4999 3.19961 12.4999H5.59961L7.99961 14.8999L10.3996 12.4999H12.7996C13.224 12.4999 13.6309 12.3313 13.931 12.0313C14.231 11.7312 14.3996 11.3242 14.3996 10.8999ZM3.99961 6.0999C3.99961 5.88773 4.08389 5.68425 4.23392 5.53422C4.38395 5.38419 4.58744 5.2999 4.79961 5.2999H11.1996C11.4118 5.2999 11.6153 5.38419 11.7653 5.53422C11.9153 5.68425 11.9996 5.88773 11.9996 6.0999C11.9996 6.31208 11.9153 6.51556 11.7653 6.66559C11.6153 6.81562 11.4118 6.8999 11.1996 6.8999H4.79961C4.58744 6.8999 4.38395 6.81562 4.23392 6.66559C4.08389 6.51556 3.99961 6.31208 3.99961 6.0999ZM4.79961 8.4999C4.58744 8.4999 4.38395 8.58419 4.23392 8.73422C4.08389 8.88425 3.99961 9.08773 3.99961 9.2999C3.99961 9.51208 4.08389 9.71556 4.23392 9.86559C4.38395 10.0156 4.58744 10.0999 4.79961 10.0999H7.19961C7.41178 10.0999 7.61527 10.0156 7.76529 9.86559C7.91532 9.71556 7.99961 9.51208 7.99961 9.2999C7.99961 9.08773 7.91532 8.88425 7.76529 8.73422C7.61527 8.58419 7.41178 8.4999 7.19961 8.4999H4.79961Z" fill="#4169E1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-2xl border border-blue-600 justify-start items-center gap-1 inline-flex">
                        <div className="w-4 h-4 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M13.2812 7.3125C13.2812 5.96984 12.7775 4.68217 11.8809 3.73277C10.9842 2.78337 9.76807 2.25 8.5 2.25C7.23193 2.25 6.0158 2.78337 5.11915 3.73277C4.22249 4.68217 3.71875 5.96984 3.71875 7.3125C3.71875 9.38925 5.28806 12.096 8.5 15.3383C11.7119 12.096 13.2812 9.38925 13.2812 7.3125ZM8.5 16.875C4.60381 13.1254 2.65625 9.93713 2.65625 7.3125C2.65625 5.67147 3.27193 4.09766 4.36784 2.93728C5.46376 1.7769 6.95014 1.125 8.5 1.125C10.0499 1.125 11.5362 1.7769 12.6322 2.93728C13.7281 4.09766 14.3438 5.67147 14.3438 7.3125C14.3438 9.93713 12.3962 13.1254 8.5 16.875Z" fill="#4169E1"/>
                                <path d="M8.5 9C8.92269 9 9.32807 8.82221 9.62695 8.50574C9.92584 8.18928 10.0938 7.76005 10.0938 7.3125C10.0938 6.86495 9.92584 6.43572 9.62695 6.11926C9.32807 5.80279 8.92269 5.625 8.5 5.625C8.07731 5.625 7.67193 5.80279 7.37305 6.11926C7.07416 6.43572 6.90625 6.86495 6.90625 7.3125C6.90625 7.76005 7.07416 8.18928 7.37305 8.50574C7.67193 8.82221 8.07731 9 8.5 9ZM8.5 10.125C7.79552 10.125 7.11989 9.82868 6.62175 9.30124C6.1236 8.77379 5.84375 8.05842 5.84375 7.3125C5.84375 6.56658 6.1236 5.85121 6.62175 5.32376C7.11989 4.79632 7.79552 4.5 8.5 4.5C9.20448 4.5 9.88011 4.79632 10.3783 5.32376C10.8764 5.85121 11.1562 6.56658 11.1562 7.3125C11.1562 8.05842 10.8764 8.77379 10.3783 9.30124C9.88011 9.82868 9.20448 10.125 8.5 10.125Z" fill="#4169E1"/>
                            </svg>
                        </div>
                        <div className="text-blue-600 text-xs font-medium tracking-tight">London, Great Britain</div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="justify-start items-start gap-3.5 inline-flex">
                        <div className="rounded-full flex-col justify-center items-center gap-2 inline-flex">
                            <div className="px-3 py-2.5 bg-slate-500 bg-opacity-10 justify-center items-center gap-2 inline-flex rounded-full">
                                <div className="text-center text-black text-xs font-medium leading-tight tracking-tight rounded-full">Food Blogging</div>
                            </div>
                        </div>
                        <div className="rounded-full flex-col justify-center items-center gap-2 inline-flex">
                            <div className="px-3 py-2.5 bg-slate-500 bg-opacity-10 justify-center items-center gap-2 inline-flex rounded-full">
                                <div className="text-center text-black text-xs font-medium leading-tight tracking-tight rounded-full">Travel & Tourism</div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-7 inline-flex">
                        <div className="w-12 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">16K <br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Followers</span></div>
                        <div className="w-12 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">232<br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Posts</span></div>
                        <div className="w-16 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">1.34%<br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Engagement</span></div>
                    </div>
                </div>
            </div>

            <div className="w-[265px] h-[273px] mt-11 px-4 py-2 mr-11 bg-white rounded-md shadow flex-col justify-start items-start gap-5 inline-flex">
                <div className="justify-start items-center gap-3 inline-flex">
                    <img className="w-16 h-16 rounded-full" src="./../Images/Ellipse 9.png" />
                    <div className="p-2 bg-white rounded-lg border border-blue-600 justify-start items-start gap-2 flex">
                        <div className="w-3 h-3.5 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                                <path d="M2 11.25H10M2 3.75H10H2ZM2 7.5H6H2Z" stroke="#4169E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="text-blue-600 text-xs font-medium tracking-tight">Add to the list</div>
                    </div>
                    <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 left-0 top-0 absolute bg-slate-50 rounded-full" />
                        <div className="w-4 h-4 left-[8.72px] top-[8px] absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M10.3075 2.8999C10.0762 2.8999 9.8545 2.98419 9.69101 3.13422C9.52752 3.28425 9.43567 3.48773 9.43567 3.6999C9.43567 3.91208 9.52752 4.11556 9.69101 4.26559C9.8545 4.41562 10.0762 4.4999 10.3075 4.4999H12.5619L7.07572 9.5343C6.99245 9.6081 6.92604 9.69638 6.88035 9.79398C6.83466 9.89158 6.81061 9.99656 6.8096 10.1028C6.8086 10.209 6.83066 10.3143 6.87449 10.4127C6.91832 10.511 6.98306 10.6003 7.06491 10.6754C7.14677 10.7505 7.24411 10.8099 7.35125 10.8502C7.45839 10.8904 7.57318 10.9106 7.68894 10.9097C7.8047 10.9088 7.91909 10.8867 8.02546 10.8448C8.13182 10.8029 8.22802 10.7419 8.30844 10.6655L13.7946 5.6311V7.6999C13.7946 7.91208 13.8865 8.11556 14.05 8.26559C14.2135 8.41562 14.4352 8.4999 14.6664 8.4999C14.8976 8.4999 15.1194 8.41562 15.2829 8.26559C15.4464 8.11556 15.5382 7.91208 15.5382 7.6999V3.6999C15.5382 3.48773 15.4464 3.28425 15.2829 3.13422C15.1194 2.98419 14.8976 2.8999 14.6664 2.8999H10.3075Z" fill="#4169E1"/>
                                <path d="M5.0766 4.5C4.61417 4.5 4.17068 4.66857 3.84369 4.96863C3.51671 5.26869 3.33301 5.67565 3.33301 6.1V12.5C3.33301 12.9243 3.51671 13.3313 3.84369 13.6314C4.17068 13.9314 4.61417 14.1 5.0766 14.1H12.051C12.5134 14.1 12.9569 13.9314 13.2839 13.6314C13.6108 13.3313 13.7945 12.9243 13.7945 12.5V10.1C13.7945 9.88783 13.7027 9.68434 13.5392 9.53431C13.3757 9.38429 13.154 9.3 12.9228 9.3C12.6915 9.3 12.4698 9.38429 12.3063 9.53431C12.1428 9.68434 12.051 9.88783 12.051 10.1V12.5H5.0766V6.1H7.69198C7.9232 6.1 8.14494 6.01571 8.30843 5.86569C8.47193 5.71566 8.56378 5.51217 8.56378 5.3C8.56378 5.08783 8.47193 4.88434 8.30843 4.73431C8.14494 4.58429 7.9232 4.5 7.69198 4.5H5.0766Z" fill="#4169E1"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="justify-start items-end gap-2 inline-flex">
                        <div className="text-black text-xl font-medium tracking-wide">Shradha Kapoor</div>
                        <div className="w-7 h-7 py-px bg-white rounded-3xl border border-blue-600 justify-center items-center flex">
                            <div className="w-4 h-4 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3996 10.8999V4.4999C14.3996 4.07556 14.231 3.66859 13.931 3.36853C13.6309 3.06847 13.224 2.8999 12.7996 2.8999H3.19961C2.77526 2.8999 2.3683 3.06847 2.06824 3.36853C1.76818 3.66859 1.59961 4.07556 1.59961 4.4999V10.8999C1.59961 11.3242 1.76818 11.7312 2.06824 12.0313C2.3683 12.3313 2.77526 12.4999 3.19961 12.4999H5.59961L7.99961 14.8999L10.3996 12.4999H12.7996C13.224 12.4999 13.6309 12.3313 13.931 12.0313C14.231 11.7312 14.3996 11.3242 14.3996 10.8999ZM3.99961 6.0999C3.99961 5.88773 4.08389 5.68425 4.23392 5.53422C4.38395 5.38419 4.58744 5.2999 4.79961 5.2999H11.1996C11.4118 5.2999 11.6153 5.38419 11.7653 5.53422C11.9153 5.68425 11.9996 5.88773 11.9996 6.0999C11.9996 6.31208 11.9153 6.51556 11.7653 6.66559C11.6153 6.81562 11.4118 6.8999 11.1996 6.8999H4.79961C4.58744 6.8999 4.38395 6.81562 4.23392 6.66559C4.08389 6.51556 3.99961 6.31208 3.99961 6.0999ZM4.79961 8.4999C4.58744 8.4999 4.38395 8.58419 4.23392 8.73422C4.08389 8.88425 3.99961 9.08773 3.99961 9.2999C3.99961 9.51208 4.08389 9.71556 4.23392 9.86559C4.38395 10.0156 4.58744 10.0999 4.79961 10.0999H7.19961C7.41178 10.0999 7.61527 10.0156 7.76529 9.86559C7.91532 9.71556 7.99961 9.51208 7.99961 9.2999C7.99961 9.08773 7.91532 8.88425 7.76529 8.73422C7.61527 8.58419 7.41178 8.4999 7.19961 8.4999H4.79961Z" fill="#4169E1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-2xl border border-blue-600 justify-start items-center gap-1 inline-flex">
                        <div className="w-4 h-4 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M13.2812 7.3125C13.2812 5.96984 12.7775 4.68217 11.8809 3.73277C10.9842 2.78337 9.76807 2.25 8.5 2.25C7.23193 2.25 6.0158 2.78337 5.11915 3.73277C4.22249 4.68217 3.71875 5.96984 3.71875 7.3125C3.71875 9.38925 5.28806 12.096 8.5 15.3383C11.7119 12.096 13.2812 9.38925 13.2812 7.3125ZM8.5 16.875C4.60381 13.1254 2.65625 9.93713 2.65625 7.3125C2.65625 5.67147 3.27193 4.09766 4.36784 2.93728C5.46376 1.7769 6.95014 1.125 8.5 1.125C10.0499 1.125 11.5362 1.7769 12.6322 2.93728C13.7281 4.09766 14.3438 5.67147 14.3438 7.3125C14.3438 9.93713 12.3962 13.1254 8.5 16.875Z" fill="#4169E1"/>
                                <path d="M8.5 9C8.92269 9 9.32807 8.82221 9.62695 8.50574C9.92584 8.18928 10.0938 7.76005 10.0938 7.3125C10.0938 6.86495 9.92584 6.43572 9.62695 6.11926C9.32807 5.80279 8.92269 5.625 8.5 5.625C8.07731 5.625 7.67193 5.80279 7.37305 6.11926C7.07416 6.43572 6.90625 6.86495 6.90625 7.3125C6.90625 7.76005 7.07416 8.18928 7.37305 8.50574C7.67193 8.82221 8.07731 9 8.5 9ZM8.5 10.125C7.79552 10.125 7.11989 9.82868 6.62175 9.30124C6.1236 8.77379 5.84375 8.05842 5.84375 7.3125C5.84375 6.56658 6.1236 5.85121 6.62175 5.32376C7.11989 4.79632 7.79552 4.5 8.5 4.5C9.20448 4.5 9.88011 4.79632 10.3783 5.32376C10.8764 5.85121 11.1562 6.56658 11.1562 7.3125C11.1562 8.05842 10.8764 8.77379 10.3783 9.30124C9.88011 9.82868 9.20448 10.125 8.5 10.125Z" fill="#4169E1"/>
                            </svg>
                        </div>
                        <div className="text-blue-600 text-xs font-medium tracking-tight">London, Great Britain</div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="justify-start items-start gap-3.5 inline-flex">
                        <div className="rounded-full flex-col justify-center items-center gap-2 inline-flex">
                            <div className="px-3 py-2.5 bg-slate-500 bg-opacity-10 justify-center items-center gap-2 inline-flex rounded-full">
                                <div className="text-center text-black text-xs font-medium leading-tight tracking-tight rounded-full">Food Blogging</div>
                            </div>
                        </div>
                        <div className="rounded-full flex-col justify-center items-center gap-2 inline-flex">
                            <div className="px-3 py-2.5 bg-slate-500 bg-opacity-10 justify-center items-center gap-2 inline-flex rounded-full">
                                <div className="text-center text-black text-xs font-medium leading-tight tracking-tight rounded-full">Travel & Tourism</div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-7 inline-flex">
                        <div className="w-12 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">16K <br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Followers</span></div>
                        <div className="w-12 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">232<br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Posts</span></div>
                        <div className="w-16 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">1.34%<br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Engagement</span></div>
                    </div>
                </div>
            </div>

            <div className="w-[265px] h-[273px] mt-11 px-4 py-2 ml-4 bg-white rounded-md shadow flex-col justify-start items-start gap-5 inline-flex">
                <div className="justify-start items-center gap-3 inline-flex">
                    <img className="w-16 h-16 rounded-full" src="./../Images/Ellipse 9.png" />
                    <div className="p-2 bg-white rounded-lg border border-blue-600 justify-start items-start gap-2 flex">
                        <div className="w-3 h-3.5 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                                <path d="M2 11.25H10M2 3.75H10H2ZM2 7.5H6H2Z" stroke="#4169E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="text-blue-600 text-xs font-medium tracking-tight">Add to the list</div>
                    </div>
                    <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 left-0 top-0 absolute bg-slate-50 rounded-full" />
                        <div className="w-4 h-4 left-[8.72px] top-[8px] absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M10.3075 2.8999C10.0762 2.8999 9.8545 2.98419 9.69101 3.13422C9.52752 3.28425 9.43567 3.48773 9.43567 3.6999C9.43567 3.91208 9.52752 4.11556 9.69101 4.26559C9.8545 4.41562 10.0762 4.4999 10.3075 4.4999H12.5619L7.07572 9.5343C6.99245 9.6081 6.92604 9.69638 6.88035 9.79398C6.83466 9.89158 6.81061 9.99656 6.8096 10.1028C6.8086 10.209 6.83066 10.3143 6.87449 10.4127C6.91832 10.511 6.98306 10.6003 7.06491 10.6754C7.14677 10.7505 7.24411 10.8099 7.35125 10.8502C7.45839 10.8904 7.57318 10.9106 7.68894 10.9097C7.8047 10.9088 7.91909 10.8867 8.02546 10.8448C8.13182 10.8029 8.22802 10.7419 8.30844 10.6655L13.7946 5.6311V7.6999C13.7946 7.91208 13.8865 8.11556 14.05 8.26559C14.2135 8.41562 14.4352 8.4999 14.6664 8.4999C14.8976 8.4999 15.1194 8.41562 15.2829 8.26559C15.4464 8.11556 15.5382 7.91208 15.5382 7.6999V3.6999C15.5382 3.48773 15.4464 3.28425 15.2829 3.13422C15.1194 2.98419 14.8976 2.8999 14.6664 2.8999H10.3075Z" fill="#4169E1"/>
                                <path d="M5.0766 4.5C4.61417 4.5 4.17068 4.66857 3.84369 4.96863C3.51671 5.26869 3.33301 5.67565 3.33301 6.1V12.5C3.33301 12.9243 3.51671 13.3313 3.84369 13.6314C4.17068 13.9314 4.61417 14.1 5.0766 14.1H12.051C12.5134 14.1 12.9569 13.9314 13.2839 13.6314C13.6108 13.3313 13.7945 12.9243 13.7945 12.5V10.1C13.7945 9.88783 13.7027 9.68434 13.5392 9.53431C13.3757 9.38429 13.154 9.3 12.9228 9.3C12.6915 9.3 12.4698 9.38429 12.3063 9.53431C12.1428 9.68434 12.051 9.88783 12.051 10.1V12.5H5.0766V6.1H7.69198C7.9232 6.1 8.14494 6.01571 8.30843 5.86569C8.47193 5.71566 8.56378 5.51217 8.56378 5.3C8.56378 5.08783 8.47193 4.88434 8.30843 4.73431C8.14494 4.58429 7.9232 4.5 7.69198 4.5H5.0766Z" fill="#4169E1"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="justify-start items-end gap-2 inline-flex">
                        <div className="text-black text-xl font-medium tracking-wide">Shradha Kapoor</div>
                        <div className="w-7 h-7 py-px bg-white rounded-3xl border border-blue-600 justify-center items-center flex">
                            <div className="w-4 h-4 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3996 10.8999V4.4999C14.3996 4.07556 14.231 3.66859 13.931 3.36853C13.6309 3.06847 13.224 2.8999 12.7996 2.8999H3.19961C2.77526 2.8999 2.3683 3.06847 2.06824 3.36853C1.76818 3.66859 1.59961 4.07556 1.59961 4.4999V10.8999C1.59961 11.3242 1.76818 11.7312 2.06824 12.0313C2.3683 12.3313 2.77526 12.4999 3.19961 12.4999H5.59961L7.99961 14.8999L10.3996 12.4999H12.7996C13.224 12.4999 13.6309 12.3313 13.931 12.0313C14.231 11.7312 14.3996 11.3242 14.3996 10.8999ZM3.99961 6.0999C3.99961 5.88773 4.08389 5.68425 4.23392 5.53422C4.38395 5.38419 4.58744 5.2999 4.79961 5.2999H11.1996C11.4118 5.2999 11.6153 5.38419 11.7653 5.53422C11.9153 5.68425 11.9996 5.88773 11.9996 6.0999C11.9996 6.31208 11.9153 6.51556 11.7653 6.66559C11.6153 6.81562 11.4118 6.8999 11.1996 6.8999H4.79961C4.58744 6.8999 4.38395 6.81562 4.23392 6.66559C4.08389 6.51556 3.99961 6.31208 3.99961 6.0999ZM4.79961 8.4999C4.58744 8.4999 4.38395 8.58419 4.23392 8.73422C4.08389 8.88425 3.99961 9.08773 3.99961 9.2999C3.99961 9.51208 4.08389 9.71556 4.23392 9.86559C4.38395 10.0156 4.58744 10.0999 4.79961 10.0999H7.19961C7.41178 10.0999 7.61527 10.0156 7.76529 9.86559C7.91532 9.71556 7.99961 9.51208 7.99961 9.2999C7.99961 9.08773 7.91532 8.88425 7.76529 8.73422C7.61527 8.58419 7.41178 8.4999 7.19961 8.4999H4.79961Z" fill="#4169E1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-2xl border border-blue-600 justify-start items-center gap-1 inline-flex">
                        <div className="w-4 h-4 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M13.2812 7.3125C13.2812 5.96984 12.7775 4.68217 11.8809 3.73277C10.9842 2.78337 9.76807 2.25 8.5 2.25C7.23193 2.25 6.0158 2.78337 5.11915 3.73277C4.22249 4.68217 3.71875 5.96984 3.71875 7.3125C3.71875 9.38925 5.28806 12.096 8.5 15.3383C11.7119 12.096 13.2812 9.38925 13.2812 7.3125ZM8.5 16.875C4.60381 13.1254 2.65625 9.93713 2.65625 7.3125C2.65625 5.67147 3.27193 4.09766 4.36784 2.93728C5.46376 1.7769 6.95014 1.125 8.5 1.125C10.0499 1.125 11.5362 1.7769 12.6322 2.93728C13.7281 4.09766 14.3438 5.67147 14.3438 7.3125C14.3438 9.93713 12.3962 13.1254 8.5 16.875Z" fill="#4169E1"/>
                                <path d="M8.5 9C8.92269 9 9.32807 8.82221 9.62695 8.50574C9.92584 8.18928 10.0938 7.76005 10.0938 7.3125C10.0938 6.86495 9.92584 6.43572 9.62695 6.11926C9.32807 5.80279 8.92269 5.625 8.5 5.625C8.07731 5.625 7.67193 5.80279 7.37305 6.11926C7.07416 6.43572 6.90625 6.86495 6.90625 7.3125C6.90625 7.76005 7.07416 8.18928 7.37305 8.50574C7.67193 8.82221 8.07731 9 8.5 9ZM8.5 10.125C7.79552 10.125 7.11989 9.82868 6.62175 9.30124C6.1236 8.77379 5.84375 8.05842 5.84375 7.3125C5.84375 6.56658 6.1236 5.85121 6.62175 5.32376C7.11989 4.79632 7.79552 4.5 8.5 4.5C9.20448 4.5 9.88011 4.79632 10.3783 5.32376C10.8764 5.85121 11.1562 6.56658 11.1562 7.3125C11.1562 8.05842 10.8764 8.77379 10.3783 9.30124C9.88011 9.82868 9.20448 10.125 8.5 10.125Z" fill="#4169E1"/>
                            </svg>
                        </div>
                        <div className="text-blue-600 text-xs font-medium tracking-tight">London, Great Britain</div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="justify-start items-start gap-3.5 inline-flex">
                        <div className="rounded-full flex-col justify-center items-center gap-2 inline-flex">
                            <div className="px-3 py-2.5 bg-slate-500 bg-opacity-10 justify-center items-center gap-2 inline-flex rounded-full">
                                <div className="text-center text-black text-xs font-medium leading-tight tracking-tight rounded-full">Food Blogging</div>
                            </div>
                        </div>
                        <div className="rounded-full flex-col justify-center items-center gap-2 inline-flex">
                            <div className="px-3 py-2.5 bg-slate-500 bg-opacity-10 justify-center items-center gap-2 inline-flex rounded-full">
                                <div className="text-center text-black text-xs font-medium leading-tight tracking-tight rounded-full">Travel & Tourism</div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-7 inline-flex">
                        <div className="w-12 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">16K <br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Followers</span></div>
                        <div className="w-12 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">232<br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Posts</span></div>
                        <div className="w-16 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">1.34%<br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Engagement</span></div>
                    </div>
                </div>
            </div>
            

            <div className="w-[265px] h-[273px] mt-11 px-4 py-2 mr-11 bg-white rounded-md shadow flex-col justify-start items-start gap-5 inline-flex">
                <div className="justify-start items-center gap-3 inline-flex">
                    <img className="w-16 h-16 rounded-full" src="./../Images/Ellipse 9.png" />
                    <div className="p-2 bg-white rounded-lg border border-blue-600 justify-start items-start gap-2 flex">
                        <div className="w-3 h-3.5 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                                <path d="M2 11.25H10M2 3.75H10H2ZM2 7.5H6H2Z" stroke="#4169E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="text-blue-600 text-xs font-medium tracking-tight">Add to the list</div>
                    </div>
                    <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 left-0 top-0 absolute bg-slate-50 rounded-full" />
                        <div className="w-4 h-4 left-[8.72px] top-[8px] absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M10.3075 2.8999C10.0762 2.8999 9.8545 2.98419 9.69101 3.13422C9.52752 3.28425 9.43567 3.48773 9.43567 3.6999C9.43567 3.91208 9.52752 4.11556 9.69101 4.26559C9.8545 4.41562 10.0762 4.4999 10.3075 4.4999H12.5619L7.07572 9.5343C6.99245 9.6081 6.92604 9.69638 6.88035 9.79398C6.83466 9.89158 6.81061 9.99656 6.8096 10.1028C6.8086 10.209 6.83066 10.3143 6.87449 10.4127C6.91832 10.511 6.98306 10.6003 7.06491 10.6754C7.14677 10.7505 7.24411 10.8099 7.35125 10.8502C7.45839 10.8904 7.57318 10.9106 7.68894 10.9097C7.8047 10.9088 7.91909 10.8867 8.02546 10.8448C8.13182 10.8029 8.22802 10.7419 8.30844 10.6655L13.7946 5.6311V7.6999C13.7946 7.91208 13.8865 8.11556 14.05 8.26559C14.2135 8.41562 14.4352 8.4999 14.6664 8.4999C14.8976 8.4999 15.1194 8.41562 15.2829 8.26559C15.4464 8.11556 15.5382 7.91208 15.5382 7.6999V3.6999C15.5382 3.48773 15.4464 3.28425 15.2829 3.13422C15.1194 2.98419 14.8976 2.8999 14.6664 2.8999H10.3075Z" fill="#4169E1"/>
                                <path d="M5.0766 4.5C4.61417 4.5 4.17068 4.66857 3.84369 4.96863C3.51671 5.26869 3.33301 5.67565 3.33301 6.1V12.5C3.33301 12.9243 3.51671 13.3313 3.84369 13.6314C4.17068 13.9314 4.61417 14.1 5.0766 14.1H12.051C12.5134 14.1 12.9569 13.9314 13.2839 13.6314C13.6108 13.3313 13.7945 12.9243 13.7945 12.5V10.1C13.7945 9.88783 13.7027 9.68434 13.5392 9.53431C13.3757 9.38429 13.154 9.3 12.9228 9.3C12.6915 9.3 12.4698 9.38429 12.3063 9.53431C12.1428 9.68434 12.051 9.88783 12.051 10.1V12.5H5.0766V6.1H7.69198C7.9232 6.1 8.14494 6.01571 8.30843 5.86569C8.47193 5.71566 8.56378 5.51217 8.56378 5.3C8.56378 5.08783 8.47193 4.88434 8.30843 4.73431C8.14494 4.58429 7.9232 4.5 7.69198 4.5H5.0766Z" fill="#4169E1"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="justify-start items-end gap-2 inline-flex">
                        <div className="text-black text-xl font-medium tracking-wide">Shradha Kapoor</div>
                        <div className="w-7 h-7 py-px bg-white rounded-3xl border border-blue-600 justify-center items-center flex">
                            <div className="w-4 h-4 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3996 10.8999V4.4999C14.3996 4.07556 14.231 3.66859 13.931 3.36853C13.6309 3.06847 13.224 2.8999 12.7996 2.8999H3.19961C2.77526 2.8999 2.3683 3.06847 2.06824 3.36853C1.76818 3.66859 1.59961 4.07556 1.59961 4.4999V10.8999C1.59961 11.3242 1.76818 11.7312 2.06824 12.0313C2.3683 12.3313 2.77526 12.4999 3.19961 12.4999H5.59961L7.99961 14.8999L10.3996 12.4999H12.7996C13.224 12.4999 13.6309 12.3313 13.931 12.0313C14.231 11.7312 14.3996 11.3242 14.3996 10.8999ZM3.99961 6.0999C3.99961 5.88773 4.08389 5.68425 4.23392 5.53422C4.38395 5.38419 4.58744 5.2999 4.79961 5.2999H11.1996C11.4118 5.2999 11.6153 5.38419 11.7653 5.53422C11.9153 5.68425 11.9996 5.88773 11.9996 6.0999C11.9996 6.31208 11.9153 6.51556 11.7653 6.66559C11.6153 6.81562 11.4118 6.8999 11.1996 6.8999H4.79961C4.58744 6.8999 4.38395 6.81562 4.23392 6.66559C4.08389 6.51556 3.99961 6.31208 3.99961 6.0999ZM4.79961 8.4999C4.58744 8.4999 4.38395 8.58419 4.23392 8.73422C4.08389 8.88425 3.99961 9.08773 3.99961 9.2999C3.99961 9.51208 4.08389 9.71556 4.23392 9.86559C4.38395 10.0156 4.58744 10.0999 4.79961 10.0999H7.19961C7.41178 10.0999 7.61527 10.0156 7.76529 9.86559C7.91532 9.71556 7.99961 9.51208 7.99961 9.2999C7.99961 9.08773 7.91532 8.88425 7.76529 8.73422C7.61527 8.58419 7.41178 8.4999 7.19961 8.4999H4.79961Z" fill="#4169E1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-2xl border border-blue-600 justify-start items-center gap-1 inline-flex">
                        <div className="w-4 h-4 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M13.2812 7.3125C13.2812 5.96984 12.7775 4.68217 11.8809 3.73277C10.9842 2.78337 9.76807 2.25 8.5 2.25C7.23193 2.25 6.0158 2.78337 5.11915 3.73277C4.22249 4.68217 3.71875 5.96984 3.71875 7.3125C3.71875 9.38925 5.28806 12.096 8.5 15.3383C11.7119 12.096 13.2812 9.38925 13.2812 7.3125ZM8.5 16.875C4.60381 13.1254 2.65625 9.93713 2.65625 7.3125C2.65625 5.67147 3.27193 4.09766 4.36784 2.93728C5.46376 1.7769 6.95014 1.125 8.5 1.125C10.0499 1.125 11.5362 1.7769 12.6322 2.93728C13.7281 4.09766 14.3438 5.67147 14.3438 7.3125C14.3438 9.93713 12.3962 13.1254 8.5 16.875Z" fill="#4169E1"/>
                                <path d="M8.5 9C8.92269 9 9.32807 8.82221 9.62695 8.50574C9.92584 8.18928 10.0938 7.76005 10.0938 7.3125C10.0938 6.86495 9.92584 6.43572 9.62695 6.11926C9.32807 5.80279 8.92269 5.625 8.5 5.625C8.07731 5.625 7.67193 5.80279 7.37305 6.11926C7.07416 6.43572 6.90625 6.86495 6.90625 7.3125C6.90625 7.76005 7.07416 8.18928 7.37305 8.50574C7.67193 8.82221 8.07731 9 8.5 9ZM8.5 10.125C7.79552 10.125 7.11989 9.82868 6.62175 9.30124C6.1236 8.77379 5.84375 8.05842 5.84375 7.3125C5.84375 6.56658 6.1236 5.85121 6.62175 5.32376C7.11989 4.79632 7.79552 4.5 8.5 4.5C9.20448 4.5 9.88011 4.79632 10.3783 5.32376C10.8764 5.85121 11.1562 6.56658 11.1562 7.3125C11.1562 8.05842 10.8764 8.77379 10.3783 9.30124C9.88011 9.82868 9.20448 10.125 8.5 10.125Z" fill="#4169E1"/>
                            </svg>
                        </div>
                        <div className="text-blue-600 text-xs font-medium tracking-tight">London, Great Britain</div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="justify-start items-start gap-3.5 inline-flex">
                        <div className="rounded-full flex-col justify-center items-center gap-2 inline-flex">
                            <div className="px-3 py-2.5 bg-slate-500 bg-opacity-10 justify-center items-center gap-2 inline-flex rounded-full">
                                <div className="text-center text-black text-xs font-medium leading-tight tracking-tight rounded-full">Food Blogging</div>
                            </div>
                        </div>
                        <div className="rounded-full flex-col justify-center items-center gap-2 inline-flex">
                            <div className="px-3 py-2.5 bg-slate-500 bg-opacity-10 justify-center items-center gap-2 inline-flex rounded-full">
                                <div className="text-center text-black text-xs font-medium leading-tight tracking-tight rounded-full">Travel & Tourism</div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-7 inline-flex">
                        <div className="w-12 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">16K <br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Followers</span></div>
                        <div className="w-12 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">232<br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Posts</span></div>
                        <div className="w-16 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">1.34%<br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Engagement</span></div>
                    </div>
                </div>
            </div>

            
            <div className="w-[265px] h-[273px] mt-11 px-4 py-2 mr-11 bg-white rounded-md shadow flex-col justify-start items-start gap-5 inline-flex">
                <div className="justify-start items-center gap-3 inline-flex">
                    <img className="w-16 h-16 rounded-full" src="./../Images/Ellipse 9.png" />
                    <div className="p-2 bg-white rounded-lg border border-blue-600 justify-start items-start gap-2 flex">
                        <div className="w-3 h-3.5 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                                <path d="M2 11.25H10M2 3.75H10H2ZM2 7.5H6H2Z" stroke="#4169E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="text-blue-600 text-xs font-medium tracking-tight">Add to the list</div>
                    </div>
                    <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 left-0 top-0 absolute bg-slate-50 rounded-full" />
                        <div className="w-4 h-4 left-[8.72px] top-[8px] absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M10.3075 2.8999C10.0762 2.8999 9.8545 2.98419 9.69101 3.13422C9.52752 3.28425 9.43567 3.48773 9.43567 3.6999C9.43567 3.91208 9.52752 4.11556 9.69101 4.26559C9.8545 4.41562 10.0762 4.4999 10.3075 4.4999H12.5619L7.07572 9.5343C6.99245 9.6081 6.92604 9.69638 6.88035 9.79398C6.83466 9.89158 6.81061 9.99656 6.8096 10.1028C6.8086 10.209 6.83066 10.3143 6.87449 10.4127C6.91832 10.511 6.98306 10.6003 7.06491 10.6754C7.14677 10.7505 7.24411 10.8099 7.35125 10.8502C7.45839 10.8904 7.57318 10.9106 7.68894 10.9097C7.8047 10.9088 7.91909 10.8867 8.02546 10.8448C8.13182 10.8029 8.22802 10.7419 8.30844 10.6655L13.7946 5.6311V7.6999C13.7946 7.91208 13.8865 8.11556 14.05 8.26559C14.2135 8.41562 14.4352 8.4999 14.6664 8.4999C14.8976 8.4999 15.1194 8.41562 15.2829 8.26559C15.4464 8.11556 15.5382 7.91208 15.5382 7.6999V3.6999C15.5382 3.48773 15.4464 3.28425 15.2829 3.13422C15.1194 2.98419 14.8976 2.8999 14.6664 2.8999H10.3075Z" fill="#4169E1"/>
                                <path d="M5.0766 4.5C4.61417 4.5 4.17068 4.66857 3.84369 4.96863C3.51671 5.26869 3.33301 5.67565 3.33301 6.1V12.5C3.33301 12.9243 3.51671 13.3313 3.84369 13.6314C4.17068 13.9314 4.61417 14.1 5.0766 14.1H12.051C12.5134 14.1 12.9569 13.9314 13.2839 13.6314C13.6108 13.3313 13.7945 12.9243 13.7945 12.5V10.1C13.7945 9.88783 13.7027 9.68434 13.5392 9.53431C13.3757 9.38429 13.154 9.3 12.9228 9.3C12.6915 9.3 12.4698 9.38429 12.3063 9.53431C12.1428 9.68434 12.051 9.88783 12.051 10.1V12.5H5.0766V6.1H7.69198C7.9232 6.1 8.14494 6.01571 8.30843 5.86569C8.47193 5.71566 8.56378 5.51217 8.56378 5.3C8.56378 5.08783 8.47193 4.88434 8.30843 4.73431C8.14494 4.58429 7.9232 4.5 7.69198 4.5H5.0766Z" fill="#4169E1"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="justify-start items-end gap-2 inline-flex">
                        <div className="text-black text-xl font-medium tracking-wide">Shradha Kapoor</div>
                        <div className="w-7 h-7 py-px bg-white rounded-3xl border border-blue-600 justify-center items-center flex">
                            <div className="w-4 h-4 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3996 10.8999V4.4999C14.3996 4.07556 14.231 3.66859 13.931 3.36853C13.6309 3.06847 13.224 2.8999 12.7996 2.8999H3.19961C2.77526 2.8999 2.3683 3.06847 2.06824 3.36853C1.76818 3.66859 1.59961 4.07556 1.59961 4.4999V10.8999C1.59961 11.3242 1.76818 11.7312 2.06824 12.0313C2.3683 12.3313 2.77526 12.4999 3.19961 12.4999H5.59961L7.99961 14.8999L10.3996 12.4999H12.7996C13.224 12.4999 13.6309 12.3313 13.931 12.0313C14.231 11.7312 14.3996 11.3242 14.3996 10.8999ZM3.99961 6.0999C3.99961 5.88773 4.08389 5.68425 4.23392 5.53422C4.38395 5.38419 4.58744 5.2999 4.79961 5.2999H11.1996C11.4118 5.2999 11.6153 5.38419 11.7653 5.53422C11.9153 5.68425 11.9996 5.88773 11.9996 6.0999C11.9996 6.31208 11.9153 6.51556 11.7653 6.66559C11.6153 6.81562 11.4118 6.8999 11.1996 6.8999H4.79961C4.58744 6.8999 4.38395 6.81562 4.23392 6.66559C4.08389 6.51556 3.99961 6.31208 3.99961 6.0999ZM4.79961 8.4999C4.58744 8.4999 4.38395 8.58419 4.23392 8.73422C4.08389 8.88425 3.99961 9.08773 3.99961 9.2999C3.99961 9.51208 4.08389 9.71556 4.23392 9.86559C4.38395 10.0156 4.58744 10.0999 4.79961 10.0999H7.19961C7.41178 10.0999 7.61527 10.0156 7.76529 9.86559C7.91532 9.71556 7.99961 9.51208 7.99961 9.2999C7.99961 9.08773 7.91532 8.88425 7.76529 8.73422C7.61527 8.58419 7.41178 8.4999 7.19961 8.4999H4.79961Z" fill="#4169E1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-2xl border border-blue-600 justify-start items-center gap-1 inline-flex">
                        <div className="w-4 h-4 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M13.2812 7.3125C13.2812 5.96984 12.7775 4.68217 11.8809 3.73277C10.9842 2.78337 9.76807 2.25 8.5 2.25C7.23193 2.25 6.0158 2.78337 5.11915 3.73277C4.22249 4.68217 3.71875 5.96984 3.71875 7.3125C3.71875 9.38925 5.28806 12.096 8.5 15.3383C11.7119 12.096 13.2812 9.38925 13.2812 7.3125ZM8.5 16.875C4.60381 13.1254 2.65625 9.93713 2.65625 7.3125C2.65625 5.67147 3.27193 4.09766 4.36784 2.93728C5.46376 1.7769 6.95014 1.125 8.5 1.125C10.0499 1.125 11.5362 1.7769 12.6322 2.93728C13.7281 4.09766 14.3438 5.67147 14.3438 7.3125C14.3438 9.93713 12.3962 13.1254 8.5 16.875Z" fill="#4169E1"/>
                                <path d="M8.5 9C8.92269 9 9.32807 8.82221 9.62695 8.50574C9.92584 8.18928 10.0938 7.76005 10.0938 7.3125C10.0938 6.86495 9.92584 6.43572 9.62695 6.11926C9.32807 5.80279 8.92269 5.625 8.5 5.625C8.07731 5.625 7.67193 5.80279 7.37305 6.11926C7.07416 6.43572 6.90625 6.86495 6.90625 7.3125C6.90625 7.76005 7.07416 8.18928 7.37305 8.50574C7.67193 8.82221 8.07731 9 8.5 9ZM8.5 10.125C7.79552 10.125 7.11989 9.82868 6.62175 9.30124C6.1236 8.77379 5.84375 8.05842 5.84375 7.3125C5.84375 6.56658 6.1236 5.85121 6.62175 5.32376C7.11989 4.79632 7.79552 4.5 8.5 4.5C9.20448 4.5 9.88011 4.79632 10.3783 5.32376C10.8764 5.85121 11.1562 6.56658 11.1562 7.3125C11.1562 8.05842 10.8764 8.77379 10.3783 9.30124C9.88011 9.82868 9.20448 10.125 8.5 10.125Z" fill="#4169E1"/>
                            </svg>
                        </div>
                        <div className="text-blue-600 text-xs font-medium tracking-tight">London, Great Britain</div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="justify-start items-start gap-3.5 inline-flex">
                        <div className="rounded-full flex-col justify-center items-center gap-2 inline-flex">
                            <div className="px-3 py-2.5 bg-slate-500 bg-opacity-10 justify-center items-center gap-2 inline-flex rounded-full">
                                <div className="text-center text-black text-xs font-medium leading-tight tracking-tight rounded-full">Food Blogging</div>
                            </div>
                        </div>
                        <div className="rounded-full flex-col justify-center items-center gap-2 inline-flex">
                            <div className="px-3 py-2.5 bg-slate-500 bg-opacity-10 justify-center items-center gap-2 inline-flex rounded-full">
                                <div className="text-center text-black text-xs font-medium leading-tight tracking-tight rounded-full">Travel & Tourism</div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-7 inline-flex">
                        <div className="w-12 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">16K <br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Followers</span></div>
                        <div className="w-12 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">232<br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Posts</span></div>
                        <div className="w-16 h-10"><span className="text-black text-xl font-medium leading-tight tracking-tight">1.34%<br/></span><span className="text-neutral-600 text-xs font-medium leading-tight">Engagement</span></div>
                    </div>
                </div>
            </div>

            
            </div>
        </div>
    </>

    )
}

export default InfuencerHomeScreen