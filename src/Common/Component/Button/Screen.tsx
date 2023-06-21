import React from 'react'
import { buttonProps } from '../../Dto/tabs'

const ButtonScreen = (props:buttonProps) => {
    return (
        <div>
        <button type="button" onClick={props.action} className="text-white text-center ml-10 w-80 bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5  inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
            <span className='text-center ml-20'>{props.buttonName.toUpperCase()}</span>
        </button>
    </div>
      )
}

export default ButtonScreen