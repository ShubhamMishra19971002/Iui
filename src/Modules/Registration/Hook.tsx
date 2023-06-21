import React, { useState } from 'react'
import { hookProps } from './dto'

const useSignUp = (props:hookProps) => {
    const [screen,setScreen]=useState(props.screen as string)


    const selectMethod=(screen:string)=>{
        setView(screen)
    }
    const setView=(screen:string)=>{
        setScreen(screen)
    }

  return {
    setView,screen
  }
}

export default useSignUp