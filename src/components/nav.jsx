import React from 'react';
import sign from '../../public/sign.png'

const Nav = () => {
  return (
    <div>
        <nav className="navbar">
      <div className="logo item">
        <img id="logo" src={sign} />
      </div>

      <button> Get Started
</button>
    </nav>
    </div>
  );
}

export default Nav;
