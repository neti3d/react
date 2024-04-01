import aiLogo from '../assets/logo-ai.png'
import CartWidget from '../components/CartWidget'

function NavBar() {
    return (
      <nav id="navbar">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#">
              <img height="auto" src={aiLogo} />
              </a>
          </div>
      
          <ul id="menu">
            <li><a href="#">Plantas</a></li>
            <li><a href="#">Comprar</a></li>
            <CartWidget />
          </ul>
        </div>
      </nav>
    )
  }

export default NavBar