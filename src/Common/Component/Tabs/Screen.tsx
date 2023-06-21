import React from 'react'
import { tabprops } from '../../Dto/tabs'

const TabScreen = (props: tabprops) => {
    return (
        <> {
            props.tabList.map((tab,index)=>{return (
            <div className="flex flex-row"><button type="button" className="text-black flex text-center  flex-row h-10 w-80 bg-white hover:bg-white-800 focus:ring-4   focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 border dark:bg-white dark:hover:bg-blue-700 focus:outline-none" disabled={tab.disabled}><span className='text-center'>{tab.tabName}</span></button>
    
    </div>)
})}
    </>

    )
}

export default TabScreen