import React from 'react'
import EnterMobileNumber from './EnterMobileNumber'
import { signUpProps } from '../dto'
import { ENTERMOBILENUMBER, VERIFYPHONENUMBER } from '../Constants'
import VerifyMobile from './VerifyMobile'
import Method from './Method'

const Signup = (props: signUpProps) => {
    return (
        <>
        {/* {props.hook.screen === ENTERMOBILENUMBER && <EnterMobileNumber />}
            {props.hook.screen === VERIFYPHONENUMBER && <VerifyMobile />}
        </> */
        }
        <Method/>
        </>

    )
}

export default Signup