import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(false);
  const closeMobileMenu = () => setClick(true);



  return (

    <div className='home'>

      <>

        <nav className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> &nbsp;&nbsp;Healthy Food</Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HEALTHY RECIPES
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                BLOG
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Join'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                JOIN
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Register'
                className='nav-links register'
                onClick={closeMobileMenu}
              >
                REGISTER
              </Link>
            </li>
          </ul>
          <Button />
        </nav>

        <h2 className='ready'>Ready for Trying a new recipe?</h2>

      </>

      <div className='barsearch'>
        <header>
          <form action="#" method="post" className='search01'>
            <input type="text" name="search" id="search1" placeholder="Search healthy recipes" required></input>
            <i type="submit"><i className="fas fa-search"></i></i>
          </form>
        </header>
      </div>

    </div>

  );
}

export default Navbar;
