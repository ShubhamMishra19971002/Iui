import { ENTERMOBILENUMBER } from './Constants'
import useSignUp from './Hook'
import Signup from './SignupScreens/Signup'

const Registaration = () => {
  const hooksProps={screen:ENTERMOBILENUMBER}
  const hooks=useSignUp(hooksProps)
  return (
  <Signup hook={hooks} />
  )
}

export default Registaration