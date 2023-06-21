import React from 'react'
import { buttonProps } from '../../Dto/tabs'
import ButtonScreen from './Screen'

const Button = (props:buttonProps) => {
    return(
        <><ButtonScreen action={props.action} buttonName={props.buttonName} /></>
    )
 
}

export default Button