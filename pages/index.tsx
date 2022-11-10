import React from 'react';
import About from '../features/about';
import Events from '../features/events';
import Hero from '../features/hero';
import Nav from '../features/nav';
import Rooms from '../features/rooms';

const Home = () => {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Rooms />
      <Events />
      <About />
    </React.Fragment>
  );
};

export default Home;
