import aiLogo from '../assets/logo-ai.png'
import CartWidget from '../components/CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <nav id="navbar">
        <div className="nav-wrapper">
          <div className="logo">
            <Link to="/">
              <img height="auto" src={aiLogo} />
            </Link>
          </div>
      
          <ul id="menu">
            <li><Link to="/">[todas]</Link></li>
            <li><Link to="/category/interior">De interior</Link></li>
            <li><Link to="/category/exterior">De exterior</Link></li>
            <li><Link to="/category/comestible">Comestibles</Link></li>
            <CartWidget />
          </ul>
        </div>
      </nav>
    )
}

export default NavBar
