import React from 'react';
import { useInView } from 'react-intersection-observer';
import About from '../features/about';
import Amenities from '../features/amenities';
import { getAmenitiesDataFromContentful } from '../features/amenities/Amenities';
import { AmenityData } from '../features/amenities/amenityData';
import Events from '../features/events';
import {
  EventsData,
  getEventsDataFromContentful,
} from '../features/events/events';
import FocusedSectionProvider from '../features/focusedSectionProvider/FocusedSectionProvider';
import Hero from '../features/hero';
import { getHeroDataFromContentful, HeroData } from '../features/hero/hero';
import Nav from '../features/nav';
import ReviewsSection, {
  getReviewsFromContentful,
} from '../features/reviews/Reviews';
import Rooms from '../features/rooms';
import { getRoomsDataFromContentful } from '../features/rooms/rooms';
import { RoomData } from '../features/rooms/types';
import SEOHead from '../features/seohead';
import useStickyState from '../hooks/useStickState';
import { Review } from '../utils/assertReview';

export async function getStaticProps() {
  const heroData = await getHeroDataFromContentful();
  const roomsData = await getRoomsDataFromContentful();
  const amenitiesData = await getAmenitiesDataFromContentful();
  const eventsData = await getEventsDataFromContentful();
  const reviews = await getReviewsFromContentful();

  return {
    props: {
      heroData,
      roomsData,
      amenitiesData,
      eventsData,
      reviews,
    },
  };
}

interface HomeProps {
  heroData: HeroData;
  roomsData: RoomData[];
  amenitiesData: AmenityData[];
  eventsData: EventsData;
  reviews: Review[];
}

const Home = (props: HomeProps) => {
  const { heroData, roomsData, amenitiesData, eventsData, reviews } = props;

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
        <Amenities grayscale={false} data={amenitiesData} />
        <Events {...eventsData} />
        <ReviewsSection reviews={reviews} showImage={true} />
        <About aboutRef={aboutRef} stickyState={contactStickyState} />
      </FocusedSectionProvider>
    </React.Fragment>
  );
};

export default Home;
