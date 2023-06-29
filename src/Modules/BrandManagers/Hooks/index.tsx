import React,{useState} from 'react'

const useBrandManagerHook = () => {
const [brandName, setBrandName] = useState("" as string); 

  return {
    brandName,
  }
}

export default useBrandManagerHook
