import { useEffect, useState } from 'react';
import { Link as ReactScrollLink } from 'react-scroll';
import { googleReviewSite } from '../../constants';
import useStickyState from '../../hooks/useStickState';
import { Review } from '../../utils/assertReview';
import { useFocusedSection } from '../focusedSectionProvider/FocusedSectionProvider';
import Padding from '../padding';
import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  const {
    refs: { Reviews: reviewsFocusingDescriptor },
  } = useFocusedSection();
  const { isSticky, ref } = useStickyState();

  const [reviewsData, setReviewsData] = useState<Review[]>(() => []);
  useEffect(() => {
    fetch('/api/reviews')
      .then<Review[]>((r) => r.json())
      .then((d) => setReviewsData(() => d));
  }, []);

  return (
    <div
      ref={reviewsFocusingDescriptor.ref}
      className="relative z-[1] w-full min-h-fit rounded-t-lg"
      id="reviews"
    >
      <div className="w-full">
        <div
          ref={ref}
          className={`${
            isSticky
              ? 'bg-[hsl(60,30%,96%)] bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-sm'
              : ''
          } w-full sticky top-[4.95rem] z-10 font-title select-none tracking-wider text-blue-deep text-2xl sm:text-3xl md:text-3xl font-normal mt:text-center flex flex-col justify-center py-5 mt-10 h-20`}
        >
          <Padding className="flex flex-col justify-center items-center">
            <ReactScrollLink
              to="reviews-content"
              spy={true}
              smooth={true}
              offset={-150}
              duration={380}
              className="p-2 rounded-full outline-offset-4"
              href="/#reviews"
            >
              <h2>Reviews</h2>
            </ReactScrollLink>
          </Padding>
        </div>
        <div className="my-4 w-fit mx-auto">
          <a
            href={googleReviewSite}
            target="_blank"
            rel="noreferrer"
            className="text-gray-link mx-auto"
          >
            More Reviews from google
          </a>
        </div>
        <Padding
          id="reviews-content"
          className="pt-8 mt-4 flex flex-row justify-center flex-wrap gap-3 pb-20"
        >
          {reviewsData.map((review) => (
            <ReviewCard
              key={review.id}
              {...review}
              isAdmin={false}
              updateDeletion={() => {}}
            />
          ))}
        </Padding>
      </div>
    </div>
  );
};

export default ReviewsSection;
