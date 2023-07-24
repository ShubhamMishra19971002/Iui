import React from 'react'
import Sidebar from './Sidebar'

const Profile2=()=> {
  return (
    <>
        <Sidebar/>
        <div className="pt-0 sm:ml-[228px]">
            <div>
                <div className="mb-[3%]">
                    <h3 className="text-black text-xl font-medium" >Influencer Profile</h3>
                    <div className="w-16 h-2 bg-blue-500" />

                </div>

                <div className="flex">
                    <div className="flex">
                        <img className="w-[120px] h-[120px]" src="./../Images/Ellipse 9.png" alt="" />
                    </div>
                    <div className="ml-5">
                        <div className="flex items-center">
                                <div className=" text-2xl font-medium tracking-wide text-black">Shradha Kapoor</div>
                                <div className="w-6 h-6 relative ml-[17px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z" fill="#4169E1"/>
                                </svg>
                            </div>
                        </div>
                    <div className=" pt-1">
                        <div  className=" justify-between">
                            <button className=" text-blue-500 border border-hidden bg-slate-500 bg-opacity-10 py-[10px] px-[12px] rounded-3xl">Food Blogging</button>
                            <button className=" text-blue-500 border border-hidden bg-slate-500 bg-opacity-10 py-[10px] px-[12px] ml-[15px] rounded-3xl">Travel & Tourism</button>
                        </div>
                    </div>

                    <div className=" pt-3">
                        <div  className=" flex">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3C10.2098 3 8.4929 3.71116 7.22703 4.97703C5.96116 6.2429 5.25 7.95979 5.25 9.75C5.25 12.519 7.4655 16.128 12 20.451C16.5345 16.128 18.75 12.519 18.75 9.75ZM12 22.5C6.4995 17.5005 3.75 13.2495 3.75 9.75C3.75 7.56196 4.61919 5.46354 6.16637 3.91637C7.71354 2.36919 9.81196 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.25 13.2495 17.5005 17.5005 12 22.5Z" fill="#545454"/>
                            <path d="M12 12C12.5967 12 13.169 11.7629 13.591 11.341C14.0129 10.919 14.25 10.3467 14.25 9.75C14.25 9.15326 14.0129 8.58097 13.591 8.15901C13.169 7.73705 12.5967 7.5 12 7.5C11.4033 7.5 10.831 7.73705 10.409 8.15901C9.98705 8.58097 9.75 9.15326 9.75 9.75C9.75 10.3467 9.98705 10.919 10.409 11.341C10.831 11.7629 11.4033 12 12 12ZM12 13.5C11.0054 13.5 10.0516 13.1049 9.34835 12.4017C8.64509 11.6984 8.25 10.7446 8.25 9.75C8.25 8.75544 8.64509 7.80161 9.34835 7.09835C10.0516 6.39509 11.0054 6 12 6C12.9946 6 13.9484 6.39509 14.6517 7.09835C15.3549 7.80161 15.75 8.75544 15.75 9.75C15.75 10.7446 15.3549 11.6984 14.6517 12.4017C13.9484 13.1049 12.9946 13.5 12 13.5Z" fill="#545454"/>
                            </svg></div>

                            <div className="ml-3">London, Great Britain</div>
                        </div>
                    </div>
               
                    </div>

                    <div className=" left-12 flex ml-60 mt-7 gap-4">
                        <button type="button" className="inline-flex items-center p-2 w-[161px] h-[40px] text-[16px] text-white bg-blue-500 relative rounded-lg border">
                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4 18H20M4 6H20H4ZM4 12H12H4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Add to the list
                        </button>

                        <button type="button" className="inline-flex items-center p-2 w-[118px] h-[40px] text-[16px] text-white bg-blue-500 relative rounded-lg border">
                            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 13V5C18 4.46957 17.7893 3.96086 17.4142 3.58579C17.0391 3.21071 16.5304 3 16 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V13C2 13.5304 2.21071 14.0391 2.58579 14.4142C2.96086 14.7893 3.46957 15 4 15H7L10 18L13 15H16C16.5304 15 17.0391 14.7893 17.4142 14.4142C17.7893 14.0391 18 13.5304 18 13ZM5 7C5 6.73478 5.10536 6.48043 5.29289 6.29289C5.48043 6.10536 5.73478 6 6 6H14C14.2652 6 14.5196 6.10536 14.7071 6.29289C14.8946 6.48043 15 6.73478 15 7C15 7.26522 14.8946 7.51957 14.7071 7.70711C14.5196 7.89464 14.2652 8 14 8H6C5.73478 8 5.48043 7.89464 5.29289 7.70711C5.10536 7.51957 5 7.26522 5 7ZM6 10C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11C5 11.2652 5.10536 11.5196 5.29289 11.7071C5.48043 11.8946 5.73478 12 6 12H9C9.26522 12 9.51957 11.8946 9.70711 11.7071C9.89464 11.5196 10 11.2652 10 11C10 10.7348 9.89464 10.4804 9.70711 10.2929C9.51957 10.1054 9.26522 10 9 10H6Z" fill="white"/>
                            </svg>
                            Message
                        </button>

                    </div>
                </div>
                <div className="w-96 h-80 mt-11 flex-col justify-start items-start gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="text-black text-xl font-semibold tracking-tight">Social Profiles & Reach</div>
                        <div className="justify-start items-center gap-6 inline-flex">
                            <div className="p-2 bg-blue-600 rounded-xl border justify-start items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                    <div className="w-4 h-4 left-0 top-0 absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_459_42403)">
                                            <path d="M12.25 0.258301H3.75C1.67893 0.258301 0 1.88307 0 3.88733V12.1131C0 14.1174 1.67893 15.7422 3.75 15.7422H12.25C14.3211 15.7422 16 14.1174 16 12.1131V3.88733C16 1.88307 14.3211 0.258301 12.25 0.258301Z" fill="url(#paint0_radial_459_42403)"/>
                                            <path d="M12.25 0.258301H3.75C1.67893 0.258301 0 1.88307 0 3.88733V12.1131C0 14.1174 1.67893 15.7422 3.75 15.7422H12.25C14.3211 15.7422 16 14.1174 16 12.1131V3.88733C16 1.88307 14.3211 0.258301 12.25 0.258301Z" fill="url(#paint1_radial_459_42403)"/>
                                            <path d="M8.00056 1.95166C6.30319 1.95166 6.09013 1.95886 5.4235 1.98819C4.75813 2.01771 4.30394 2.11962 3.90656 2.2692C3.49544 2.42368 3.14675 2.63035 2.79938 2.96664C2.45169 3.30287 2.23813 3.64031 2.078 4.03799C1.923 4.42267 1.81756 4.86239 1.78762 5.50599C1.75781 6.15118 1.75 6.35743 1.75 8.00011C1.75 9.64279 1.7575 9.84831 1.78775 10.4934C1.81838 11.1373 1.92369 11.5769 2.07812 11.9614C2.23787 12.3593 2.45144 12.6967 2.79894 13.0329C3.14625 13.3694 3.49494 13.5765 3.90575 13.731C4.30344 13.8806 4.75769 13.9825 5.42294 14.012C6.08962 14.0414 6.3025 14.0486 7.99981 14.0486C9.69738 14.0486 9.90975 14.0414 10.5764 14.012C11.2417 13.9825 11.6964 13.8806 12.0941 13.731C12.5051 13.5765 12.8532 13.3694 13.2005 13.0329C13.5482 12.6967 13.7617 12.3593 13.9219 11.9616C14.0755 11.5769 14.181 11.1372 14.2122 10.4936C14.2422 9.84843 14.25 9.64279 14.25 8.00011C14.25 6.35743 14.2422 6.1513 14.2122 5.50612C14.181 4.8622 14.0755 4.42273 13.9219 4.03817C13.7617 3.64031 13.5482 3.30287 13.2005 2.96664C12.8529 2.63023 12.5052 2.42356 12.0938 2.26926C11.6953 2.11962 11.2409 2.01765 10.5755 1.98819C9.90881 1.95886 9.69656 1.95166 7.99862 1.95166H8.00056ZM7.43988 3.04164C7.60631 3.0414 7.792 3.04164 8.00056 3.04164C9.66938 3.04164 9.86712 3.04745 10.5261 3.07642C11.1355 3.10339 11.4663 3.20192 11.6866 3.28472C11.9783 3.39432 12.1862 3.52539 12.4048 3.73714C12.6236 3.94884 12.7589 4.15043 12.8725 4.43271C12.9581 4.64561 13.06 4.96569 13.0878 5.55541C13.1177 6.19303 13.1242 6.38452 13.1242 7.99872C13.1242 9.61291 13.1177 9.80446 13.0878 10.442C13.0599 11.0317 12.9581 11.3518 12.8725 11.5648C12.7593 11.8471 12.6236 12.0481 12.4048 12.2596C12.1861 12.4713 11.9784 12.6023 11.6866 12.712C11.4665 12.7951 11.1355 12.8934 10.5261 12.9204C9.86725 12.9494 9.66938 12.9557 8.00056 12.9557C6.33169 12.9557 6.13387 12.9494 5.47506 12.9204C4.86569 12.8932 4.53494 12.7947 4.31444 12.7119C4.02281 12.6022 3.81444 12.4712 3.59569 12.2595C3.37694 12.0478 3.24156 11.8467 3.128 11.5643C3.04244 11.3513 2.9405 11.0313 2.91275 10.4415C2.88281 9.80392 2.87681 9.61243 2.87681 7.9972C2.87681 6.38204 2.88281 6.19152 2.91275 5.5539C2.94062 4.96418 3.04244 4.6441 3.128 4.43089C3.24131 4.14862 3.37694 3.94702 3.59575 3.73533C3.8145 3.52364 4.02281 3.39257 4.3145 3.28273C4.53481 3.19956 4.86569 3.10128 5.47506 3.07418C6.05162 3.04896 6.27506 3.0414 7.43988 3.04013V3.04164ZM11.3368 4.04591C10.9228 4.04591 10.5868 4.37071 10.5868 4.77148C10.5868 5.17218 10.9228 5.49729 11.3368 5.49729C11.7509 5.49729 12.0868 5.17218 12.0868 4.77148C12.0868 4.37077 11.7509 4.04567 11.3368 4.04567V4.04591ZM8.00056 4.89396C6.22806 4.89396 4.79094 6.28473 4.79094 8.00011C4.79094 9.71549 6.22806 11.1056 8.00056 11.1056C9.77312 11.1056 11.2098 9.71549 11.2098 8.00011C11.2098 6.28479 9.773 4.89396 8.00044 4.89396H8.00056ZM8.00056 5.98394C9.15112 5.98394 10.0839 6.88654 10.0839 8.00011C10.0839 9.11356 9.15112 10.0163 8.00056 10.0163C6.84994 10.0163 5.91725 9.11356 5.91725 8.00011C5.91725 6.88654 6.84994 5.98394 8.00056 5.98394Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <radialGradient id="paint0_radial_459_42403" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.25 16.9347) rotate(-90) scale(15.3457 14.7484)">
                                            <stop stop-color="#FFDD55"/>
                                            <stop offset="0.1" stop-color="#FFDD55"/>
                                            <stop offset="0.5" stop-color="#FF543E"/>
                                            <stop offset="1" stop-color="#C837AB"/>
                                            </radialGradient>
                                            <radialGradient id="paint1_radial_459_42403" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-2.68006 1.37368) rotate(78.3139) scale(6.86855 29.1799)">
                                            <stop stop-color="#3771C8"/>
                                            <stop offset="0.128" stop-color="#3771C8"/>
                                            <stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
                                            </radialGradient>
                                            <clipPath id="clip0_459_42403">
                                            <rect width="16" height="15.4839" fill="white" transform="translate(0 0.258301)"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-white text-xs font-normal tracking-tight">@fatcol</div>
                            </div>
                            <div className="p-2 rounded-xl border border-blue-600 justify-start items-center gap-2 flex">
                                <div className="w-4 h-4 relative">
                                    <div className="w-4 h-4 left-0 top-0 absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_459_42410)">
                                        <path d="M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z" fill="white"/>
                                        <path d="M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z" fill="#1D9BF0"/>
                                        <path d="M12.4733 5.71318C12.4801 5.81237 12.4801 5.91156 12.4801 6.01168C12.4801 9.0615 10.1584 12.5789 5.91294 12.5789V12.577C4.65876 12.5788 3.43056 12.2196 2.375 11.5423C2.55737 11.5642 2.74063 11.5752 2.92438 11.5756C3.96385 11.5764 4.97343 11.2278 5.79087 10.5857C5.30925 10.5766 4.8425 10.4172 4.4559 10.1298C4.0693 9.84244 3.78216 9.44144 3.63462 8.98287C3.98042 9.04955 4.33691 9.03595 4.67662 8.94312C3.59987 8.72556 2.82519 7.7795 2.82519 6.68075V6.6515C3.14618 6.83029 3.50543 6.92936 3.87269 6.94037C2.85856 6.26256 2.54594 4.91337 3.15831 3.8585C3.73777 4.57156 4.46075 5.15475 5.28028 5.57019C6.09982 5.98562 6.99758 6.22401 7.91525 6.26987C7.82375 5.87602 7.83727 5.46505 7.95444 5.07806C8.07161 4.69107 8.28834 4.34163 8.58294 4.06468C9.51256 3.19081 10.9746 3.23562 11.8485 4.16475C12.3654 4.0627 12.861 3.87321 13.3142 3.60443C13.1419 4.13885 12.7813 4.59248 12.2996 4.88093C12.7571 4.82703 13.2039 4.70455 13.625 4.51762C13.3153 4.9815 12.9252 5.38632 12.4733 5.71318Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_459_42410">
                                        <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-black text-xs font-normal tracking-tight">@fatgjk</div>
                            </div>
                            <div className="p-2 rounded-xl border border-blue-600 justify-start items-center gap-2 flex">
                                <div className="w-4 h-3 relative"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                <g clip-path="url(#clip0_459_42417)">
                                    <path d="M15.6466 2.12969C15.5549 1.79053 15.3758 1.48134 15.1274 1.23289C14.879 0.984445 14.5698 0.805413 14.2306 0.713625C12.989 0.375 7.99189 0.375 7.99189 0.375C7.99189 0.375 2.99451 0.38525 1.75289 0.723875C1.41373 0.815669 1.10454 0.99471 0.856102 1.24317C0.607665 1.49163 0.428651 1.80084 0.336887 2.14C-0.0386755 4.34613 -0.184363 7.70775 0.347199 9.82563C0.438973 10.1648 0.617991 10.474 0.866427 10.7224C1.11486 10.9709 1.42405 11.1499 1.7632 11.2417C3.00482 11.5803 8.00208 11.5803 8.00208 11.5803C8.00208 11.5803 12.9993 11.5803 14.2408 11.2417C14.58 11.1499 14.8892 10.9709 15.1376 10.7224C15.3861 10.474 15.5651 10.1648 15.6569 9.82563C16.053 7.61638 16.1751 4.25681 15.6466 2.12969Z" fill="#FF0000"/>
                                    <path d="M6.40137 8.37891L10.5469 5.97779L6.40137 3.57666V8.37891Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_459_42417">
                                    <rect width="16" height="11.25" fill="white" transform="translate(0 0.375)"/>
                                    </clipPath>
                                </defs>
                                </svg></div>
                                <div className="text-black text-xs font-normal tracking-tight">@fatgjk</div>
                            </div>
                            <div className="p-3 bg-blue-600 rounded-3xl justify-start items-start gap-2.5 flex"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                            <path d="M8.5 1V17V1ZM16 9H1H16Z" fill="white"/>
                            <path d="M8.5 1V17M16 9H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></div>
                        </div>

                        <div className=" w-[1013px] h-[205px] mt-6 px-8 py-6 bg-white rounded-2xl shadow flex-col justify-start items-start gap-8 inline-flex">
                            <div className="w-[1013px] h-[205px] relative">
                                <img className="w-16 h-16 left-0 top-0 absolute rounded-full" src="./../Images/Ellipse 9.png" />
                                <div className="w-96 h-16 left-[73px] top-0 absolute">
                                    <div className="left-0 top-0 absolute text-black text-base font-semibold tracking-tight">@fatcolo</div>
                                    <div className="w-96 h-9 left-[3px] top-[30px] absolute text-black text-xs font-normal tracking-wide">Lorem ipsum dolor sit amet. At nobis eveniet quo provident optio non nisi animi vel repellat voluptates no.</div>
                                </div>
                            </div>
                            <div className="w-96 justify-start items-start gap-10 inline-flex">
                                <div className="justify-start items-center gap-11 flex">
                                    <div className="justify-center items-center gap-3.5 flex">
                                        <div className="w-10 h-10 relative">
                                            <div className="w-10 h-10 left-0 top-0 absolute bg-purple-50 rounded-full" />
                                            <div className="w-6 h-6 left-[8px] top-[8px] absolute"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                            <path d="M12.0001 14.9001C12.6366 14.9001 13.2471 14.6472 13.6972 14.1972C14.1472 13.7471 14.4001 13.1366 14.4001 12.5001C14.4001 11.8636 14.1472 11.2531 13.6972 10.803C13.2471 10.353 12.6366 10.1001 12.0001 10.1001C11.3636 10.1001 10.7531 10.353 10.303 10.803C9.85295 11.2531 9.6001 11.8636 9.6001 12.5001C9.6001 13.1366 9.85295 13.7471 10.303 14.1972C10.7531 14.6472 11.3636 14.9001 12.0001 14.9001Z" fill="#4169E1"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.549805 12.5001C2.0786 7.6317 6.6266 4.1001 12.0002 4.1001C17.3738 4.1001 21.9218 7.6317 23.4506 12.5001C21.9218 17.3685 17.3738 20.9001 12.0002 20.9001C6.6266 20.9001 2.0786 17.3685 0.549805 12.5001ZM16.8002 12.5001C16.8002 13.7731 16.2945 14.994 15.3943 15.8942C14.4941 16.7944 13.2732 17.3001 12.0002 17.3001C10.7272 17.3001 9.50627 16.7944 8.60609 15.8942C7.70592 14.994 7.2002 13.7731 7.2002 12.5001C7.2002 11.2271 7.70592 10.0062 8.60609 9.10598C9.50627 8.20581 10.7272 7.7001 12.0002 7.7001C13.2732 7.7001 14.4941 8.20581 15.3943 9.10598C16.2945 10.0062 16.8002 11.2271 16.8002 12.5001Z" fill="#4169E1"/>
                                            </svg></div>
                                        </div>
                                        <div className="w-24 h-11 text-black text-xl font-semibold tracking-widest"><span>980K <br/></span><span className="text-black text-xs font-medium tracking-wide">Avg. Reel View</span></div>
                                    </div>
                                    <div className="justify-start items-start gap-2.5 flex">
                                        <div className="w-10 h-10 relative">
                                            <div className="w-10 h-10 left-0 top-0 absolute bg-purple-50 rounded-full" />
                                            <div className="w-5 h-5 left-[10px] top-[10px] absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <g clip-path="url(#clip0_459_42439)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.45953 1.7819C2.39434 0.687674 3.66206 0.0729698 4.98389 0.0729698C6.30572 0.0729698 7.57343 0.687674 8.50825 1.7819L9.96884 3.49063L11.4294 1.7819C11.8893 1.22443 12.4393 0.779771 13.0475 0.47387C13.6557 0.16797 14.3098 0.00695497 14.9717 0.000220378C15.6336 -0.00651421 16.29 0.141167 16.9027 0.434646C17.5153 0.728125 18.0719 1.16152 18.5399 1.70956C19.008 2.25759 19.3781 2.90928 19.6288 3.6266C19.8794 4.34392 20.0056 5.11251 19.9998 5.88751C19.9941 6.66252 19.8565 7.42842 19.5953 8.14054C19.334 8.85265 18.9543 9.49671 18.4782 10.0351L9.96884 20L1.45953 10.0351C0.524992 8.94057 0 7.45623 0 5.90852C0 4.36081 0.524992 2.87647 1.45953 1.7819Z" fill="#4169E1"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_459_42439">
                                                        <rect width="20" height="20" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-24 h-11"><span className="text-black text-xl font-semibold tracking-widest">980K <br/></span><span className="text-black text-xs font-medium tracking-wide">Avg. Reel Like</span></div>
                                    </div>
                                    <div className="justify-center items-center gap-3.5 flex">
                                        <div className="w-10 h-10 relative">
                                            <div className="w-10 h-10 left-0 top-0 absolute bg-purple-50 rounded-full" />
                                            <div className="w-6 h-6 left-[8px] top-[6px] absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path d="M15.6002 7.7001C15.6002 8.65488 15.2209 9.57055 14.5458 10.2457C13.8706 10.9208 12.955 11.3001 12.0002 11.3001C11.0454 11.3001 10.1297 10.9208 9.45461 10.2457C8.77948 9.57055 8.4002 8.65488 8.4002 7.7001C8.4002 6.74532 8.77948 5.82964 9.45461 5.15451C10.1297 4.47938 11.0454 4.1001 12.0002 4.1001C12.955 4.1001 13.8706 4.47938 14.5458 5.15451C15.2209 5.82964 15.6002 6.74532 15.6002 7.7001ZM21.6002 10.1001C21.6002 10.7366 21.3473 11.3471 20.8973 11.7972C20.4472 12.2472 19.8367 12.5001 19.2002 12.5001C18.5637 12.5001 17.9532 12.2472 17.5031 11.7972C17.0531 11.3471 16.8002 10.7366 16.8002 10.1001C16.8002 9.46358 17.0531 8.85313 17.5031 8.40304C17.9532 7.95295 18.5637 7.7001 19.2002 7.7001C19.8367 7.7001 20.4472 7.95295 20.8973 8.40304C21.3473 8.85313 21.6002 9.46358 21.6002 10.1001ZM16.8002 18.5001C16.8002 17.2271 16.2945 16.0062 15.3943 15.106C14.4941 14.2058 13.2732 13.7001 12.0002 13.7001C10.7272 13.7001 9.50626 14.2058 8.60608 15.106C7.70591 16.0062 7.2002 17.2271 7.2002 18.5001V22.1001H16.8002V18.5001ZM7.2002 10.1001C7.2002 10.7366 6.94734 11.3471 6.49725 11.7972C6.04717 12.2472 5.43672 12.5001 4.8002 12.5001C4.16368 12.5001 3.55323 12.2472 3.10314 11.7972C2.65305 11.3471 2.4002 10.7366 2.4002 10.1001C2.4002 9.46358 2.65305 8.85313 3.10314 8.40304C3.55323 7.95295 4.16368 7.7001 4.8002 7.7001C5.43672 7.7001 6.04717 7.95295 6.49725 8.40304C6.94734 8.85313 7.2002 9.46358 7.2002 10.1001ZM19.2002 22.1001V18.5001C19.2019 17.28 18.8921 16.0797 18.3002 15.0129C18.8322 14.8767 19.3883 14.8639 19.926 14.9754C20.4638 15.0868 20.9689 15.3196 21.403 15.656C21.8371 15.9924 22.1886 16.4235 22.4307 16.9164C22.6729 17.4092 22.7992 17.9509 22.8002 18.5001V22.1001H19.2002ZM5.7002 15.0129C5.10829 16.0798 4.79851 17.28 4.8002 18.5001V22.1001H1.2002V18.5001C1.19996 17.9505 1.32555 17.4082 1.56733 16.9147C1.80911 16.4212 2.16067 15.9896 2.59506 15.653C3.02944 15.3164 3.53513 15.0837 4.07337 14.9727C4.6116 14.8618 5.16809 14.8755 5.7002 15.0129Z" fill="#4169E1"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-20 h-11"><span className="text-black text-xl font-semibold tracking-widest">980K <br/></span><span className="text-black text-xs font-medium tracking-wide">Followers</span></div>
                                    </div>
                                </div>
                                <div className="justify-start items-start gap-6 flex">
                                    <div className="justify-center items-center gap-2.5 flex">
                                        <div className="w-10 h-10 relative">
                                            <div className="w-10 h-10 left-0 top-0 absolute bg-purple-50 rounded-full" />
                                            <div className="w-6 h-6 left-[8px] top-[8px] absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1085 2.94089C14.4409 3.02849 14.7193 3.25526 14.8741 3.56366C15.4537 4.72406 15.8869 5.4285 16.3225 5.9997C16.7641 6.5781 17.2297 7.05087 17.9401 7.76007C19.5793 9.40047 20.4001 11.5521 20.4001 13.7001C20.4001 15.8481 19.5793 17.9997 17.9401 19.6401C14.6593 22.9197 9.3409 22.9197 6.0601 19.6401C4.4209 17.9997 3.6001 15.8481 3.6001 13.7001C3.6001 11.5521 4.4209 9.40047 6.0601 7.76007C6.4033 7.41687 6.9193 7.31487 7.3681 7.50087C7.8169 7.68567 8.1085 8.12371 8.1085 8.60851C8.1085 9.95251 8.1925 10.9761 8.5861 11.7933C8.8021 12.2421 9.1393 12.6813 9.7201 13.0737C9.8593 11.8005 10.1137 10.2489 10.4569 8.7777C10.7269 7.6185 11.0629 6.46169 11.4637 5.49689C11.6641 5.01329 11.8909 4.55486 12.1477 4.15766C12.3973 3.77126 12.7189 3.37892 13.1341 3.10172C13.4209 2.91092 13.7761 2.85209 14.1085 2.94089ZM14.5453 18.6453C13.1401 20.0517 10.8601 20.0517 9.45489 18.6453C8.75169 17.9433 8.4001 17.0217 8.4001 16.1001C8.4001 16.1001 9.4549 16.7001 11.4001 16.7001C11.4001 15.5001 12.0001 11.9001 12.9001 11.3001C13.5001 12.5001 13.8433 12.8517 14.5453 13.5549C15.2485 14.2569 15.6001 15.1785 15.6001 16.1001C15.6001 17.0217 15.2485 17.9433 14.5453 18.6453Z" fill="#4169E1"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-32 h-11"><span className="text-black text-xl font-semibold tracking-widest">8.34%<br/></span><span className="text-black text-xs font-medium tracking-wide">Engagement Rate</span></div>
                                    </div>
                                    <div className="justify-start items-center gap-2.5 flex">
                                        <div className="w-10 h-10 relative">
                                            <div className="w-10 h-10 left-0 top-0 absolute bg-purple-50 rounded-full" />
                                            <div className="w-7 h-7 left-[5px] top-[6px] absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                                    <path d="M2.8999 7.5002C2.8999 6.75759 3.20544 6.0454 3.74929 5.5203C4.29315 4.99519 5.03077 4.7002 5.7999 4.7002H15.9499C16.719 4.7002 17.4567 4.99519 18.0005 5.5203C18.5444 6.0454 18.8499 6.75759 18.8499 7.5002V13.1002C18.8499 13.8428 18.5444 14.555 18.0005 15.0801C17.4567 15.6052 16.719 15.9002 15.9499 15.9002H13.0499L8.6999 20.1002V15.9002H5.7999C5.03077 15.9002 4.29315 15.6052 3.74929 15.0801C3.20544 14.555 2.8999 13.8428 2.8999 13.1002V7.5002Z" fill="#4169E1"/>
                                                    <path d="M21.75 10.2998V13.0998C21.75 14.585 21.139 16.0094 20.0513 17.0596C18.9636 18.1098 17.4883 18.6998 15.95 18.6998H14.2506L11.6899 21.1736C12.0959 21.3822 12.5585 21.4998 13.05 21.4998H15.95L20.3 25.6998V21.4998H23.2C23.9692 21.4998 24.7068 21.2048 25.2507 20.6797C25.7945 20.1546 26.1 19.4424 26.1 18.6998V13.0998C26.1 12.3572 25.7945 11.645 25.2507 11.1199C24.7068 10.5948 23.9692 10.2998 23.2 10.2998H21.75Z" fill="#4169E1"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-28 h-11"><span className="text-black text-xl font-semibold tracking-widest">980K <br/></span><span className="text-black text-xs font-medium tracking-wide">Avg. Comments</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[696px] h-[230px] flex-col justify-start items-start gap-6 inline-flex">
                            <div className="px-12 py-2 rounded-xl justify-start items-start gap-16 inline-flex">
                                <div className="flex-col justify-center items-center inline-flex">
                                    <div className="text-neutral-600 text-xl font-medium tracking-wide">Content Categories</div>
                                </div>
                                <div className="flex-col justify-start items-center inline-flex">
                                    <div className="text-black text-xl font-medium tracking-wide">Brands</div>
                                    <div className=" justify-center w-[38px] h-[2px] bg-black"/>

                                </div>
                                <div className="flex-col justify-start items-center inline-flex">
                                    <div className="text-neutral-600 text-xl font-medium tracking-wide">Posts</div>
                                </div>
                                <div className="flex-col justify-start items-center inline-flex">
                                    <div className="text-neutral-600 text-xl font-medium tracking-wide">Reels</div>
                                </div>
                            </div>
                            <div className="justify-start items-start gap-10 inline-flex">
                                <div className="px-8 py-6 bg-purple-50 rounded border border-black flex-col justify-start items-center gap-4 inline-flex">
                                    <img className="w-24 h-14" src="./../Images/ajio 1.png" />
                                    <div className="text-center text-black text-xs font-normal tracking-tight">@Ajio<br/>10 Posts</div>
                                </div>
                                <div className="px-8 py-6 bg-purple-50 rounded border border-black flex-col justify-start items-center gap-4 inline-flex">
                                    <img className="w-24 h-14" src="./../Images/myntra 1.png" />
                                    <div className="text-center text-black text-xs font-normal tracking-tight">@Myntra<br/>10 Posts</div>
                                </div>
                                <div className="px-8 py-6 bg-purple-50 rounded border border-black flex-col justify-start items-center gap-4 inline-flex">
                                    <img className="w-24 h-14" src="./../Images/flipkart 1.png" />
                                    <div className="text-center text-black text-xs font-normal tracking-tight">@Flipkart<br/>10 Posts</div>
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

export default Profile2
