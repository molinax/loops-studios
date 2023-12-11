import { useState } from 'react'
import { HamburguerIcon, CloseIcon } from '../Icons'

import logo from '../../../public/images/logo.svg'
import NavMobile from './NavMobile'

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const switchMenu = () => setIsMenuOpened(!isMenuOpened)

  return (
    <header className="container py-8 flex justify-between items-center bg-slate-300">
      <img src={logo} alt="Loopstudios logo" />

      { isMenuOpened
        ? <><CloseIcon onClick={switchMenu} /> <NavMobile /></>
        : <HamburguerIcon onClick={switchMenu} /> }
    </header>
  )
}

export default Header
