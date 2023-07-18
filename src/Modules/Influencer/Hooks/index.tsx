import React, {useState} from "react";

const UseInfluencerHook = ()=>{
    const [influencerName, setInfluencerName] = useState("" as string);

    return{
        influencerName,
    }
}

export default UseInfluencerHook