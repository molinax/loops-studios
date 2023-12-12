const NavMobile = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-full -z-10 flex items-center bg-black">
      <ul className="container flex flex-col gap-8 text-white">
        <li>
          <a href="#" className="medium-title-text text-white">About</a>
        </li>
        <li>
          <a href="#" className="medium-title-text text-white">Careers</a>
        </li>
        <li>
          <a href="#" className="medium-title-text text-white">Events</a>
        </li>
        <li>
          <a href="#" className="medium-title-text text-white">Products</a>
        </li>
        <li>
          <a href="#" className="medium-title-text text-white">Support</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavMobile
