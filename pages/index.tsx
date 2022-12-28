import React from 'react';
import { useInView } from 'react-intersection-observer';
import About from '../features/about';
import Events from '../features/events';
import Hero from '../features/hero';
import Nav from '../features/nav';
import Rooms from '../features/rooms';

const Home = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });

  return (
    <React.Fragment>
      <Nav />
      <Hero aboutInView={aboutInView} />
      <Rooms />
      <Events />
      <About aboutRef={aboutRef} />
    </React.Fragment>
  );
};

export default Home;
