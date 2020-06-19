import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';


const HomePageLander = () => {
  return (
    <div>
        <h3>Your favorite food, delivered while coding.</h3>
        <Link to='/pizza'>
          <button>Pizza?</button>
        </Link>
    </div>
  );
};
export default HomePageLander;
