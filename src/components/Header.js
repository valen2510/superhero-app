import React from 'react';
import logo from '../images/superhero-logo.png';

function Header({ setIsAuth }) {
  function handleLogOut() {
    localStorage.clear();
    setIsAuth(false);
  }
  return (
    <nav
      className='navbar is-fixed-top is-link'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <a className='navbar-item' href='https://bulma.io'>
          <img src={logo} width='130' alt='superhero logo' />
        </a>
        <div
          role='button'
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </div>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-start'>
          <a className='navbar-item' href='/'>
            Home
          </a>
          <a className='navbar-item' href='/search'>
            Search character
          </a>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <button className='button' onClick={handleLogOut}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
