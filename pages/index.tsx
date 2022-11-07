import Head from 'next/head';
import React from 'react';
import About from '../features/about';
import Events from '../features/events';
import Hero from '../features/hero';
import Nav from '../features/nav';
import Rooms from '../features/rooms';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          key="fonts.googleapis"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
          key="fontsgstatic"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@500;700&family=Montserrat:wght@400;600&family=Poppins:wght@100;200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Hero />
      <About />
      <Rooms />
      <Events />
    </React.Fragment>
  );
};

export default Home;
