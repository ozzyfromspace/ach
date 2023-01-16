import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import About from '../features/about';
import Amenities from '../features/amenities';
import Events from '../features/events';
import Hero from '../features/hero';
import Nav from '../features/nav';
import OverlapProvider from '../features/overlap/OverlapProvider';
import Rooms from '../features/rooms';
import SEOHead from '../features/seohead';

const Home = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const overlapRef = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   if(!document) return;

  //   const body: HTMLBOdy
  // }, []);

  return (
    <React.Fragment>
      <SEOHead
        author="Oswald Chisala"
        description="The Athens Central Hotel is a Greek-inspired hidden gem in the heart of Athens, Ohio"
        title="Athens Central Hotel"
      />
      {/* <div
        ref={overlapRef}
      ></div> */}
      <OverlapProvider overlapRef={overlapRef}>
        <Nav />
        <Hero aboutInView={aboutInView} />
        <Rooms />
        <Amenities />
        <Events />
        <About aboutRef={aboutRef} />
      </OverlapProvider>
    </React.Fragment>
  );
};

export default Home;
