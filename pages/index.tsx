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
  ReviewSummaryStat,
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

function getAvgReviews(reviews: Review[]): string {
  if (reviews.length === 0) return '4.9';

  let sum = 0;

  for (const review of reviews) {
    sum += review.rating;
  }

  return (sum / reviews.length + '').substring(0, 4).padEnd(3, '.00') || '4.9';
}

const Home = (props: HomeProps) => {
  const { heroData, roomsData, amenitiesData, eventsData, reviews } = props;
  const reviewSummaryStat: ReviewSummaryStat = {
    averageReviews: getAvgReviews(reviews),
    numberOfReviews: reviews.length,
  };

  return (
    <React.Fragment>
      <SEOHead
        author="Oswald Chisala"
        description="The Athens Central Hotel is a Greek-inspired boutique hotel in the heart of Athens, Ohio"
        title="Athens Central Hotel"
      />
      <FocusedSectionProvider>
        <Nav isHome />
        <Hero
          aboutInView={false}
          ads={true}
          data={heroData}
          averageReviews={reviewSummaryStat}
        />
        <Rooms roomDataSlice={roomsData} />
        <Amenities grayscale={false} data={amenitiesData} />
        <Events {...eventsData} />
        <ReviewsSection reviews={reviews} showImage={false} />
        <About />
      </FocusedSectionProvider>
    </React.Fragment>
  );
};

export default Home;
