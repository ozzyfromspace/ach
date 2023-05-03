import React from 'react';
import About from '../features/about';
import Amenities, {
  getAmenitiesDataFromContentful,
} from '../features/amenities/Amenities';
import { AmenityData } from '../features/amenities/amenityData';
import Events, {
  EventsData,
  getEventsDataFromContentful,
} from '../features/events/events';
import FocusedSectionProvider from '../features/focusedSectionProvider/FocusedSectionProvider';
import Hero, {
  HeroData,
  getHeroDataFromContentful,
} from '../features/hero/hero';
import Nav from '../features/nav';
import ReviewsSection, {
  getReviewsFromContentful,
} from '../features/reviews/Reviews';
import Rooms, { getRoomsDataFromContentful } from '../features/rooms/rooms';
import { RoomData } from '../features/rooms/types';
import SEOHead from '../features/seohead';
import { Review } from '../utils/assertReview';

export async function getServerSideProps() {
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

  return (
    <React.Fragment>
      <SEOHead
        author="Oswald Chisala"
        description="The Athens Central Hotel is a Greek-inspired boutique hotel in the heart of Athens, Ohio"
        title="Athens Central Hotel"
      />
      <FocusedSectionProvider>
        <Nav isHome />
        <Hero aboutInView={false} ads={true} data={heroData} />
        <Rooms roomDataSlice={roomsData} />
        <Amenities grayscale={false} data={amenitiesData} />
        <Events {...eventsData} />
        <ReviewsSection reviews={reviews} showImage={false} />
        <About />
      </FocusedSectionProvider>
      {/* <div className="fixed z-[100] bottom-6 left-1/2 -translate-x-1/2 w-fit">
        <Button
          label="Book A Room Now"
          className="max-w-fit mr-auto"
          selected
        />
      </div> */}
      {/* <div className="fixed z-[100] bottom-0 left-0 right-0 bg-white p-4 flex justify-center items-center">
        <div className="mx-auto">
          <a href={bookingLink} tabIndex={-1} aria-label="Book Now">
            <Button
              label="Book A Room Now"
              className="max-w-fit mr-auto"
              selected
            />
          </a>
        </div>
      </div> */}
      {/* <div className="fixed z-[10000] top-0 left-0 bg-white p-4 flex justify-center items-center">
        <div className="mx-auto">
          <Link href="/">
            <HomeIcon />
          </Link>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default Home;
