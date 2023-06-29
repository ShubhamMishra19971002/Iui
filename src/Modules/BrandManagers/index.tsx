import React from 'react'
import useBrandManagerHook from './Hooks';
import Views from './Views';

function BrandManager() {
    const hook = useBrandManagerHook
  return (
    <>
    <Views hook={hook}/>
    </>
  )
}

export default  BrandManager;