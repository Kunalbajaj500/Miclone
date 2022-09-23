
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/768px-Xiaomi_logo.svg.png"


const Navbar = ({setShow,size}) => {

  return (
    <div className='nav'>
      <div className='logo'>

        <Link to="/">
        <span   onClick={() => setShow(true)}>
          <img id='logoImage' src={logo} alt="Not" />
          </span>
        </Link>
</div>
        <Link className="navlinks" to="/phone1">Mi Phones</Link>
        <Link className="navlinks" to="/redmi">Redmi Phones</Link>
        <Link className="navlinks" to="/tv">TV</Link>
        <Link className="navlinks" to="/laptop">Laptops</Link>
        <Link className="navlinks" to="/fit">Fitness & Lifestyle</Link>
        <Link className="navlinks" to="/acces">Audio</Link> 

        <div className="searchbox">
          <input type="text" name="search" placeholder='Search Products' />
        </div>
      </div>

    
  )
}

export default Navbar
