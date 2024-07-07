import { Link } from "react-router-dom"

function NavBar() {
  return (
    <header className="header">
        <nav className="nav container">
        <h1 className="brand">
           <Link to={'/'} > #VANLIFE </Link>
        </h1>
        <ul className="nav-links">
            <li className="nav-item">
                <Link to='/about' >About</Link>
            </li>
            <li className="nav-item">
                <Link to='/vans' >Vans</Link>
            </li>
        </ul>
        </nav>

    </header>
  )
}

export default NavBar