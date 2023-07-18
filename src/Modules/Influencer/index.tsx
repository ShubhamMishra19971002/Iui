import React from 'react'
import UseInfluencerHook from './Hooks';
import Views from './Views';

function Influencer() {
    const hook =UseInfluencerHook
    return (
        <>
            <Views hook={hook}/>
        </>
    )
}

export default Influencer;