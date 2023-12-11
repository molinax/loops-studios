const NavMobile = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-full -z-10 flex items-center px-6 bg-black">
      <ul className="flex flex-col gap-6 text-white">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavMobile
