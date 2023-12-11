import { useState } from 'react'
import { HamburguerIcon, CloseIcon } from '../Icons'

import logo from '../../../public/images/logo.svg'
import NavMobile from './NavMobile'
import NavDesktop from './NavDesktop'

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const switchMenu = () => setIsMenuOpened(!isMenuOpened)

  return (
    <header className="container py-10 flex justify-between items-center md:py-6">
      <img src={logo} alt="Loopstudios logo" />

      <div className="block md:hidden">
        { isMenuOpened
          ? <>
              <CloseIcon onClick={switchMenu} />
              <NavMobile />
            </>
          : <HamburguerIcon onClick={switchMenu} /> }
      </div>
      <NavDesktop />
    </header>
  )
}

export default Header
