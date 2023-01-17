import React from 'react';
import { useInView } from 'react-intersection-observer';
import About from '../features/about';
import Amenities from '../features/amenities';
import Events from '../features/events';
import FocusedSectionProvider from '../features/focusedSectionProvider/FocusedSectionProvider';
import Hero from '../features/hero';
import Nav from '../features/nav';
import Rooms from '../features/rooms';
import SEOHead from '../features/seohead';
import useStickyState from '../hooks/useStickState';

const Home = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const contactStickyState = useStickyState();

  return (
    <React.Fragment>
      <SEOHead
        author="Oswald Chisala"
        description="The Athens Central Hotel is a Greek-inspired hidden gem in the heart of Athens, Ohio"
        title="Athens Central Hotel"
      />
      <FocusedSectionProvider>
        <Nav aboutHeaderInView={contactStickyState.isSticky} />
        <Hero aboutInView={aboutInView} />
        <Rooms />
        <Amenities />
        <Events />
        <About aboutRef={aboutRef} stickyState={contactStickyState} />
      </FocusedSectionProvider>
    </React.Fragment>
  );
};

export default Home;
