import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
        <h1>Lambda Eats</h1>
        <nav>
            <Link to='/'>
                <p>Home</p>
            </Link>
            <p>Help</p>
        </nav>
    </header>
  );
};
export default Header;
