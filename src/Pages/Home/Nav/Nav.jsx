import './Nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {

  const [showMenu, setShowMenu] = useState(false);
  

  const show = () =>{
    setShowMenu(!showMenu)
  }

  const hide=()=>{
    setShowMenu(false)
  }
  return (
    
    <>
      <div className="headerMenu">
      <div className="container">
        <header>
          <div className="logo">
            <h1><NavLink to="/">Virtue.</NavLink></h1>
          </div>
          <nav className="menuItems">
            <ul style={{height: showMenu ? '280px': false, padding: showMenu ? '40px': false, borderTop: showMenu ? '1px solid #c3c3c3': false}}>
              <li><NavLink onClick={hide} to="/home">homepage</NavLink></li>
              <li><NavLink onClick={hide} to="/about">about us</NavLink></li>
              <li><NavLink onClick={hide} to="/services">services</NavLink></li>
              <li><NavLink onClick={hide} to="/team">team</NavLink></li>
              <li><NavLink onClick={hide} to="/contact">contact</NavLink></li>
            </ul>
          </nav>
          <div onClick={show}  className="bar"><MenuIcon/></div>
        </header>
      </div>
      </div>
    </>
  )
}

export default Nav


