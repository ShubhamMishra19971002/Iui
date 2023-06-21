import React from 'react'
import TabScreen from './Screen'
import { tabprops } from '../../Dto/tabs'

const Tabs = (props:tabprops) => {

  return (<>
  <div className='text-center'>
    <TabScreen tabList={props.tabList}/>
    </div>  
    </>
  )
}

export default Tabs