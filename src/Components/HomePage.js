import React from 'react';

import HomePageLander from "./HomePageComponents/HomePageLander";
import HomePageContent from './HomePageComponents/HomePageContent'

const HomePage = () => {
  return (
    <section className='home-container'>
        <HomePageLander/>
        <HomePageContent/>
    </section>
  );
};
export default HomePage;
