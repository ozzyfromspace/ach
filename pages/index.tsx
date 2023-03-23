import React from 'react';
import { useInView } from 'react-intersection-observer';
import About from '../features/about';
import Amenities from '../features/amenities';
import Events from '../features/events';
import FocusedSectionProvider from '../features/focusedSectionProvider/FocusedSectionProvider';
import Hero from '../features/hero';
import { getHeroDataFromContentful, HeroData } from '../features/hero/hero';
import Nav from '../features/nav';
import ReviewsSection from '../features/reviews/Reviews';
import Rooms from '../features/rooms';
import { getRoomsDataFromContentful } from '../features/rooms/rooms';
import { RoomData } from '../features/rooms/types';
import SEOHead from '../features/seohead';
import useStickyState from '../hooks/useStickState';

export async function getStaticProps() {
  const heroData = await getHeroDataFromContentful();
  const roomsData = await getRoomsDataFromContentful();

  return {
    props: {
      heroData,
      roomsData,
    },
  };
}

interface HomeProps {
  heroData: HeroData;
  roomsData: RoomData[];
}

const Home = (props: HomeProps) => {
  const { heroData, roomsData } = props;

  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const contactStickyState = useStickyState();

  return (
    <React.Fragment>
      <SEOHead
        author="Oswald Chisala"
        description="The Athens Central Hotel is a Greek-inspired boutique hotel in the heart of Athens, Ohio"
        title="Athens Central Hotel"
      />
      <FocusedSectionProvider>
        <Nav aboutHeaderInView={contactStickyState.isSticky} isHome />
        <Hero aboutInView={aboutInView} ads={true} data={heroData} />
        <Rooms roomDataSlice={roomsData} />
        <Amenities grayscale={false} />
        <Events />
        <ReviewsSection />
        <About aboutRef={aboutRef} stickyState={contactStickyState} />
      </FocusedSectionProvider>
    </React.Fragment>
  );
};

export default Home;
