import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';


const Header = () => {
  return (
    <header>
        <h1>Lambda Eats</h1>
        <nav>
            <Router>
                <Link to='/'>
                    <p>Home</p>
                </Link>
            </Router>
            <p>Help</p>
        </nav>
    </header>
  );
};
export default Header;
