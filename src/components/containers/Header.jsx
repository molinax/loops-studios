import { HamburguerIcon } from '../Icons'

import logo from '../../../public/images/logo.svg'
import NavMobile from './NavMobile'

const Header = () => {
  return (
    <header className="container py-6 flex justify-between items-center bg-slate-300">
      <img src={logo} alt="Loopstudios logo" />

      <HamburguerIcon />
      <NavMobile />
    </header>
  )
}

export default Header
