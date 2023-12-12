const NavDesktop = () => {
  const beforeStyle = 'before:absolute before:-bottom-2 before:left-[32%] before:h-[2px] before:w-5 before:bg-transparent hover:before:bg-white'

  const navDesktopStyle = `relative text-white mb-2 ${beforeStyle}`

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-6">
        <li>
          <a href="#" className={navDesktopStyle}>About</a>
        </li>
        <li>
          <a href="#" className={navDesktopStyle}>Careers</a>
        </li>
        <li>
          <a href="#" className={navDesktopStyle}>Events</a>
        </li>
        <li>
          <a href="#" className={navDesktopStyle}>Products</a>
        </li>
        <li>
          <a href="#" className={navDesktopStyle}>Support</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavDesktop
