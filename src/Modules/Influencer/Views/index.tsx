import React from 'react'
import InfuencerHomeScreen from './InfluencerHomeScreen'
import Profile from './Profile'
import Profile2 from './Profile2'
import Profile3 from './Profile3'

const Views =(props:any)=>{
    console.log(props.hook)
    return(
        <>
            <InfuencerHomeScreen/>
            <Profile/>
            <Profile2/>
            <Profile3/>
        </>
    )
}
export default  Views;